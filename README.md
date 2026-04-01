# 🛒 BuyBasket - Modern E-Commerce Frontend

> A sleek, modern e-commerce platform built with React and cutting-edge web technologies

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.18-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-7.13.0-CA4245?logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**[Live Demo](#) • [Documentation](#) • [API Docs](#) • [Support](#)**

</div>

---

## ✨ Features

### 🔐 **Authentication**
- User Login & Registration
- Secure token-based authentication
- User profile management
- Session management

### 🛍️ **Shopping Experience**
- Browse products by categories
- Advanced search functionality
- Product detail pages
- Responsive shopping cart
- Add/remove/update cart items

### 💳 **Checkout & Payment**
- Multi-step checkout process
- Integrated payment gateway
- Order management
- Delivery tracking
- Order history

### 📱 **User-Friendly Interface**
- Mobile-responsive design
- Modern UI components
- Smooth animations & transitions
- Toast notifications
- Loading states & skeletons

### 🎨 **Modern Design**
- Tailwind CSS styling
- Lucide React icons
- React Icons library
- Styled components
- Accessibility-focused

---

## 🚀 Tech Stack

**Frontend Framework:**
- ⚛️ **React** 19.1.1 - UI library
- ⚡ **Vite** 7.1.7 - Next-generation build tool

**Styling & UI:**
- 🎨 **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- 💫 **Styled Components** 6.3.12 - CSS-in-JS solutions
- 🎭 **Lucide React** 0.577.0 - Beautiful icons
- 🎪 **React Icons** 5.6.0 - Popular icon sets
- ✨ **Motion** 12.34.3 - Animation library

**Routing & State:**
- 🗺️ **React Router DOM** 7.13.0 - Client-side routing
- 🎯 **Context API** - State management

**HTTP & Notifications:**
- 🌐 **Axios** 1.13.5 - HTTP client
- 🔔 **React Hot Toast** 2.6.0 - Toast notifications
- 📢 **React Toastify** 11.0.5 - Notification library

**Development Tools:**
- 🔍 **ESLint** 9.36.0 - Code linting

---

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/buybasket-frontend.git
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_API_URL=your_api_endpoint_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

---

## 🎯 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              → Navigation component
│   │   ├── Fotter.jsx              → Footer component
│   │   ├── auth/                   → Authentication pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── User.jsx
│   │   ├── Pages/                  → Main page components
│   │   │   ├── Home/
│   │   │   ├── Cart/
│   │   │   ├── Categories/
│   │   │   ├── CategoryDetail/
│   │   │   ├── Product/
│   │   │   ├── Order/
│   │   │   ├── Payment/
│   │   │   ├── Delivery/
│   │   │   └── About/
│   │   └── UI/                     → Reusable UI components
│   │       ├── CartLoader.jsx
│   │       ├── CategoryCard.jsx
│   │       ├── ProductLoader.jsx
│   │       ├── SkeletonLoader.jsx
│   │       └── More...
│   ├── context/
│   │   ├── Context.js              → Context API setup
│   │   └── ContextProvider.jsx     → Context provider wrapper
│   ├── utils/
│   │   └── ScrollToTop.jsx         → Utility components
│   ├── App.jsx                     → Main app component
│   ├── Layout.jsx                  → Layout wrapper
│   ├── main.jsx                    → Entry point
│   ├── index.css                   → Global styles
│   └── App.css                     → App styles
├── public/                         → Static assets
├── index.html                      → HTML template
├── package.json                    → Project dependencies
├── vite.config.js                  → Vite configuration
├── vercel.json                     → Vercel deployment config
└── README.md                       → This file
```

---

## 💡 Key Pages & Features

| Page | Feature |
|------|---------|
| **Home** | Hero section, featured products, categories |
| **Categories** | Browse all product categories |
| **Product Details** | Detailed product information, images, reviews |
| **Cart** | View and manage shopping cart items |
| **Checkout** | Multi-step checkout process |
| **Payment** | Secure payment processing |
| **Orders** | Order history and tracking |
| **Delivery** | Delivery status and tracking info |
| **Auth** | User login, registration, profile |

---

## 🔄 State Management

The app uses **React Context API** for state management:

```javascript
{
  search,              // Global search query
  setSearch,           // Search setter
  mobileOpen,          // Mobile menu state
  setMobileOpen,       // Mobile menu setter
  searchbar,           // Searchbar visibility
  setSearchbar,        // Searchbar setter
  Cartitem,            // Shopping cart items
  setCartitem          // Cart items setter
}
```

---

## 🔗 API Integration

The application communicates with a backend API using **Axios**:

- Authentication endpoints (login, register, logout)
- Product & category endpoints
- Cart management endpoints
- Order processing endpoints
- Payment endpoints

Configure your API URL in the `.env.local` file:
```env
VITE_API_URL=https://your-api-domain.com
```

---

## 🌐 Deployment

### Deploy to Vercel

The project includes a `vercel.json` configuration file for Vercel deployment:

```bash
npm run build
vercel
```

**Key Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Route configuration for SPA

---

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px and up)
- 📲 Tablets (768px and up)
- 💻 Desktops (1024px and up)

Built with Tailwind CSS for mobile-first responsive design.

---

## 🎨 Styling Approach

- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Styled Components** - Component-scoped CSS for complex patterns
- **Custom CSS** - Additional global and component styles
- **Icons** - Lucide React and React Icons for vector icons

---

## 🚀 Performance Features

- ⚡ **Fast Development** - Vite's instant HMR (Hot Module Replacement)
- 📦 **Optimized Build** - Production-ready bundle optimization
- 🎯 **Code Splitting** - Automatic route-based code splitting with React Router
- 🖼️ **Image Optimization** - Efficient image loading
- 🔄 **Loading States** - Skeleton loaders and cart loaders for better UX

---

## 🛠️ Development

### Code Quality
- ESLint configuration for code consistency
- ESLint React plugins for best practices
- ESLint React Hooks plugin for Hook rules

### Project Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

---

## 📚 Component Breakdown

### Core Components
- **Navbar** - Navigation with search and user menu
- **Footer** - Site footer with links
- **Layout** - Main layout wrapper with router outlet

### Pages
- **Home** - Landing page with hero and featured products
- **Categories** - Category listing and filtering
- **Product** - Individual product details
- **Cart** - Shopping cart management
- **Order** - Order management and history
- **Payment** - Payment processing
- **Delivery** - Delivery tracking
- **Auth** - Login, register, and user profile

### UI Components
- Product cards with images and prices
- Category cards with icons
- Loading skeletons and spinners
- Toast notifications
- Responsive navigation menu

---

## 🔐 Security

- 🔐 Token-based authentication
- 🛡️ Secure API communication
- 🚫 XSS protection
- 📡 HTTPS support for production

---

## 📝 Environment Variables

Create a `.env.local` file with:

```env
VITE_API_URL=https://your-backend-api.com
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---

## 📞 Support

For support, please reach out to:
- 📧 Email: support@buybasket.com
- 💬 Issues: [GitHub Issues](https://github.com/yourusername/buybasket-frontend/issues)
- 📖 Documentation: [Wiki](https://github.com/yourusername/buybasket-frontend/wiki)

---

## 🙌 Acknowledgments

- React community for amazing tools and libraries
- Tailwind CSS for the utility framework
- Vite for the blazing-fast build tool
- All contributors and supporters

---

<div align="center">

**Made with ❤️ by BuyBasket Team**

[⬆ back to top](#-buybasket---modern-e-commerce-frontend)

</div>