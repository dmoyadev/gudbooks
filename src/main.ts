import type { Component } from 'vue';
import { createApp } from 'vue';
import App from './App.vue';

/* Icons */
import 'iconify-icon';

/* Theme variables */
import './theme/reset.css';
import './theme/colors.scss';
import './theme/typography.scss';
import './theme/skeleton.scss';

/* App core dependencies */
import router from './router';

/* View page transitions */
import { ViewTransitionsPlugin } from 'vue-view-transitions';

const app = createApp(App as Component);
app.use(router);
app.use(ViewTransitionsPlugin());

/* Create the router and mount the app */
router.isReady()
	.then(async () => {
		app.mount('#app');
	})
	.catch((error) => {
		// eslint-disable-next-line no-console
		console.error(error);
	});
