import { pxToRem } from './helpers';

export const base_fontSize = 16;

export const colors = {
	dark: '#121a3e',
	emblem: '#fc0',
	active: '#ff0',
	text: '#2c3e50',
};

export const gap = {
	original: '8px',
	general: '16px',
	section: '24px',
};

export const radius = {
	project: '5px',
};

export const fontSize = {
	original: pxToRem(16),
	regular: pxToRem(18),
	medium: pxToRem(20),
	large: pxToRem(21),
	logo: pxToRem(26),
	menuLarge: pxToRem(44),
};

export const width = {
	mobile: '320px',
	tablet: '600px',
	desktop: '768px',
	reachable: '1090px',
	max_width: '1470px',
};

export const media = {
	Tablet: `@media (min-width: ${width.tablet})`,
	Desktop: `@media (min-width: ${width.desktop})`,
	Max_Width: `@media (min-width: ${width.max_width})`,
};
