import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'aoi.canvas',
    logo: {
      src: "./public/icon.png"
    },
    favicon: './icon.png',
    social: {
      github: 'https://github.com/LordexDuck3990/aoi.canvas'
    },
    sidebar: [{
      label: 'Introduction',
      link: "/introduction"
    }, {
      label: 'Guides',
      items: [{
        label: 'Getting Started',
        link: '/guides/gettingstarted/'
      }, {
        label: 'Registering Fonts',
        link: '/guides/fontregistration/'
      }]
    }, {
      label: 'Functions',
      autogenerate: {
        directory: 'functions'
      }
    }]
  })],
  output: "server",
  adapter: vercel()
});