export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Breakfast' | 'Lunch' | 'Coffee' | 'Desserts';
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Arusha Sunrise Breakfast',
    description: 'Two eggs any style, beef sausage, grilled tomato, and toasted sourdough.',
    price: '12,000 TZS',
    category: 'Breakfast'
  },
  {
    id: '2',
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough with poached eggs and chili flakes.',
    price: '10,000 TZS',
    category: 'Breakfast'
  },
  {
    id: '3',
    name: 'Cafe Arusha Special Burger',
    description: 'Gourmet beef patty, caramelized onions, cheddar, and house sauce.',
    price: '15,000 TZS',
    category: 'Lunch'
  },
  {
    id: '4',
    name: 'Grilled Chicken Salad',
    description: 'Fresh greens, grilled chicken breast, avocado, and balsamic vinaigrette.',
    price: '13,000 TZS',
    category: 'Lunch'
  },
  {
    id: '5',
    name: 'Single Origin Espresso',
    description: 'Rich and bold espresso made from locally sourced Tanzanian beans.',
    price: '4,000 TZS',
    category: 'Coffee'
  },
  {
    id: '6',
    name: 'Cappuccino',
    description: 'Classic cappuccino with silky steamed milk and a dusting of cocoa.',
    price: '6,000 TZS',
    category: 'Coffee'
  },
  {
    id: '7',
    name: 'Warm Chocolate Brownie',
    description: 'Decadent chocolate brownie served with a scoop of vanilla ice cream.',
    price: '8,000 TZS',
    category: 'Desserts'
  },
  {
    id: '8',
    name: 'Fruit Tart',
    description: 'Crispy pastry shell filled with vanilla custard and seasonal fruits.',
    price: '7,000 TZS',
    category: 'Desserts'
  }
];

export const CONTACT_INFO = {
  address: '3rd Floor, Arusha Mall, Arusha, Tanzania',
  phone: '+255 123 456 789',
  email: 'info@cafearusha.com',
  hours: {
    weekdays: '7:00 AM - 9:00 PM',
    weekends: '8:00 AM - 10:00 PM'
  },
  mapsLink: 'https://www.google.com/maps/place/Cafe+Arusha,+3+rd+Floor,+Arusha+Mall,+Arusha/@-3.3705526,36.6951499,15z/data=!4m2!3m1!1s0x18371d001e951afb:0x2234d2f218ea7b1?utm_campaign=ml-ardl&g_ep=Eg1tbF8yMDI2MDMyNV8wIJvbDyoASAJQAA%3D%3D'
};
