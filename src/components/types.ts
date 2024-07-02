type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HexColor = `#${string}`;
type CSSVar = `var(${string})`;

export type Color = RGB | RGBA | HexColor | CSSVar;
