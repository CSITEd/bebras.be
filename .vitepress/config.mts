import { defineConfig } from 'vitepress'

import small from 'markdown-it-small'

export default defineConfig({
  title: 'Bebras Belgium',
  description: 'Bebras Belgium',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'FAQ', link: '/faq/' },
          { text: 'About us', link: '/about/' },
        ],
        sidebar: {
          '/about/': [
            {
              text: 'About us',
              link: '/about/',
              items: [
                {
                  text: 'Contact us',
                  link: '/about/contact/',
                },
              ],
            },
          ],
        },
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'FAQ', link: '/fr/faq/' },
          { text: 'À propos', link: '/fr/about/' },
        ],
        outlineTitle: 'Sur cette page',
        sidebar: {
          '/fr/about/': [
            {
              text: 'À propos de nous',
              link: '/fr/about/',
              items: [
                {
                  text: 'Nous contacter',
                  link: '/fr/about/contact/',
                },
              ],
            },
          ],
        },
      },
    },
    nl: {
      label: 'Nederlands',
      lang: 'nl',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/nl/' },
          { text: 'FAQ', link: '/nl/faq/' },
          { text: 'Over ons', link: '/nl/about/' },
        ],
        outlineTitle: 'Op deze pagina',
        sidebar: {
          '/nl/about/': [
            {
              text: 'Over ons',
              link: '/nl/about/',
              items: [
                {
                  text: 'Contacteer ons',
                  link: '/nl/about/contact/',
                },
              ],
            },
          ],
        },
      },
    },
  },
  themeConfig: {
    logo: '/images/bebras-international-logo.png',
    siteTitle: 'Belgium',
    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/BebrasBelgium/' },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(small)
    }
  },
})
