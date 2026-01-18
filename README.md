# NextShop - Modern E-commerce Demo

A full-stack e-commerce demonstration built with Next.js 16 (App Router) and Express.js, featuring product management, authentication, and a responsive UI.

## 🚀 Features

- **Modern Stack**: Next.js 16 with App Router, React 19, Express.js
- **Authentication**: Cookie-based auth with protected routes
- **Product Management**: CRUD operations for items
- **Responsive Design**: Tailwind CSS with mobile-first approach
- **Real-time Feedback**: Toast notifications for user actions
- **Image Optimization**: Next.js Image component with Unsplash integration
- **Error Handling**: Comprehensive error boundaries and loading states
- **Form Validation**: Client-side validation with error feedback

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

   The project includes a `.env.local` file with default configuration:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:4000
   EXPRESS_API_URL=http://localhost:4000
   ```

## 🚀 Running the Application

### Development Mode

1. **Start the Express server** (in one terminal):

   ```bash
   npm run server:dev
   ```

2. **Start the Next.js development server** (in another terminal):

   ```bash
   npm run dev
   ```

3. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000

### Production Mode

1. **Build the Next.js application**:

   ```bash
   npm run build
   ```

2. **Start the production servers**:

   ```bash
   # Start Express server
   npm run server

   # Start Next.js production server (in another terminal)
   npm start
   ```

## 🔐 Authentication

**Demo Credentials:**

- Email: `admin@gmail.com`
- Password: `123456`

The authentication system uses:

- HTTP-only cookies for security
- Middleware-based route protection
- Dual cookie sync between Next.js and Express

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes (.js files)
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   └── proxy/         # Proxy to Express API
│   │   ├── items/             # Product pages (.jsx files)
│   │   ├── add-item/          # Admin product creation (.jsx)
│   │   ├── login/             # Login page (.jsx)
│   │   ├── layout.jsx         # Root layout
│   │   ├── page.jsx           # Home page
│   │   ├── error.jsx          # Error boundary
│   │   └── loading.jsx        # Loading UI
│   ├── components/            # Reusable components (.jsx files)
│   │   ├── Navbar.jsx         # Navigation with auth state
│   │   ├── ItemsList.jsx      # Product listing
│   │   ├── ProductCard.jsx    # Product card component
│   │   ├── Footer.jsx         # Footer component
│   │   └── Toaster.jsx        # Toast notifications
│   └── middleware.js          # Route protection
├── server/                    # Express backend (.js files)
│   ├── index.js              # Express server
│   └── data/items.json       # JSON data store
└── public/                   # Static assets
```

## 🛡️ API Endpoints

### Next.js API Routes

- `POST /api/auth/signin` - NextAuth.js authentication (credentials)
- `POST /api/auth/signout` - NextAuth.js logout
- `GET /api/auth/session` - Get current session
- `POST /api/proxy/items` - Proxy item creation to Express

### Express API Routes

- `GET /api/items` - Fetch all items
- `GET /api/items/:id` - Fetch single item
- `POST /api/items` - Create new item (protected)

## 🔐 Authentication

The application uses NextAuth.js with credentials provider for mock authentication:

- **Demo Email**: `admin@gmail.com`
- **Demo Password**: `123456`
- **Protected Routes**: Product details pages (`/items/[id]`)
- **Public Routes**: Home, Items list, Login page

## 🎨 Styling

- **Tailwind CSS 4**: Utility-first CSS framework
- **Custom CSS**: Additional styles in `globals.css`
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Basic dark mode support

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
npm run server       # Start Express server
npm run server:dev   # Start Express server with nodemon
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Environment Variables for Production

Update `.env.local` for production:

```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
EXPRESS_API_URL=https://your-api-domain.com
NODE_ENV=production
```

### CORS Configuration

The Express server is configured for production CORS. Update the allowed origins in `server/index.js`:

```javascript
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://your-domain.com"] // Replace with your actual domain
        : true,
    credentials: true,
  }),
);
```

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure ports 3000 and 4000 are available
2. **CORS errors**: Check that both servers are running and CORS is properly configured
3. **Authentication issues**: Clear browser cookies and try logging in again
4. **Build errors**: Run `npm run lint` to check for code issues

### Error Handling

The application includes comprehensive error handling:

- Error boundaries for React components
- Loading states for async operations
- Form validation with user feedback
- Network error handling with retry options

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
