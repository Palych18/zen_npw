export const data = {
  en: {
    header: {
      languages: [
        {
          name: 'RU',
          key: 'ru',
        },
        {
          name: 'EN',
          key: 'en',
        },
      ],
      nav: [
        {
          target: 'download',
          content: 'Download',
          type: 'anchor',
        },
        {
          target: 'warranty',
          content: 'Warranty',
          type: 'anchor',
        },
        {
          target: 'care',
          content: 'Care',
          type: 'anchor',
        },
        {
          target: 'cashback',
          content: 'Cashback',
          type: 'anchor',
        },
        {
          target: 'clients',
          content: 'Clients',
          type: 'anchor',
        },
      ],
    },
    download: {
      name: 'download',
      title: {
        priority: 1,
        content: 'Peaceful shopping mindful money',
      },
      texts: [
        'See how we can help with making your shopping experience and money management more ZEN.',
      ],
      image: {
        source: '/assets/images/1.jpg',
        description: 'Some description for image 1',
      },
      links: {
        apple: {
          type: 'apple',
          url: 'https://apple.com',
        },
        google: {
          type: 'google',
          url: 'https://google.com',
        },
      },
    },
    warranty: {
      name: 'warranty',
      title: {
        priority: 2,
        content: '1-year warranty boost',
      },
      texts: [
        'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.',
        'When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.',
      ],
      image: {
        source: 'assets/images/2.jpg',
        description: 'Some description for image 2',
      },      
    },
    care: {
      name: 'care',
      title: {
        priority: 2,
        content: 'ZEN Care',
      },
      texts: [
        //prettier-ignore
        'Shopping online is usually a delightful experience. Until it\'s not.',
        'Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.',
        'But, here comes ZEN Care: a free, built-in shopping protection.',
      ],
      image: {
        source: 'assets/images/3.jpg',
        description: 'Some description for image 3',
      },
    },
    cashback: {
      name: 'cashback',
      title: {
        priority: 2,
        content: 'and cashback!',
      },
      texts: [
        'It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it.',
        'We gave it a thought and made cashback way more friendly.',
        'Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase.',
      ],
      buttonText: 'Order a consultation',
    },    
    clients: {
      name: 'clients',
      title: {
        priority: 2,
        content: 'Clients',
      },
      brands: [
        {
          source: 'assets/clients/1.svg',
          description: 'Some description for client 1',
        },
        {
          source: 'assets/clients/2.svg',
          description: 'Some description for client 2',
        },
        {
          source: 'assets/clients/3.svg',
          description: 'Some description for client 3',
        },
        {
          source: 'assets/clients/4.svg',
          description: 'Some description for client 4',
        },
        {
          source: 'assets/clients/5.svg',
          description: 'Some description for client 5',
        },
        {
          source: 'assets/clients/6.svg',
          description: 'Some description for client 6',
        },
        {
          source: 'assets/clients/7.svg',
          description: 'Some description for client 7',
        },
        {
          source: 'assets/clients/8.svg',
          description: 'Some description for client 8',
        },
      ],
    },
    footer: {
      columns: [
        {
          title: {
            priority: 3,
            content: 'Learn',
          },
          links: [
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'Help center',
            },
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'Join ZEN team',
            },
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'Privacy Policy',
            },
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'Cookies',
            },
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'Terms of use',
            },
          ],
        },
        {
          title: {
            priority: 3,
            content: 'Discover',
          },
          links: [
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'For developers',
            },
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'Apple Pay',
            },
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'Google Pay',
            },
          ],
        },
        {
          title: {
            priority: 3,
            content: 'Offer',
          },
          links: [
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'Business',
            },
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'Personal',
            },
          ],
        },
        {
          title: {
            priority: 3,
            content: 'Language',
          },
          links: [
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'English',
            },
            {
              type: 'text',
              url: 'https://exemple.com',
              content: 'Russian',
            },
          ],
        },
        {
          title: {
            priority: 3,
            content: 'Follow us',
          },
          links: [
            {
              type: 'icon',
              url: 'https://in.com',
              name: 'in'
            },
          ],
        },
        {
          title: {
            priority: 3,
            content: 'Contact',
          },
          links: [
            {
              type: 'email',
              url: 'goto@mail.com',
              content: 'hello@zen.com',
            },
          ],
        },
      ],
      texts: [
        'ZEN is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.',
        'Registration number of the company 304749651, VAT ID LT100011714916.',
        'License of electronic money institutions number LB000457.',
        'Share capital 2.185.000,00 EUR.',
        'Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.',
        'Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.',
      ],
      developer: {
        type: 'icon',
        url: 'https://some-dev.com/',
        name: 'dev',
      },
    },
  },
  ru: {},
}
