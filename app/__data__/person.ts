export const person = {
  personal: {
    firstName: 'Lina',
    lastName: 'Rydholm',
    jobTitle: 'Frontend Developer',
    aboutMe:
      "I'm Lina - a creative girl with excellent decision making and broad knowledge in my backpack. As a frontend developer I find motivation in my personal development as I love to learn and gain new experiences.",
    aboutThisPage:
      'This page is built with Next.js (app router), Tailwind CSS and Typescript with accessibility features in mind.',
    hello: 'Hey!',
    contact: {
      email: 'lina.rydholm@gmail.com',
      phone: '070-955 80 00',
    },
    address: {
      street: 'Oxelgatan 9',
      postcode: '18648',
      city: 'Vallentuna',
      state: 'Stockholm',
      country: 'Sweden',
    },
  },
  experience: [
    {
      jobTitle: 'Skiftledare',
      period: '2014-2019',
      jobDescription: 'Skiftledare på Max burgers med dagsansvar.',
    },
    {
      jobTitle: 'Banksäljare',
      period: '2019',
      jobDescription: 'Bankman och säljare av valuta samt banktjänster på Forex Bank.',
    },
    {
      jobTitle: 'Ekonomiassistent',
      period: '2019-2020',
      jobDescription:
        'Ekonomiassistent på Perido. Bokföring och administration inom leverantörsreskontra för konsulter, underkonsulter samt egenanställda.',
    },
    {
      jobTitle: 'Ekonomiassistent',
      period: '2020-2022',
      jobDescription:
        'Ekonomiassistent på Spares Nordic med ett övergripande ansvar för kundreskontran samt delaktighet i månadsbokslut.',
    },
    {
      jobTitle: 'Logistik',
      period: '2022-2023',
      jobDescription: 'Orderplock och pack på Skincitys huvudlager.',
    },
  ],
  education: [
    { school: 'Jensen Gymnasium', period: '2013-2016', education: 'Diplomerad gymnasieekonom' },
    {
      school: 'Stockholms Universitet',
      period: '2020',
      education: 'Redovisning 1 | Finansiering 1',
    },
    { school: 'Nackademin', period: '2022-2024', education: 'Frontendutveckling' },
  ],
  skills: {
    'Personal Qualities': ['Diversified', 'Great with numbers', 'Team player'],
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    Frameworks: ['React', 'Next.js', 'Tailwind CSS'],
    CMS: ['Strapi', 'Shopify', 'Sanity'],
    'Design Tools': ['Figma', 'Canva'],
    'other technologies': [
      'Sass',
      'Node',
      'MongoDB',
      'Express.js',
      'Turborepo',
      'Redux',
      'Git',
      'Github',
      'A11y',
    ],
    languages: ['Swedish', 'English'],
  },
};
