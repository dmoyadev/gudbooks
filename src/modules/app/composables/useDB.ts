import type {
	DocumentData,
	FirestoreDataConverter,
	QueryConstraint,
	QueryDocumentSnapshot,
	SnapshotOptions,
	WithFieldValue,
} from 'firebase/firestore';
import {
	Timestamp,
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	updateDoc,
	where,
} from 'firebase/firestore';
import { ref } from 'vue';
import { db } from '@/utils/firebase.ts';
import { useAuth } from '@/modules/auth/composables/useAuth.ts';

export function useDB(collectionName: string) {
	const loading = ref(false);
	const error = ref();

	function getConverter<T>() {
		const converter: FirestoreDataConverter<T> = {
			toFirestore: (element: any): DocumentData => ({ ...element } as DocumentData),
			fromFirestore: (snapshot: QueryDocumentSnapshot, options?: SnapshotOptions) => ({ ...snapshot.data(options) } as T),
		};
		return converter;
	}

	async function getAll<T>(): Promise<T[]> {
		console.log(`API: getAll (${collectionName})`);

		loading.value = true;
		return new Promise((resolve, reject) => {
			const collectionRef = collection(db, collectionName).withConverter(getConverter<T>());
			getDocs(collectionRef)
				.then((snapshot) => {
					if (snapshot.empty) {
						resolve([] as T[]);
					} else {
						resolve(snapshot.docs.map((doc) => {
							return {
								...doc.data(),
								id: doc.id,
							};
						}) as T[]);
					}
				})
				.catch((error) => {
					reject(error);
				})
				.finally(() => loading.value = false);
		});
	}

	async function get<T>(uuid: string) {
		console.log(`API: get (${collectionName})`);

		const docRef = doc(db, collectionName, uuid).withConverter(getConverter<T>());
		const docSnap = await getDoc(docRef);
		return docSnap.exists()
			? {
					...docSnap.data(),
					id: docSnap.id,
				}
			: null;
	}

	async function getBy<T>(...searchQueries: QueryConstraint[]): Promise<T[]> {
		console.log(`API: getBy (${collectionName})`);

		const { user } = useAuth();
		if (!user.value?.uid) {
			return [];
		}

		loading.value = true;
		return new Promise((resolve, reject) => {
			const collectionRef = collection(db, collectionName).withConverter(getConverter<T>());
			const sameUserQuery = where('user_uuid', '==', user.value?.uid);
			const collectionQuery = query(collectionRef, sameUserQuery, ...searchQueries);
			getDocs(collectionQuery)
				.then((snapshot) => {
					if (snapshot.empty) {
						resolve([] as T[]);
					} else {
						resolve(snapshot.docs.map((doc) => {
							return {
								...doc.data(),
								id: doc.id,
							};
						}) as T[]);
					}
				})
				.catch((error) => {
					reject(error);
				})
				.finally(() => loading.value = false);
		});
	}

	async function create<T>(element: WithFieldValue<T>) {
		console.log(`API: create (${collectionName})`);
		const { user } = useAuth();

		const collectionRef = collection(db, collectionName).withConverter(getConverter<T>());
		if (typeof element === 'object') {
			const date: Timestamp = Timestamp.now();
			return addDoc(collectionRef, {
				...element,
				user_uuid: user.value?.uid,
				created_at: date,
				updated_at: date,
			});
		}
	}

	async function update<T>(element: WithFieldValue<T>, uuid: string) {
		console.log(`API: update (${collectionName})`);

		const elementRef = doc(db, collectionName, uuid).withConverter(getConverter<T>());
		const elementSnap = await getDoc(elementRef);
		if (elementSnap.exists() && typeof element === 'object') {
			const date: Timestamp = Timestamp.now();
			await updateDoc(elementRef, {
				...element,
				updated_at: date,
			});
			return elementRef;
		}
	}

	async function upsert<T>(element: WithFieldValue<T>, uuid?: string) {
		if (!uuid) {
			return create<T>(element);
		} else {
			return update(element, uuid);
		}
	}

	return {
		loading,
		error,
		getAll,
		get,
		getBy,
		upsert,
	};
}
