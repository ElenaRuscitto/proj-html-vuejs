import {reactive} from 'vue';

export const store = reactive ({
// HEADER

headerNavBar: [
  {
    title: 'Home',
    action: [
      {
        titleAction: 'HomeAction',
        link: '#',
      },
      {
        titleAction: 'HomeAction',
        link: '#',
      },
      {
        titleAction: 'HomeAction',
        link: '#',
      },
    ],
  },
  {
    title: 'Pages',
    action: [
      {
        titleAction: 'PagesAction',
        link: '#',
      },
      {
        titleAction: 'PagesAction',
        link: '#',
      },
      {
        titleAction: 'PagesAction',
        link: '#',
      },
    ],
  },
  {
    title: 'Courses',
    action: [
      {
        titleAction: 'CoursesAction',
        link: '#',
      },
      {
        titleAction: 'CoursesAction',
        link: '#',
      },
      {
        titleAction: 'CoursesAction',
        link: '#',
      },
    ],
  },
  { 
    title: 'Features',
    action: [
      {
        titleAction: 'FeaturesAction',
        link: '#',
      },
      {
        titleAction: 'FeaturesAction',
        link: '#',
      },
      {
        titleAction: 'FeaturesAction',
        link: '#',
      },
    ],
  },
  {
    title: 'Blog',
    action: [
      {
        titleAction: 'BlogAction',
        link: '#',
      },
      {
        titleAction: 'BlogAction',
        link: '#',
      },
      {
        titleAction: 'BlogAction',
        link: '#',
      },
    ],
  },
  {
    title: 'Shop',
    action: [
      {
        titleAction: 'ShopAction',
        link: '#',
      },
      {
        titleAction: 'ShopAction',
        link: '#',
      },
      {
        titleAction: 'ShopAction',
        link: '#',
      },
    ],
  }
],
// /navBar

footerNavBar:
  {
    address: 
    [
      '382 NE 191st St # 87394 Miami, FL 33179-3899',
      '+1 (305) 547-9909 (9pm EST, Monday - Friday)',
      'support@maxcoach.com'
    ],
    icons: [
      {
        socialName: 'Facebook',
        socialLink: '#',
        social: 'fa-brands fa-square-facebook',
      },
      {
        socialName: 'Twitter',
        socialLink: '#',
        social: 'fa-brands fa-twitter',
      },
      {
        socialName: 'Instagram',
        socialLink: '#',
        social: 'fa-brands fa-instagram',
      },
      {
        socialName: 'Linkedin',
        socialLink: '#',
        social: 'fa-brands fa-linkedin',
      },
    ],
    explore: [
      'Start here',
      'Blog',
      'About using',
     
    ],
    nullo: [
      'Success story',
      'Courses',
      'Contact us',
    ],
     information: [
    'Membership',
    'Purchase guide',
    'Privacy police',
    'Terms of services'
    ]
  }
});