// Savoria Bistro & Lounge - Information & Team Data

export const RESTAURANT_INFO = {
  name: 'Savoria Bistro & Lounge',
  tagline: 'Artisanal Dining & Contemporary Culinary Elegance',
  phone: '+1 (555) 382-9014',
  email: 'hello@savoriabistro.com',
  reservationEmail: 'reservations@savoriabistro.com',
  address: {
    street: '142 Artisan Boulevard, Suite 100',
    district: 'Culinary Heritage Quarter',
    city: 'New York, NY 10012'
  },
  hours: [
    { days: 'Monday – Thursday', time: '12:00 PM – 10:30 PM' },
    { days: 'Friday – Saturday', time: '11:30 AM – 11:30 PM' },
    { days: 'Sunday Brunch & Dinner', time: '10:30 AM – 09:30 PM' }
  ],
  stats: [
    { value: '12+', label: 'Years of Culinary Passion' },
    { value: '3 Michelin', label: 'Guide Recognitions' },
    { value: '45k+', label: 'Delighted Diners' },
    { value: '100%', label: 'Farm-to-Table Freshness' }
  ]
};

export const CORE_VALUES = [
  {
    id: 1,
    title: 'Farm-to-Table Purity',
    description: 'We partner directly with sustainable local farmers and certified organic producers to ensure every ingredient reaches your plate at peak flavor and vitality.',
    icon: 'Leaf'
  },
  {
    id: 2,
    title: 'Culinary Craftsmanship',
    description: 'Every plate is an orchestrated harmony of centuries-old techniques, artisanal precision, and modern culinary inventiveness guided by seasoned chefs.',
    icon: 'UtensilsCrossed'
  },
  {
    id: 3,
    title: 'Heartfelt Hospitality',
    description: 'True dining is an emotion. Our attentive front-of-house staff treats every guest like an honored family member in an intimate, sophisticated ambiance.',
    icon: 'HeartHandshake'
  },
  {
    id: 4,
    title: 'Eco-Conscious Ethics',
    description: 'Zero food waste initiatives, biodegradable take-out packaging, and 100% renewable energy run our kitchen with deep respect for our planet.',
    icon: 'Sparkles'
  }
];

export const CHEFS = [
  {
    id: 1,
    name: 'Chef Marco Rossi',
    role: 'Executive Chef & Founder',
    experience: '22 Years of Experience',
    bio: 'Trained in Florence and Lyon, Chef Marco brings over two decades of Michelin-starred culinary wisdom to Savoria, reimagining Mediterranean gastronomy.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
    specialty: 'Wood-Fired Seafood & Handcrafted Pasta'
  },
  {
    id: 2,
    name: 'Chef Sophie Laurent',
    role: 'Head Pastry Chef',
    experience: '14 Years of Experience',
    bio: 'A graduate of Le Cordon Bleu Paris, Chef Sophie crafts sculptural confectionery and artisanal desserts that balance delicate sweetness with rich textures.',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80',
    specialty: 'French Viennoiserie & Modernist Chocolate'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Master Sommelier & Beverage Director',
    experience: '16 Years of Experience',
    bio: 'Certified by the Court of Master Sommeliers, David curates an exceptional 350-label cellar alongside our bespoke botanical cocktail program.',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80',
    specialty: 'Old World Wine Pairings & Barrel-Aged Cocktails'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Elena Rostova',
    title: 'Food Critic, Gourmet Traveler',
    rating: 5,
    comment: 'The Chilean Sea Bass was transcendent. The delicate balance of smoke, citrus, and saffron placed Savoria among the finest dining rooms on the East Coast.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Marcus Sterling',
    title: 'Verified Gourmet Diner',
    rating: 5,
    comment: 'From the warm welcome to the last spoonful of Valrhona lava cake, the service was impeccable. We celebrated our 10th anniversary here, unforgettable!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Clara & Julian Vance',
    title: 'Private Event Hosts',
    rating: 5,
    comment: 'We booked the private wine cellar for an executive dinner of 18 people. Every course was delivered seamlessly, paired with extraordinary vintages.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQS = [
  {
    question: 'Do I need a reservation to dine at Savoria Bistro?',
    answer: 'While we warmly welcome walk-in guests at our cocktail lounge and patio bar, reservations are highly recommended for the main dining room, particularly for Friday and Saturday evenings.'
  },
  {
    question: 'Can you accommodate dietary allergies or vegan requirements?',
    answer: 'Absolutely. Over 60% of our menu can be customized to vegan, dairy-free, or celiac-safe gluten-free preparations. Please inform your server or note your preferences during booking.'
  },
  {
    question: 'Is there a dress code?',
    answer: 'We encourage smart casual to formal attire. We kindly request guests refrain from athletic wear and beach flip-flops in the main dining salon.'
  },
  {
    question: 'Do you offer private dining and bespoke catering?',
    answer: 'Yes! Our private wine mezzanine accommodates up to 32 guests for seated banquets or 50 guests for cocktail receptions. Contact our event coordinator via our contact form.'
  }
];
