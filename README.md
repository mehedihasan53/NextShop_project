# NextShop - Modern E-commerce Demo

A full-stack e-commerce demonstration built with Next.js 16 (App Router) and NextAuth.js, featuring product management, authentication, and a responsive UI with clean dark mode design.

## 🚀 Features

- **Modern Stack**: Next.js 16 with App Router, React 19, NextAuth.js
- **Authentication**: NextAuth.js with credentials provider and protected routes
- **Product Management**: CRUD operations for items with JSON file storage
- **Responsive Design**: Clean dark mode design with Tailwind CSS
- **Real-time Feedback**: Toast notifications for user actions
- **Image Optimization**: Next.js Image component with Unsplash integration
- **Error Handling**: Comprehensive error boundaries and loading states
- **Form Validation**: Client-side validation with error feedback
- **Contact System**: EmailJS integration for contact form
- **Premium UI**: Glassmorphism effects and smooth animations

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd nextshop
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   The project includes a `.env.local` file with configuration:

   ```env
   # NextAuth Configuration 
   NEXTAUTH_URL=https://next-shop-project-final.vercel.app
   NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production

   # EmailJS Configuration
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_2ga2vw5
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_bv6broq
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AQ8zJpBiGIQlCpSr3

   # API Configuration
   NEXT_PUBLIC_API_URL=https://next-shop-project-final.vercel.app

   ```

## 🚀 Running the Application

### Development Mode

1. **Start the Next.js development server**:

   ```bash
   npm run dev
   ```

2. **Access the application**:
   - Frontend: https://next-shop-project-final.vercel.app

### Production Mode

1. **Build the Next.js application**:

   ```bash
   npm run build
   ```

2. **Start the production server**:

   ```bash
   npm start
   ```

## 🔐 Authentication

**Demo Credentials:**

- Email: `admin@gmail.com`
- Password: `123456`

The authentication system uses:

- NextAuth.js with credentials provider
- JWT strategy for session management
- Middleware-based route protection
- Protected routes for product details

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # NextAuth.js endpoints
│   │   │   └── items/         # Product API routes
│   │   ├── items/             # Product pages
│   │   ├── contact/           # Contact page with EmailJS
│   │   ├── login/             # Login page
│   │   ├── help-center/       # Support pages
│   │   ├── shipping-info/     # Shipping information
│   │   ├── returns/           # Returns policy
│   │   ├── privacy-policy/    # Privacy policy
│   │   ├── layout.jsx         # Root layout (Server Component)
│   │   ├── ClientLayout.jsx   # Client layout wrapper
│   │   ├── page.jsx           # Home page with 7 premium sections
│   │   ├── error.jsx          # Error boundary
│   │   └── loading.jsx        # Loading UI
│   ├── components/            # Reusable components
│   │   ├── Navbar.jsx         # Navigation with auth state
│   │   ├── Footer.jsx         # Premium footer with 3 sections
│   │   ├── ItemsList.jsx      # Product listing
│   │   ├── ProductCard.jsx    # Product card component
│   │   ├── ProductError.jsx   # Product error component
│   │   ├── ProductNotFound.jsx # Product not found component
│   │   ├── SessionProvider.jsx # NextAuth session provider
│   │   └── ExtensionWrapper.jsx # Browser extension cleanup
│   ├── hooks/                 # Custom hooks
│   │   └── useExtensionCleanup.js # Extension cleanup hook
│   ├── utils/                 # Utility functions
│   │   └── auth.js            # Authentication utilities
│   └── middleware.js          # Route protection middleware
├── server/                    # Data storage
│   ├── index.js              # Express server (optional)
│   └── data/items.json       # JSON data store
└── public/                   # Static assets
```

## 🛡️ API Endpoints

### NextAuth.js API Routes

- `POST /api/auth/signin` - NextAuth.js authentication (credentials)
- `POST /api/auth/signout` - NextAuth.js logout
- `GET /api/auth/session` - Get current session
- `GET /api/auth/providers` - Get available providers

### Product API Routes

- `GET /api/items` - Fetch all items
- `GET /api/items/[id]` - Fetch single item by ID

## 🔐 Authentication Flow

The application uses NextAuth.js with a credentials provider:

1. **Login Process**:
   - User enters email/password or clicks "Use Demo Credentials"
   - Form submits to NextAuth credentials provider
   - Provider validates against hardcoded credentials
   - On success, creates JWT session and redirects to intended page

2. **Protected Routes**:
   - Product details pages (`/items/[id]`) require authentication
   - Middleware checks NextAuth JWT token
   - Unauthenticated users redirected to login with callback URL

3. **Session Management**:
   - NextAuth handles session creation, validation, and cleanup
   - Navbar shows user profile and logout functionality
   - Logout clears session and redirects to home page

## 🎨 Design System

### Clean Dark Mode Theme

- **Background**: Slate-900 (#0F172A) for consistent dark theme
- **Cards**: Slate-800 with clean borders
- **Text**: White and slate colors for proper contrast
- **Accents**: Blue-600 for primary actions, red-600 for destructive actions
- **Hover Effects**: Simple color changes only, no blur or heavy animations

### Component Design

- **Navbar**: Fixed dark navbar with active link highlighting
- **Footer**: Three-section layout (Brand, Quick Links, Support)
- **Forms**: Clean input styling with proper validation states
- **Buttons**: Solid colors with simple hover effects
- **Cards**: Minimal design with subtle shadows

## 🏠 Landing Page Sections

The home page features 7 premium sections:

1. **Hero Section**: Smart gadgets headline with CTA buttons
2. **About Section**: Store information with stats
3. **Features Section**: 6 key benefits (shipping, security, quality, support, returns, pricing)
4. **Services Section**: 4 value-added services (smart home, fitness, office, consultation)
5. **Testimonials Section**: 3 customer reviews with auto-rotation
6. **Deals Section**: 3 bundle offers with pricing
7. **FAQ Section**: 6 common questions with accordion interface

## 📞 Contact System

### EmailJS Integration

- **Service**: Configured with EmailJS for contact form
- **Recipient**: All emails sent to `mehedihasan.codes3@gmail.com`
- **Features**: Form validation, loading states, success/error handling
- **Design**: Matches site's clean dark theme

### Contact Information

- **Email**: mehedihasan.codes3@gmail.com
- **Response Time**: Usually within 24 hours
- **Support**: Available for questions about the project

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.cjs` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration
- `jsconfig.json` - JavaScript configuration with path aliases

## 📦 Available Scripts

```bash
npm run dev          # Start Next.js development server
npm run build        # Build Next.js for production
npm start            # Start Next.js production server
npm run server       # Start Express server (optional)
npm run server:dev   # Start Express server with nodemon
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Environment Variables for Production

Update `.env.local` for production:

```env
# NextAuth Configuration
NEXTAUTH_URL=https://next-shop-project-final.vercel.app
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production

# EmailJS Configuration (keep existing values)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_2ga2vw5
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_bv6broq
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AQ8zJpBiGIQlCpSr3

# API Configuration
NEXT_PUBLIC_API_URL=https://next-shop-project-final.vercel.app
NODE_ENV=production
```

## 🐛 Troubleshooting

### Common Issues

1. **Hydration Errors**:
   - Caused by browser extensions modifying DOM
   - Solution: Use `suppressHydrationWarning={true}` on affected elements
   - Test in incognito mode to verify

2. **Authentication Issues**:
   - Clear browser cookies and try logging in again
   - Verify NEXTAUTH_SECRET is set correctly
   - Check that demo credentials are entered correctly

3. **Build Errors**:
   - Clear Next.js cache: `rm -rf .next`
   - Run `npm run lint` to check for code issues
   - Ensure all environment variables are set

4. **Contact Form Issues**:
   - Verify EmailJS environment variables are correct
   - Check browser console for errors
   - Ensure form validation passes

### Error Handling

The application includes comprehensive error handling:

- Error boundaries for React components
- Loading states for async operations
- Form validation with user feedback
- Network error handling with retry options
- Toast notifications for user feedback

## 📚 Development History

### Major Implementations

1. **NextAuth.js Integration**: Replaced cookie-based auth with NextAuth.js
2. **Clean Dark Mode Redesign**: Removed glassmorphism, implemented clean dark theme
3. **Contact System**: Added EmailJS integration with contact form
4. **Premium Landing Page**: 7-section landing page with animations
5. **Support Pages**: Help center, shipping info, returns, privacy policy
6. **Hydration Fixes**: Resolved browser extension conflicts
7. **File Structure Optimization**: Clean component separation and architecture

### Architecture Improvements

1. **Component Separation**: Split layout into Server and Client components
2. **Custom Hooks**: Extension cleanup and reusable logic
3. **Error Boundaries**: Comprehensive error handling
4. **Dynamic Imports**: Better module loading for client-side libraries
5. **Middleware Protection**: Route-based authentication
6. **JSON File Storage**: Simple, reliable data persistence

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is for demonstration purposes. Feel free to use it as a starting point for your own projects.

## 🔮 Future Enhancements

- [ ] TypeScript migration
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User registration and roles
- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] Image upload functionality
- [ ] Search and filtering
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Real-time notifications
- [ ] Product reviews and ratings
- [ ] Inventory management
- [ ] Order tracking system
