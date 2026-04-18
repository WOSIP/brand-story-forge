import { Wallet, Smartphone, Store, Users, TrendingUp, ShieldCheck, Zap, Star } from 'lucide-react';

export const SERVICES = [
  {
    id: 'wallet',
    title: 'Digital Wallet',
    description: 'A powerful, secure wallet that works on any phone. Top up, pay merchants, and transfer points instantly within your community.',
    icon: Wallet,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/service-digital-wallet-80820fc7-1776543060496.webp',
  },
  {
    id: 'payments',
    title: 'Multiple Ways to Pay',
    description: 'Scan QR codes, tap NFC cards, or use Virtual and Physical POS. Flexible options for every member and merchant.',
    icon: Smartphone,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/service-qr-payment-def986c4-1776543060672.webp',
  },
  {
    id: 'lending',
    title: 'Peer-to-Peer Lending',
    description: 'Members can lend to each other. AI credit scoring reduces risk, and loan points stay within the community to fuel local growth.',
    icon: TrendingUp,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/service-p2p-lending-fb9b7148-1776543061022.webp',
  },
  {
    id: 'merchants',
    title: 'Earning Accounts',
    description: 'Merchants accept digital payments and can cash out earnings to bank or mobile money anytime. Grow your business with Helloopass.',
    icon: Store,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/service-merchant-earnings-87199bd0-1776543060992.webp',
  },
];

export const SERVICE_COMPARISON = {
  tiers: ['Member', 'Small Merchant', 'Enterprise'],
  features: [
    { name: 'QR Code Payments', values: [true, true, true] },
    { name: 'NFC Card Access', values: [true, true, true] },
    { name: 'Virtual POS', values: [false, true, true] },
    { name: 'Physical POS', values: [false, false, true] },
    { name: 'P2P Lending Access', values: [true, true, true] },
    { name: 'Cash-Out Capability', values: [false, true, true] },
  ],
};

export const PRICING_PACKAGES = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Perfect for small communities just getting started.',
    details: [
      { label: 'Maximum Members', value: '500' },
      { label: 'Setup Fee', value: '$0' },
      { label: 'Annual Fee', value: '$0' },
      { label: 'Transaction Fee', value: '0%' },
      { label: 'Payment Methods', value: 'QR code, NFC cards, virtual POS, physical POS' },
      { label: 'Support', value: 'Basic support via email' },
    ],
    features: [
      'Digital wallets for all members',
      'Merchant earning accounts',
      'Peer-to-peer lending with platform de-risking',
      'Community-only spending rule',
      'Points backed by real cash',
      'Works on any phone',
    ],
    bestFor: 'Small cooperatives, local associations, or pilot communities testing the platform.',
    action: 'Sign Up Now',
    actionDetail: 'Start immediately with up to 500 members'
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'For growing communities with unlimited members.',
    details: [
      { label: 'Maximum Members', value: 'Unlimited' },
      { label: 'Monthly Transactions', value: 'Up to 100,000' },
      { label: 'Setup Fee', value: '$5,000 USD (one-time)' },
      { label: 'Annual Fee', value: '$5,000 USD per year' },
      { label: 'Transaction Fee', value: '1% per transaction' },
      { label: 'Payment Methods', value: 'QR code, NFC cards, virtual POS, physical POS' },
      { label: 'Support', value: 'Priority support via email and phone' },
    ],
    features: [
      'Everything in Free package',
      'Unlimited member onboarding',
      'Priority customer support',
      'Dedicated community success manager',
      'Monthly transaction reports',
      'Access to inter-community trading (when available)',
    ],
    bestFor: 'Established cooperatives and Unions with growing member bases and active trading volumes.',
    action: 'Contact Sales',
    actionDetail: 'Get started with unlimited members'
  },
  {
    id: 'platinum',
    name: 'Platinum',
    tagline: 'For large communities with unlimited everything.',
    details: [
      { label: 'Maximum Members', value: 'Unlimited' },
      { label: 'Monthly Transactions', value: 'Unlimited' },
      { label: 'Setup Fee', value: 'Contact us' },
      { label: 'Annual Fee', value: 'Contact us' },
      { label: 'Transaction Fee', value: 'Contact us' },
      { label: 'Payment Methods', value: 'QR code, NFC cards, virtual POS, physical POS' },
      { label: 'Support', value: '24/7 premium support' },
    ],
    features: [
      'Everything in Standard package',
      'Unlimited transactions',
      '24/7 premium support',
      'Custom feature development',
      'Dedicated technical account manager',
      'Custom reporting and analytics',
      'Early access to new features',
      'White-label options available',
      'Custom integration support',
    ],
    bestFor: 'Large Unions, federations of cooperatives, or national-level associations with high transaction volumes.',
    action: 'Request Quotation',
    actionDetail: 'Custom solution for your community'
  }
];

export const PRICING_COMPARISON = {
  tiers: ['Free', 'Standard', 'Platinum'],
  features: [
    { name: 'Maximum Members', values: ['Up to 500', 'Unlimited', 'Unlimited'] },
    { name: 'Monthly Transactions', values: ['Not specified', 'Up to 100,000', 'Unlimited'] },
    { name: 'Setup Fee', values: ['$0', '$5,000 USD', 'Contact us'] },
    { name: 'Annual Fee', values: ['$0', '$5,000 USD per year', 'Contact us'] },
    { name: 'Transaction Fee', values: ['0%', '1% per transaction', 'Contact us'] },
    { name: 'QR Code Payments', values: [true, true, true] },
    { name: 'NFC Cards', values: [true, true, true] },
    { name: 'Virtual POS', values: [true, true, true] },
    { name: 'Physical POS', values: [true, true, true] },
    { name: 'Works on Any Phone', values: [true, true, true] },
    { name: 'P2P Lending', values: [true, true, true] },
    { name: 'Platform De-Risking', values: [true, true, true] },
    { name: 'Merchant Earning Accounts', values: [true, true, true] },
    { name: 'Community-Only Spending Rule', values: [true, true, true] },
    { name: 'Dedicated Support', values: ['Basic', 'Priority', '24/7 Premium'] },
    { name: 'Custom Features', values: [false, false, true] },
  ]
};

export const HOW_TO_CHOOSE = [
  { group: 'Testing the platform with a small group', package: 'Free' },
  { group: 'A growing cooperative with active members', package: 'Standard' },
  { group: 'A large Union or national association', package: 'Platinum' },
];

export const FAQS = [
  {
    question: "What counts as a transaction?",
    answer: "Any payment, transfer, or loan repayment processed through the Hpass OS."
  },
  {
    question: "Can I upgrade from Free to Standard?",
    answer: "Yes, anytime. Your community data and member wallets will transfer seamlessly."
  },
  {
    question: "Is there a contract?",
    answer: "Free package: month-to-month. Standard and Platinum: annual contracts."
  },
  {
    question: "What payment methods do you accept for the fees?",
    answer: "Bank transfer, wire transfer, or mobile money."
  },
  {
    question: "Do you offer discounts for multiple communities?",
    answer: "For Platinum package, please contact us to discuss."
  }
];

export const TIMELINE = [
  {
    year: '2022',
    title: 'The Vision',
    description: 'Founded with the goal of turning African cooperatives and Unions into self-sufficient digital economies.',
  },
  {
    year: '2023',
    title: 'Platform Launch',
    description: 'Successfully deployed Hpass OS to our first 10 partner communities, empowering 5,000+ members.',
  },
  {
    year: '2024',
    title: 'Digital Expansion',
    description: 'Introduced NFC and Physical POS integrations, bridging the gap between cash and digital trade.',
  },
  {
    year: '2025',
    title: 'Financial Inclusion',
    description: 'Scaling across the continent to reach 1 million community members through digital empowerment.',
  },
];

export const TEAM = [
  {
    name: 'Kofi Mensah',
    role: 'Co-Founder & CEO',
    bio: 'Visionary leader with 15 years in fintech and community banking across East and West Africa.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/team-kofi-2b7457fb-1776543060981.webp',
    socials: { twitter: '#', linkedin: '#', instagram: '#' },
  },
  {
    name: 'Amina Okoro',
    role: 'Chief Technology Officer',
    bio: 'Expert in blockchain and mobile payment systems, former lead architect at a major pan-African bank.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/team-amina-bc803a3c-1776543061013.webp',
    socials: { twitter: '#', linkedin: '#', instagram: '#' },
  },
  {
    name: 'Samuel Kiprop',
    role: 'Head of Community Partnerships',
    bio: 'Dedicated to empowering cooperatives and Unions through sustainable digital strategies and education.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/team-samuel-6c83143c-1776543063339.webp',
    socials: { twitter: '#', linkedin: '#', instagram: '#' },
  },
  {
    name: 'Zanele Ndlovu',
    role: 'Director of Merchant Success',
    bio: 'Focuses on helping small businesses thrive by adopting modern payment and credit tools.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/team-zanele-2401998a-1776543063381.webp',
    socials: { twitter: '#', linkedin: '#', instagram: '#' },
  },
];

export const CASE_STUDIES = [
  {
    id: 'cooperative-success',
    title: 'Empowering the Unity cooperative',
    client: 'Unity Savings and Credit Cooperative',
    challenge: 'High cash handling costs and limited credit access for 2,000 rural members.',
    solution: 'Implemented Helloopass digital wallets and QR code payments for local merchants.',
    result: 'Reduced transaction costs by 60% and increased local trade volume by 35% within 6 months.',
    beforeImage: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/case-study-before-1c66b6b2-1776543062700.webp',
    afterImage: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/case-study-after-4dc557d0-1776543064056.webp',
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Future of Community Banking in Africa',
    excerpt: 'How digital trade platforms are turning traditional cooperatives into high-tech financial engines.',
    author: 'Kofi Mensah',
    date: 'Jan 15, 2025',
    readTime: '6 min read',
    category: 'Innovation',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/interconnected-world-map-a4089e2c-1776543455225.webp',
  },
  {
    id: 2,
    title: 'Why QR Codes are King for Small Merchants',
    excerpt: 'Scan-to-pay is revolutionizing how street vendors and small shops handle daily transactions.',
    author: 'Zanele Ndlovu',
    date: 'Dec 20, 2024',
    readTime: '5 min read',
    category: 'Payments',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/service-qr-payment-def986c4-1776543060672.webp',
  },
  {
    id: 3,
    title: 'The Power of Community-Only Spending',
    excerpt: 'Keeping money circulating within your union strengthens the local economy for everyone.',
    author: 'Samuel Kiprop',
    date: 'Nov 12, 2024',
    readTime: '7 min read',
    category: 'Economy',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4645829c-554d-4e05-a300-86fa2c4855fb/two-young-koreans-digital-trade-d226b299-1776543455195.webp',
  },
];

export const TESTIMONIALS = [
  {
    text: "Helloopass has completely changed how our cooperative operates. Our members feel more empowered and our merchants are thriving.",
    author: "Grace Mbeki",
    role: "Chairperson, Unity cooperative",
    rating: 5,
  },
  {
    text: "Accepting QR payments on my phone has made my business so much easier. I can cash out to my bank instantly whenever I need.",
    author: "John Kamau",
    role: "Local Merchant",
    rating: 5,
  },
  {
    text: "The peer-to-peer lending feature helped me grow my farm without the high interest rates of traditional banks.",
    author: "Sarah Otieno",
    role: "Community Member",
    rating: 5,
  },
];

export const ORGANIZATION_TYPES = [
  'Cooperative',
  'Union',
  'SACCO',
  'NGO',
  'Private Enterprise',
  'Micro-finance Institution',
  'Government Body',
  'Other'
];

export const COUNTRIES = [
  'Kenya', 'Ethiopia', 'Nigeria', 'Ghana', 'Rwanda', 
  'South Africa', 'Tanzania', 'Uganda', 'Senegal', 'Ivory Coast',
  'Democratic Republic of Congo', 'Zambia', 'Zimbabwe', 'Morocco', 'Egypt'
];

export const CONTACT_INFO = {
  hubs: [
    'Nairobi, Kenya',
    'Lagos, Nigeria',
    'Accra, Ghana'
  ],
  emails: [
    'infor@belcash.com',
    'support@helloopass.com'
  ],
  phones: [
    { label: 'English Speaker', number: '+251 91 326 4953' },
    { label: 'French Speaker', number: '+254 704 352801' }
  ],
  hours: 'Mon - Fri: 8am - 5pm EAT'
};