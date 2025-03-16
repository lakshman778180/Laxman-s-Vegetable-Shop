### Ramesh's Vegetable Shop

A modern e-commerce website built with Next.js and Tailwind CSS for a local vegetable shop. This application allows customers to browse products, search and filter vegetables, add items to cart, and complete the checkout process.

## Features

- **Product Browsing**: Browse a variety of vegetables with images, descriptions, and prices
- **Search & Filtering**: Search products by name or description and filter by category
- **Shopping Cart**: Add/remove items, update quantities, and view total cost in real-time
- **User Authentication**: Login/signup system with session persistence using localStorage
- **Responsive Design**: Mobile-friendly interface that works on all device sizes
- **Order Checkout**: Review cart and complete the purchase process

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Data Fetching**: Mock data with simulated API calls
- **Authentication**: Client-side authentication (UI only)

## Installation and Setup

1. **Clone the repository**

```shellscript
git clone https://github.com/yourusername/ramesh-vegetable-shop.git
cd ramesh-vegetable-shop
```

2. **Install dependencies**

```shellscript
pnpm install
```

3. **Run the development server**

```shellscript
pnpm run dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## Project Structure

```plaintext
ramesh-vegetable-shop/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── cart/             # Shopping cart page
│   ├── login/            # Authentication page
│   ├── products/         # Products listing page
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── footer.tsx        # Site footer
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section for homepage
│   ├── product-card.tsx  # Individual product display
│   └── product-list.tsx  # Products grid with search/filter
├── context/              # React Context providers
│   ├── auth-context.tsx  # Authentication state management
│   └── cart-context.tsx  # Shopping cart state management
├── lib/                  # Utility functions and types
│   └── types.ts          # TypeScript interfaces
└── public/               # Static assets
```

## Usage

### For Customers

1. **Browse Products**

1. Visit the homepage to see featured products
1. Navigate to the Products page for the full catalog
1. Use the search bar to find specific vegetables
1. Filter products by category using the dropdown

1. **Shopping**

1. Click "Add to Cart" on any product
1. View your cart by clicking the cart icon in the header
1. Adjust quantities or remove items as needed
1. Proceed to checkout

1. **Authentication**

1. Click "Login" in the navigation menu
1. Enter your email and password to log in
1. Create a new account by clicking "Create an account"
1. Log out by clicking "Logout" in the navigation menu

### For Developers

- **Adding New Products**: Update the product data in the `product-list.tsx` component
- **Modifying UI**: Components are modular and can be easily customized
- **State Management**: Global state is managed through Context API in the `context` folder

## Key Implementation Details

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Responsive navigation with hamburger menu on small screens
- Grid layouts that adapt to different screen sizes

### State Management

- Cart state persists across sessions using localStorage
- Authentication state is managed through Context API
- Product filtering and search implemented with React hooks

### Accessibility

- Semantic HTML elements
- ARIA roles and labels for interactive elements
- Keyboard navigation support

## Future Improvements

- Backend integration with a real database
- Payment gateway integration
- User profiles with order history
- Admin dashboard for inventory management
- Product reviews and ratings
- Wishlist functionality
- Dark mode support

## License

This project is licensed under the MIT License.
