import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'aoi.canvas',
			logo: {
				src: "./public/icon.png"
			},
			favicon: './public/icon.png',
			social: {
				github: 'https://github.com/LordexDuck3990/aoi.canvas',
			},
			sidebar: [
				{
					label: 'Introduction',
					link: "/introduction"
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Functions',
					autogenerate: { directory: 'functions' },
				},
			],
		}),
	],
});