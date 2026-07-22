export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Book Online', to: '/book-online' },
  { label: '94 Shuttle', to: '/94-shuttle' },
  { label: 'Handicap Services', to: '/handicap-services' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact-us' }
]

export const companyInfo = {
  name: '94 Cabs Red Deer',
  phoneDisplay: '+1 825-221-1717',
  phoneLink: 'tel:+18252211717',
  email: 'info@94cabsreddeer.com',
  mailingEmail: 'red_deer@94cabs.com',
  primaryAddress: '7460 49 Ave #8, Red Deer, AB T4P 1M2, Canada',
  appLink: 'https://94cabsreddeer.com/',
  parentBrandLink: 'https://94cabs.com/',
  mapsQuery: 'https://maps.google.com/?q=7460+49+Ave+%238,+Red+Deer,+AB+T4P+1M2,+Canada',
  /** Placeholder social — replace with live profiles when available */
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/', external: true },
    { label: 'Instagram', href: 'https://www.instagram.com/', external: true }
  ]
}

export const photoSet = {
  homeHero:
    '/Images/Home/hero.jpg',
  homeHeroAlt:
        '/Images/Home/hero.jpg',

  fleet:
    '/Images/Home/home_1.jpg',
  dispatch:
    '/Images/Home/home_2.jpg',
  appBooking:
    '/Images/Home/app.jpg',
  airport:
        '/Images/team.jpg',

  airportTerminal:
        '/Images/Home/fleet.jpg',

  wheelchair:
        '/Images/wheelchair.jpg',

  shuttle:
        '/Images/shuttle.jpg',

  downtown:
        '/Images/Home/fleet.jpg',

  contact:
        '/Images/about.jpg',

  business:
        '/Images/Home/fleet.jpg',

  medical:
        '/Images/medical.jpg',

  senior:
        '/Images/Home/fleet.jpg',

  nightCity:
    '/Images/Home/fleet.jpg',
  vanInterior:
        '/Images/Home/fleet.jpg',

  highway:
        '/Images/group_close.jpg',

  team:
        '/Images/group.jpg',

  mapAbstract:
        '/Images/Home/fleet.jpg',

}

export const serviceLinks = [
  { label: 'Daily taxi service', to: '/services' },
  { label: 'Airport trips', to: '/services' },
  { label: 'Business travel', to: '/services' },
  { label: 'Medical & senior rides', to: '/services' },
  { label: 'Accessible vehicles', to: '/handicap-services' },
  { label: '94 Shuttle and group travel', to: '/94-shuttle' },
  { label: 'Book online', to: '/book-online' }
]

/** Placeholder reviews — structured for easy replacement */
export const testimonials = {
  home: [
    {
      quote:
        'Cars are always spotless and drivers are incredibly professional. Finally a taxi service in Red Deer that cares about quality.',
      author: 'Sarah M.',
      context: 'Regular rider'
    },
    {
      quote:
        'Cab was right on time and the vehicle was neat and clean. The driver was courteous and I will recommend this service.',
      author: 'Manpreet Badwal',
      context: 'Airport pickup'
    },
    {
      quote:
        'They were at my door the moment I asked. Clean cab, no hassle — I will choose this service over others in Red Deer.',
      author: 'Audra Mitchelmore',
      context: 'Scheduled pickup'
    },
    {
      quote:
        'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.Hands down the best cab service in red deer! Polite, kind, courteous. One driver even opens the door for me!',
      author: 'TW',
      context: 'Scheduled pickup'
    }
  ],
  services: [
    {
      quote: 'Flat rate to the airport was exactly what was quoted. No surprises at drop-off.',
      author: 'Traveller to YYC',
      context: 'Airport transfer'
    },
    {
      quote: 'Professional on the phone and in the vehicle. Felt like a proper taxi company.',
      author: 'Hotel front desk',
      context: 'Guest transportation'
    }
  ],
  about: [
    {
      quote:
        'They are our go-to when family visits from out of town. English and dispatch both clear when coordinating pickups.',
      author: 'Jennifer L.',
      context: 'Family bookings'
    },
    {
      quote: 'Driver helped with bags and waited while I grabbed prescriptions. Small things matter.',
      author: 'Senior rider',
      context: 'Errands & appointments'
    }
  ],
  contact: [
    {
      quote: 'I emailed about a corporate account and had a reply the next business day with a straightforward process.',
      author: 'Office manager',
      context: 'Account inquiry'
    },
    {
      quote: 'Called at 5 a.m. for an airport run — dispatch was clear, driver was early, and the fare matched what they quoted.',
      author: 'Business traveller',
      context: 'Early airport transfer'
    },
    {
      quote: 'Lost a phone in the cab. Dispatch had the trip ID and called back within the hour with next steps.',
      author: 'Local rider',
      context: 'Lost & found'
    }
  ],
  handicap: [
    {
      quote: 'We did not have to repeat important details again and again. The team understood what we needed from the start.',
      author: 'Family caregiver',
      context: 'Wheelchair accessible trip'
    }
  ]
}

export const serviceCategories = [
  {
    id: 'core',
  title: 'Daily taxi service',
  lede: 'Local rides with fast dispatch support for ASAP pickups and pre-booked trips.',
  image: photoSet.team,
  points: [
    '24/7 phone dispatch',
    'Immediate pickups and advance bookings',
    'Sedans, SUVs, and larger vans for groups',
    'City-wide coverage across Red Deer'
    ]
  },
  {
  id: 'daily-2',
  title: 'Lady Pink Cab service',
  lede: 'A womenfirst ride service across Red Deer, driven by ladies and built around safety, comfort and trustworthy dispatch.',
  image: photoSet.fleet,
  points: [
    'Female drivers dedicated to women’s safety and peace of mind',
    'Discreet, respectful service for everyday trips and special needs',
    'Clean, well maintained vehicles with a focus on comfort',
    'Easy booking by phone, app or online with fast & reliable dispatch'
  ]
  },
  {
    id: 'airport',
  title: 'Airport & long distance trips',
  lede: 'Pre-booked airport runs and longer trips with clear pickup timing and room for luggage.',
  image: photoSet.airport,
  points: [
    'Airport pickups and drop-offs',
    'Local and out-of-town trip booking',
    'Pickup timing based on your travel details',
    'Receipts available for business travel'
    ]
  },
  {
    id: 'business',
  title: 'Business & workplace travel',
  lede: 'Reliable transport for offices, clinics, hotels, and job sites that need regular bookings.',
  image: photoSet.business,
  points: [
    'Regular bookings for staff and site travel',
    'Guest and client pickups from hotels and venues',
    'After-hours and end of shift transport when needed',
    'Fast dispatch updates when schedules change'
    ]
  },
  {
    id: 'care',
  title: 'Medical & senior rides',
  lede: 'Rides for non-emergency medical appointments, errands, and everyday travel when extra time and a calmer pace matter.',
  image: photoSet.medical,
  points: [
    'Rides for non-emergency medical appointments',
    'Senior offers may be available — ask dispatch',
    'Drivers allow extra time for getting in and out',
    'Pre-booking is best for appointment-based trips'
    ]
  },
  {
  id: 'accessible',
  title: 'Accessible vehicles',
  lede: 'Wheelchair-accessible vehicle options for riders who need extra space, mobility support, and clear booking details.',
  image: photoSet.wheelchair,
  points: [
    'See our accessibility page for full booking details',
    'Advance notice helps us send the right vehicle',
    'Space for a companion may be available, depending on the vehicle',
    'Accessible trips can be booked by phone'
    ],
    link: { label: 'Handicap services', to: '/handicap-services' }
  },
  {
   id: 'shuttle',
  title: '94 Shuttle and group travel',
  lede: 'Shared and group transport for workplaces, events and planned trips with multiple riders.',
  image: photoSet.shuttle,
  points: [
    'Workplace and event transport',
    'Group airport pickups when schedules line up',
    'Ask dispatch about vehicle size and pickup planning'
    ],
    link: { label: '94 Shuttle', to: '/94-shuttle' }
  }
]

export const additionalServiceOfferings = [
  {
    title: 'Extra services',
    items: [
      'Hot shot deliveries where available',
      'Flat rate options for select trips',
      'Jump starts when conditions and availability allow',
      'Lost and found help through dispatch'
    ]
  },
  {
    title: 'How to book',
    items: [
      'Book online through our website',
      'Use the passenger app for ride tracking',
      'Call dispatch 24/7',
      'Pre-book early morning and appointment trips'
        ]
  },
  {
    title: 'Payment options',
    items: [
      'Cash, debit, and credit cards accepted',
      'E-transfer available',
      'Receipts available on request'
    ]
  }
]