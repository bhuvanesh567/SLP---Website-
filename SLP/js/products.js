/**
 * SRI LAKSHMI PLAZA — PRODUCT DATA
 * All product information, pricing, and specs
 */

'use strict';

const PRODUCTS = {
  featured: [
    {
      id: 'iphone-16-pro-max',
      brand: 'Apple',
      name: 'iPhone 16 Pro Max',
      image: '../assets/images/iphone16pm.png',
      artifactImage: 'product_iphone',
      price: 134900,
      originalPrice: 149900,
      discount: 10,
      rating: 4.9,
      reviewCount: 248,
      specs: ['A18 Pro', '256GB', '5G', '4K 120fps'],
      emi: '₹11,242/mo',
      badge: 'Best Seller',
      badgeType: 'gold',
      inStock: true,
      warranty: '1 Year Apple Warranty',
      category: 'flagship',
      colors: ['Natural Titanium', 'Black Titanium', 'White Titanium', 'Desert Titanium']
    },
    {
      id: 'samsung-s25-ultra',
      brand: 'Samsung',
      name: 'Galaxy S25 Ultra',
      image: '../assets/images/samsungs25u.png',
      artifactImage: 'product_samsung',
      price: 129999,
      originalPrice: 149999,
      discount: 13,
      rating: 4.8,
      reviewCount: 195,
      specs: ['Snapdragon 8 Elite', '256GB', 'S-Pen', '200MP'],
      emi: '₹10,834/mo',
      badge: 'New Launch',
      badgeType: 'primary',
      inStock: true,
      warranty: '1 Year Samsung Warranty',
      category: 'flagship',
      colors: ['Titanium Silverblue', 'Titanium Black', 'Titanium Whitesilver']
    },
    {
      id: 'oneplus-13',
      brand: 'OnePlus',
      name: 'OnePlus 13',
      image: '../assets/images/oneplus13.png',
      artifactImage: 'product_oneplus',
      price: 69999,
      originalPrice: 79999,
      discount: 12,
      rating: 4.7,
      reviewCount: 156,
      specs: ['Snapdragon 8 Gen 3', '256GB', '100W Charge', '6000mAh'],
      emi: '₹5,834/mo',
      badge: 'Fast Charging',
      badgeType: 'green',
      inStock: true,
      warranty: '1 Year OnePlus Warranty',
      category: 'flagship',
      colors: ['Midnight Ocean', 'Arctic Dawn', 'Black Eclipse']
    },
    {
      id: 'nothing-phone-3',
      brand: 'Nothing',
      name: 'Nothing Phone (3)',
      image: '../assets/images/nothingphone3.png',
      artifactImage: 'product_nothing',
      price: 59999,
      originalPrice: 64999,
      discount: 8,
      rating: 4.6,
      reviewCount: 87,
      specs: ['Snapdragon 8s Gen 3', '256GB', 'Glyph Interface', '5000mAh'],
      emi: '₹4,999/mo',
      badge: 'Unique Design',
      badgeType: 'primary',
      inStock: true,
      warranty: '1 Year Nothing Warranty',
      category: 'midrange',
      colors: ['Dark', 'White']
    },
    {
      id: 'pixel-9-pro',
      brand: 'Google',
      name: 'Pixel 9 Pro',
      image: '../assets/images/pixel9pro.png',
      artifactImage: 'product_pixel',
      price: 109999,
      originalPrice: 124999,
      discount: 12,
      rating: 4.8,
      reviewCount: 112,
      specs: ['Google Tensor G4', '256GB', 'Gemini AI', '50MP'],
      emi: '₹9,167/mo',
      badge: 'AI Powered',
      badgeType: 'gold',
      inStock: true,
      warranty: '1 Year Google Warranty',
      category: 'flagship',
      colors: ['Porcelain', 'Obsidian', 'Wintergreen', 'Rose Quartz']
    }
  ],

  accessories: [
    { id: 'earbuds', emoji: '🎧', name: 'Earbuds & TWS', count: '50+ Products', href: 'accessories.html#earbuds' },
    { id: 'smartwatch', emoji: '⌚', name: 'Smart Watches', count: '30+ Products', href: 'accessories.html#watches' },
    { id: 'charger', emoji: '⚡', name: 'Chargers & Cables', count: '80+ Products', href: 'accessories.html#chargers' },
    { id: 'powerbank', emoji: '🔋', name: 'Power Banks', count: '25+ Products', href: 'accessories.html#powerbanks' },
    { id: 'case', emoji: '📱', name: 'Phone Cases', count: '200+ Products', href: 'accessories.html#cases' },
    { id: 'glass', emoji: '🛡️', name: 'Tempered Glass', count: '150+ Products', href: 'accessories.html#glass' },
    { id: 'speaker', emoji: '🔊', name: 'Bluetooth Speakers', count: '40+ Products', href: 'accessories.html#speakers' },
    { id: 'gaming', emoji: '🎮', name: 'Gaming Accessories', count: '20+ Products', href: 'accessories.html#gaming' }
  ],

  brands: [
    { name: 'Apple', emoji: '🍎', color: '#1d1d1f' },
    { name: 'Samsung', emoji: '🌀', color: '#1428A0' },
    { name: 'OnePlus', emoji: '⊕', color: '#F5010C' },
    { name: 'Vivo', emoji: '◉', color: '#5159B8' },
    { name: 'OPPO', emoji: '●', color: '#1F8E2C' },
    { name: 'Realme', emoji: '◈', color: '#FEC401' },
    { name: 'Xiaomi', emoji: 'Mi', color: '#FF6900' },
    { name: 'Pixel', emoji: 'G', color: '#4285F4' },
    { name: 'Nothing', emoji: '∅', color: '#FFFFFF' },
    { name: 'Motorola', emoji: 'M', color: '#5A0096' }
  ]
};

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ravi Kumar',
    role: 'Software Engineer, Vijayawada',
    initials: 'RK',
    stars: 5,
    text: 'Sri Lakshmi Plaza is simply the best phone store in Vijayawada. Got my iPhone 16 Pro Max at a great price with genuine warranty. The staff was incredibly knowledgeable and helped me choose the perfect phone. Highly recommended!',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 2,
    name: 'Priya Lakshmi',
    role: 'Teacher, Labbipet',
    initials: 'PL',
    stars: 5,
    text: 'Amazing experience! I was confused between Samsung and OnePlus, but the expert team here helped me compare both phones and choose the best one for my needs. The store is beautifully organized and the prices are unbeatable.',
    date: '1 month ago',
    verified: true
  },
  {
    id: 3,
    name: 'Suresh Reddy',
    role: 'Business Owner, Vijayawada',
    initials: 'SR',
    stars: 5,
    text: 'Bought 5 phones for my team from Sri Lakshmi Plaza. Got excellent bulk pricing and every phone came with official warranty. The EMI options are very convenient. Will definitely come back for all future purchases!',
    date: '3 weeks ago',
    verified: true
  },
  {
    id: 4,
    name: 'Meena Devi',
    role: 'College Student, Krishna District',
    initials: 'MD',
    stars: 5,
    text: 'Got student discount on my Nothing Phone 3! The glyph interface is so cool and unique. The staff even helped me set it up perfectly. Best shopping experience I have had at any electronics store.',
    date: '1 week ago',
    verified: true
  },
  {
    id: 5,
    name: 'Anil Babu',
    role: 'Doctor, Vijayawada',
    initials: 'AB',
    stars: 5,
    text: 'Excellent service and genuine products. The Google Pixel 9 Pro I purchased has been fantastic. Great camera quality for my medical photography needs. Store ambiance is premium — feels like an Apple Store!',
    date: '2 months ago',
    verified: true
  },
  {
    id: 6,
    name: 'Lakshmi Prasad',
    role: 'IT Professional, Andhra Pradesh',
    initials: 'LP',
    stars: 5,
    text: 'Had a broken screen replaced here — incredibly fast service, just 2 hours! The technicians are skilled and used original parts. Price was fair and work quality is exceptional. Definitely my go-to repair center.',
    date: '3 weeks ago',
    verified: true
  }
];

const FAQ_DATA = [
  {
    q: 'Are all products at Sri Lakshmi Plaza genuine and original?',
    a: 'Yes, absolutely! We are an authorized retailer for all major brands including Apple, Samsung, OnePlus, Google, and more. Every product comes with the manufacturer\'s official warranty and all required documentation.'
  },
  {
    q: 'Do you offer EMI options for phone purchases?',
    a: 'Yes! We offer No Cost EMI options on all major credit cards from HDFC, SBI, ICICI, Axis, and more. We also have partnerships with Bajaj Finance and other NBFCs for flexible financing options starting from 3 to 24 months.'
  },
  {
    q: 'What is your exchange/trade-in policy?',
    a: 'We offer a transparent trade-in program for your old phone. Bring your old device to our store and our experts will evaluate it and give you the best market value. The trade-in amount is deducted directly from your new phone purchase.'
  },
  {
    q: 'Do you offer phone repair services?',
    a: 'Yes! We have a dedicated repair center with certified technicians. We handle screen replacements, battery replacements, water damage repair, software issues, and more. Most repairs are completed within 2-4 hours.'
  },
  {
    q: 'What are your store hours?',
    a: 'We are open Monday to Saturday from 10:00 AM to 8:00 PM, and Sunday from 11:00 AM to 7:00 PM. We are closed on major public holidays. You can also reach us on WhatsApp for quick inquiries.'
  },
  {
    q: 'Do you have festival offers and special discounts?',
    a: 'Yes! We regularly run festival offers during Dussehra, Diwali, Christmas, and New Year. We also offer special student discounts, cashback offers on select bank cards, and exclusive exchange bonus deals throughout the year.'
  },
  {
    q: 'Can I test phones before buying?',
    a: 'Absolutely! Our showroom has fully operational demo units of all featured phones. Our knowledgeable staff will help you experience the phones hands-on and answer all your questions before you make a purchase decision.'
  },
  {
    q: 'Do you provide home delivery?',
    a: 'Yes, we offer same-day delivery within Vijayawada city limits and next-day delivery across Krishna and Guntur districts. Free delivery is available on orders above ₹15,000. Please WhatsApp us or call to arrange delivery.'
  }
];

// Expose globally
window.SLP = { PRODUCTS, TESTIMONIALS, FAQ_DATA };
