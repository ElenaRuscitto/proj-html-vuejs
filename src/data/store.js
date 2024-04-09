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

// footer
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
  },
  // /footer

  // Pioneers
  pioneers:
  {
    one: [
      {
        image: 'icona1.svg',
        title: 'One to One',
        description: 'Getting the necessary clarity about the current state to help you impove your game.'
      },
      {
        image: 'icona2.svg',
        title: 'Anywhere',
        description: 'Access to valuable and portable program which allow you to setup and live anywhere you want.'
      },
      {
        image: 'icona3.svg',
        title: 'On Time',
        description: "Punctuality is our top pryority because it's an essential criteria to assess a program quality."
      },
      {
        image: 'icona4.svg',
        title: 'Online Coures',
        description: 'Online business coaching now offers tou a very powerful way to empower your business into success.'
      },
      {
        image: 'icona5.svg',
        title: 'Consulting',
        description: 'You will get a clear sense of direction for your business, through assessment and faster results.'
      },
      {
        image: 'icona6.svg',
        title: 'Self Development',
        description: 'Business Coaching often keep your focus and develop you both in a professional and personal way.'
      },
    ],

    // /pioneers
  }
});