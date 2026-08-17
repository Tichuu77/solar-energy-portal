export const company = { name: 'Richa Enterprises', phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+91 98765 43210', whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210', email: process.env.NEXT_PUBLIC_EMAIL || 'hello@richaenterprises.in', city: 'Nagpur, Maharashtra' }
export const benefits = [{ icon: 'savings', title: 'Smaller bills', text: 'Turn sunshine into savings every month.' }, { icon: 'shield', title: 'Built to last', text: 'Quality components, careful installation.' }, { icon: 'leaf', title: 'Cleaner future', text: 'Less dependence on fossil fuels.' }, { icon: 'numbers', title: 'Clear numbers', text: 'Know your system before you commit.' }]
export const navLinks = [{ label: 'Solutions', href: '/#solutions' }, { label: 'How it works', href: '/#process' }, { label: 'Projects', href: '/projects' }, { label: 'Solar calculator', href: '/solar-calculator' }]
export const solutions = [{ icon: 'home', title: 'Residential solar', text: 'A smarter roof for your family. Reduce bills, increase independence, and add value to your home.', href: '/residential-solar' }, { icon: 'building', title: 'Commercial solar', text: 'Turn unused rooftops into predictable savings for your business and your bottom line.', href: '/commercial-solar' }, { icon: 'factory', title: 'Industrial solar', text: 'High-performance systems engineered for demanding loads, with monitoring that never sleeps.', href: '/industrial-solar' }]
export interface Project {
  slug: string
  name: string
  type: 'Residential' | 'Commercial' | 'Industrial'
  location: string
  fullAddress: string
  capacity: string
  image: string
  description: string
  savings: string
  completionDate: string
  structureType: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'bajaria-rooftop-solar',
    name: 'Bajaria Pergola Solar Plant',
    type: 'Residential',
    location: 'Bajaria, Nagpur',
    fullAddress: 'Jama Masjid St, Bajaria, Nagpur 440018',
    capacity: '5 kW',
    image: '/proj-001.jpg',
    description: 'Heavy-duty elevated structural solar canopy over a residential roof terrace in Bajaria. Designed to preserve full rooftop usage while providing shade and generating green electricity.',
    savings: '82% bill reduction',
    completionDate: 'July 2025',
    structureType: 'Elevated HDG Pergola Structure',
    highlights: ['Zero lost roof space', 'MSEDCL Net-Metering Approved', 'High-wind load tested steel']
  },
  {
    slug: 'trimurtee-nagar-solar',
    name: 'Trimurtee Nagar Residence',
    type: 'Residential',
    location: 'Parsodi, Nagpur',
    fullAddress: 'Mankapur Ring Rd, Trimurtee Nagar, Nagpur 440022',
    capacity: '6 kW',
    image: '/proj-002.jpg',
    description: 'Custom elevated solar array built near Mankapur Ring Road. The elevated design ensures panels receive full solar exposure throughout the day without interference from parapet walls.',
    savings: '₹6,200/month saved',
    completionDate: 'March 2025',
    structureType: 'Elevated Steel Columns',
    highlights: ['Optimized solar tilt', '25-Year Performance Warranty', 'Smart string inverter monitoring']
  },
  {
    slug: 'khamla-monsoon-proof-solar',
    name: 'Khamla Urban Solar Grid',
    type: 'Residential',
    location: 'Khamla, Nagpur',
    fullAddress: 'Khamla, Nagpur 440025',
    capacity: '5 kW',
    image: '/proj-003.jpg',
    description: 'Monocrystalline PERC solar installation engineered for high weather resilience during Nagpur monsoons and intense summer temperatures.',
    savings: '₹5,500/month saved',
    completionDate: 'August 2025',
    structureType: 'Weather-Protected Galvanized Frame',
    highlights: ['Anti-reflective glass modules', 'Lightning surge protection', 'Overcast weather optimization']
  },
  {
    slug: 'azad-hind-nagar-home-solar',
    name: 'Azad Hind Nagar Home Solar',
    type: 'Residential',
    location: 'Parsodi, Nagpur',
    fullAddress: 'Azad Hind Nagar, Parsodi, Nagpur 440022',
    capacity: '3 kW',
    image: '/proj-004.jpg',
    description: 'Compact residential rooftop solar plant powering domestic appliances, air conditioners, and water pumps for a family residence in Parsodi.',
    savings: '78% lower electricity bill',
    completionDate: 'February 2025',
    structureType: 'Standard Rooftop Frame',
    highlights: ['PM Surya Ghar subsidy compliant', 'Dual AC/DC safety isolation', 'Rapid 3-day installation']
  },
  {
    slug: 'hingna-high-rise-solar',
    name: 'Shirke Layout Elevated Solar',
    type: 'Residential',
    location: 'Hingna, Nagpur',
    fullAddress: 'Shirke Layout, Hingna, Digdoh 440016',
    capacity: '8 kW',
    image: '/proj-005.jpg',
    description: 'Tall elevated solar structure mounted above rooftop water tanks and stairwell heads, providing power for a dual-family residential property in Digdoh.',
    savings: '₹8,400/month saved',
    completionDate: 'June 2025',
    structureType: 'High-Clearance HDG Canopy',
    highlights: ['Water tank clearance layout', 'Multi-tenant power division', 'Heavy wind anchoring']
  },
  {
    slug: 'gandhibagh-loharpura-solar',
    name: 'Loharpura Terrace Solar',
    type: 'Commercial',
    location: 'Gandhibagh, Nagpur',
    fullAddress: 'Chhota Loharpura, Gandhibagh, Nagpur 440018',
    capacity: '7 kW',
    image: '/proj-006.jpg',
    description: 'Rooftop solar power installation for a commercial-residential premises in the bustling Gandhibagh trade quarter.',
    savings: '₹7,800/month saved',
    completionDate: 'July 2025',
    structureType: 'Custom Elevated Terrace Framing',
    highlights: ['High-density panel layout', 'Thermal heat block on top floor', 'Remote mobile monitoring']
  },
  {
    slug: 'narsala-sambhaji-nagar-solar',
    name: 'Shanti Niwas Solar Project',
    type: 'Residential',
    location: 'Narsala, Nagpur',
    fullAddress: 'Sambhaji Nagar, Narsala, Nagpur 440034',
    capacity: '5 kW',
    image: '/proj-007.jpg',
    description: 'High-efficiency rooftop solar plant delivering 100% clean power backup and daytime solar energy generation for Shanti Niwas residence.',
    savings: '85% bill reduction',
    completionDate: 'May 2025',
    structureType: 'High structural frame',
    highlights: ['Zero daytime grid reliance', 'MSEDCL bi-directional meter', 'Rust-proof galvanization']
  },
  {
    slug: 'santra-market-commercial-solar',
    name: 'Santra Market Commercial Hub',
    type: 'Commercial',
    location: 'Bajaria, Nagpur',
    fullAddress: 'Santra Market, Bajaria, Nagpur 440018',
    capacity: '10 kW',
    image: '/proj-008.jpg',
    description: 'Commercial rooftop solar canopy engineered over Santra Market business premises to power cold storage, lighting, and daily office loads.',
    savings: '₹11,500/month saved',
    completionDate: 'May 2025',
    structureType: 'Commercial Elevated Steel Truss',
    highlights: ['Commercial tariff offset', 'Peak load shaving', 'Tax depreciation benefits']
  },
  {
    slug: 'kharbi-vidya-nagar-solar',
    name: 'Kharbi Vidya Nagar Solar System',
    type: 'Residential',
    location: 'Kharbi, Nagpur',
    fullAddress: 'Vidya Nagar Rd, Kharbi, Nagpur 440024',
    capacity: '6 kW',
    image: '/proj-009.jpg',
    description: 'Spacious rooftop solar installation built over Vidya Nagar home, creating a cool shaded rooftop lounge while producing over 24 kWh per day.',
    savings: '₹6,800/month saved',
    completionDate: 'March 2025',
    structureType: 'Full Roof Steel Canopy',
    highlights: ['Creation of shaded roof deck', 'Bifacial high-efficiency panels', '25-Year warranty']
  },
  {
    slug: 'vayusena-nagar-amravati-rd-solar',
    name: 'Vayusena Nagar Solar Canopy',
    type: 'Residential',
    location: 'Amravati Rd, Nagpur',
    fullAddress: 'Vayusena Nagar, Amravati Rd, Nagpur 440021',
    capacity: '8 kW',
    image: '/proj-010.jpg',
    description: 'Dual-row elevated solar power installation along Amravati Road, designed for maximum efficiency and wind flow ventilation.',
    savings: '₹8,900/month saved',
    completionDate: 'August 2025',
    structureType: 'Dual-Row Elevated Frame',
    highlights: ['Dual-row optimal tilt', 'Heat reduction inside home', 'Integrated web telemetry']
  },
  {
    slug: 'daulat-patel-marg-solar',
    name: 'Daulat Patel Marg Complex',
    type: 'Commercial',
    location: 'Gandhibagh, Nagpur',
    fullAddress: 'Daulat Patel Marg, Gandhibagh, Nagpur 440018',
    capacity: '10 kW',
    image: '/proj-011.jpg',
    description: 'High-performance commercial solar power setup in central Gandhibagh designed to offset commercial electricity rates.',
    savings: '₹12,000/month saved',
    completionDate: 'April 2025',
    structureType: 'Rooftop Structural Solar Deck',
    highlights: ['Heavy commercial offset', 'Net-metering connection', 'Low-maintenance coating']
  },
  {
    slug: 'central-bajaria-solar',
    name: 'Central Bajaria Rooftop System',
    type: 'Residential',
    location: 'Bajaria, Nagpur',
    fullAddress: 'Bajaria Main Rd, Nagpur 440018',
    capacity: '5 kW',
    image: '/proj-013.jpg',
    description: 'Elevated residential solar installation providing shaded terrace utility area and lowering electricity expenses significantly.',
    savings: '₹5,600/month saved',
    completionDate: 'May 2025',
    structureType: 'Elevated Column Mount',
    highlights: ['High shade clearance', 'Poly/Mono Hybrid Inverter', '24/7 power monitoring']
  },
  {
    slug: 'wanadongri-mahajanwadi-solar',
    name: 'Wanadongri Residential Solar',
    type: 'Residential',
    location: 'Wanadongri, Nagpur',
    fullAddress: 'Mahajanwadi, Dangarpura, Wanadongri 440019',
    capacity: '4 kW',
    image: '/proj-014.jpg',
    description: 'Clean, reliable solar installation for independent housing in Wanadongri, lowering dependence on grid power fluctuations.',
    savings: '75% energy cost reduction',
    completionDate: 'June 2025',
    structureType: 'Galvanized Angle Structure',
    highlights: ['Grid-tied net metering', 'PM Surya Ghar subsidy ready', 'Fast setup']
  },
  {
    slug: 'jaitala-radhe-shyam-solar',
    name: 'Jaitala Radhe Shyam Solar Plant',
    type: 'Industrial',
    location: 'Jaitala, Nagpur',
    fullAddress: 'Mahendra Colony, Radhe Shyam Nagar, Jaitala 440036',
    capacity: '12 kW',
    image: '/proj-015.jpg',
    description: 'High-capacity 12 kW solar plant engineered at Mahendra Colony, Jaitala. Designed for high power demand and heavy daily consumption.',
    savings: '₹14,500/month saved',
    completionDate: 'June 2025',
    structureType: 'Heavy Commercial HDG Canopy',
    highlights: ['High-capacity 12 kW array', 'Industrial-grade inverter', 'Maximum ROI in 3.2 years']
  }
]
export const faqs = [{ q: 'How much can I save with rooftop solar?', a: 'Most customers see 60–90% lower electricity bills, depending on roof, usage, tariff and system size. Use our calculator for a tailored estimate.' }, { q: 'How long does installation take?', a: 'A typical home installation takes 2–4 days after approvals. Larger commercial systems are planned around your operations.' }, { q: 'What happens on cloudy or rainy days?', a: 'Panels still generate power in diffuse light. Your grid connection provides reliable backup, while net metering helps you use excess generation.' }]
export const testimonials = [
  { quote: 'The team made solar feel simple. From the first survey to MSEDCL approval, every step was clear.', name: 'Ananya Deshpande', role: 'Homeowner, Dharampeth', initials: 'AD' },
  { quote: 'Our energy costs are finally predictable. The monitoring dashboard gives us confidence every day.', name: 'Rohan Kulkarni', role: 'Director, Vidarbha Foods', initials: 'RK' },
  { quote: 'We saved ₹11,000 in the very first month. The system paid for itself faster than they promised.', name: 'Priya Meshram', role: 'Homeowner, Khamla', initials: 'PM' },
  { quote: 'They handled the MSEDCL paperwork, the subsidy application, everything. I just watched the panels go up.', name: 'Suresh Wankhede', role: 'Business Owner, Sitabuldi', initials: 'SW' },
  { quote: 'Even during monsoon season the system keeps running. We barely draw from the grid anymore.', name: 'Kavita Borkar', role: 'Homeowner, Manish Nagar', initials: 'KB' },
  { quote: 'Three years in and the panels look as good as day one. The maintenance team actually shows up when they say they will.', name: 'Amit Pande', role: 'Factory Owner, Hingna MIDC', initials: 'AP' }
]
export const steps = [{ number: '01', title: 'Discover', text: 'We understand your energy use, roof and goals in a no-pressure consultation.' }, { number: '02', title: 'Design', text: 'Our engineers model the right system for your home or business, not a one-size-fits-all kit.' }, { number: '03', title: 'Install', text: 'Certified installers bring your system to life with clean, careful workmanship.' }, { number: '04', title: 'Thrive', text: 'We help with approvals and keep your system performing for decades.' }]

export const brandPartners = [
  { name: 'Tata Power Solar', category: 'Panels' },
  { name: 'Adani Solar', category: 'Panels' },
  { name: 'Havells', category: 'Inverters' },
  { name: 'Fronius', category: 'Inverters' },
  { name: 'Polycab', category: 'Wiring & Protection' },
  { name: 'Growatt', category: 'Inverters' },
  { name: 'Jinko Solar', category: 'Panels' },
  { name: 'Luminous', category: 'Storage' }
]

export const governmentSchemes = [
  { title: 'PM Surya Ghar Yojana', subtitle: 'Up to ₹78,000 subsidy', description: 'Central government subsidy for residential rooftop solar systems up to 3 kW. We handle the entire application process for you.', tag: 'Most Popular' },
  { title: 'MSEDCL Net Metering', subtitle: 'Sell excess power', description: 'Export surplus solar energy to the Maharashtra grid and earn credits on your electricity bill. Zero energy wasted.', tag: 'Earn Credits' },
  { title: 'Accelerated Depreciation', subtitle: '40% tax benefit', description: 'Commercial and industrial customers can claim accelerated depreciation on solar assets, significantly reducing tax liability.', tag: 'Business' }
]

export const recentProjects = [
  { image: '/proj-001.jpg', location: 'Bajaria, Nagpur', capacity: '5 kW' },
  { image: '/proj-008.jpg', location: 'Santra Market, Nagpur', capacity: '10 kW' },
  { image: '/proj-005.jpg', location: 'Hingna, Nagpur', capacity: '8 kW' },
  { image: '/proj-015.jpg', location: 'Jaitala, Nagpur', capacity: '12 kW' },
  { image: '/proj-007.jpg', location: 'Narsala, Nagpur', capacity: '5 kW' },
  { image: '/proj-011.jpg', location: 'Gandhibagh, Nagpur', capacity: '10 kW' }
]
