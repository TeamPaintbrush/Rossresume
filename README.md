# Ross Resume - Full Stack Portfolio

A modern, premium full-stack portfolio application showcasing design work, skills, and professional experience. Built with React.js and Node.js, featuring dynamic PDF resume generation, premium animations, and a comprehensive design showcase.

## ✨ Features

### 🎨 Dynamic Resume Generation
- **Two Professional PDF Templates**: Modern (colorful) and Professional (traditional B&W)
- **Live Data Integration**: Automatically generates resumes from `resumeData.js`
- **One-Click Download**: Download button in header and hero section
- **Comprehensive Content**: Skills, experience, education, certifications, and top projects

### 🎭 Premium Animations
- **Page Transitions**: Smooth fade and slide effects between routes
- **Scroll-Based Animations**: Elements reveal as you scroll (fade-in-up, left, right)
- **Micro-Interactions**: Button hovers, card lifts, image zooms, social icon pulses
- **Accessibility**: Respects `prefers-reduced-motion` for better UX

### 🖼️ Design Showcase
- **13 Real Design Projects**: Branding, packaging, web design, and more
- **Local Image Gallery**: All images optimized and served from `/public/images`
- **Behance Integration**: Direct links to detailed project views

### 💼 Portfolio System
- **6 Curated Categories**: Branding, Packaging, AI Automation, Web Development, Marketing, Business
- **12 Featured Projects**: Each with description, tech stack, and live links
- **Smart Filtering**: View all or filter by specific category

### 🎯 Additional Features
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Scrolling**: Auto-scroll to top on page navigation
- **Social Integration**: LinkedIn, Behance, GitHub, and email links
- **Contact Form**: Email integration for inquiries
- **SEO Optimized**: Meta tags and semantic HTML

## 📦 Tech Stack

### Frontend (Port 5560)
- **React 18.2.0**: Modern hooks and concurrent features
- **React Router v6**: Client-side routing with smooth transitions
- **@react-pdf/renderer**: Dynamic PDF generation
- **React Icons**: Font Awesome and other icon libraries
- **React Toastify**: Beautiful toast notifications
- **Intersection Observer API**: Scroll-based animation triggers
- **Custom Hooks**: `useScrollReveal` for animation control

### Backend (Port 5561)
- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **MongoDB/Mongoose**: Database and ODM
- **Nodemailer**: Email service integration
- **Security**: CORS, Helmet, Rate Limiting

### Development Tools
- **Git**: Version control
- **npm**: Package management
- **VS Code**: Recommended IDE

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Setup

1. **Install Client Dependencies**
```bash
cd client
npm install
```

2. **Install Server Dependencies**
```bash
cd server
npm install
```

3. **Configure Environment Variables**

Create `.env` file in `/server` directory:
```env
PORT=5561
MONGODB_URI=mongodb://localhost:27017/ross-resume
JWT_SECRET=your_jwt_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

Create `.env` file in `/client` directory:
```env
PORT=5560
REACT_APP_API_URL=http://localhost:5561/api
```

## 🚀 Running the Application

### Development Mode

**Start Backend Server:**
```bash
cd server
npm run dev
```
Backend runs on: http://localhost:5561

**Start Frontend:**
```bash
cd client
npm start
```
Frontend runs on: http://localhost:5560

### Production Build

**Build Frontend:**
```bash
cd client
npm run build
```

**Start Production Server:**
```bash
cd server
npm start
```

## 📁 Project Structure

```
RossResume/
├── client/                      # React frontend
│   ├── public/
│   │   ├── images/             # Design project images (13 projects)
│   │   │   ├── LeroyRoss.jpg  # Profile photo
│   │   │   ├── CafeLumiereofParis.jpg
│   │   │   └── ...            # Other project images
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/        # Navigation header
│   │   │   ├── Footer/        # Social links footer
│   │   │   ├── Loading/       # Loading spinner
│   │   │   ├── PageTransition/  # Route transition wrapper
│   │   │   └── Resume/
│   │   │       ├── ModernResumePDF.js      # Colorful PDF template
│   │   │       ├── ProfessionalResumePDF.js # B&W PDF template
│   │   │       ├── DownloadResume.js       # Download button
│   │   │       └── DownloadResume.css
│   │   ├── pages/
│   │   │   ├── Home/          # Hero + expandable skills
│   │   │   ├── Portfolio/     # 6 categories, 12 projects
│   │   │   ├── Blog/          # Design showcase (13 projects)
│   │   │   ├── BlogPost/      # Single blog post view
│   │   │   └── Contact/       # Contact form + social links
│   │   ├── data/
│   │   │   └── resumeData.js  # Central resume data source
│   │   ├── hooks/
│   │   │   └── useScrollReveal.js  # Scroll animation hook
│   │   ├── animations.css     # Global animations (300+ lines)
│   │   ├── App.js             # Main app with routing
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── server/                     # Node.js backend
│   ├── src/
│   │   ├── models/            # MongoDB schemas
│   │   │   ├── Blog.js
│   │   │   ├── Portfolio.js
│   │   │   └── Contact.js
│   │   ├── routes/            # API route definitions
│   │   │   ├── blogRoutes.js
│   │   │   ├── portfolioRoutes.js
│   │   │   └── contactRoutes.js
│   │   ├── controllers/       # Request handlers
│   │   │   ├── blogController.js
│   │   │   ├── portfolioController.js
│   │   │   └── contactController.js
│   │   ├── config/            # Configuration files
│   │   └── server.js          # Entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

### Portfolio
- `GET /api/portfolio` - Get all portfolio items
- `GET /api/portfolio/:id` - Get single portfolio item
- `POST /api/portfolio` - Create new portfolio item
- `PUT /api/portfolio/:id` - Update portfolio item
- `DELETE /api/portfolio/:id` - Delete portfolio item

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get single blog post
- `POST /api/blog` - Create new blog post
- `PUT /api/blog/:id` - Update blog post
- `DELETE /api/blog/:id` - Delete blog post

### Contact
- `POST /api/contact` - Send contact form email

## 🎨 Customization Guide

### Update Resume Data
Edit `client/src/data/resumeData.js` to customize:
- Personal information (name, title, location, phone, email)
- Professional summary
- Skills (5 main categories with subcategories)
- Work experience
- Education
- Certifications
- Top projects

### Add Design Projects
1. Add images to `client/public/images/` (avoid spaces in filenames)
2. Update `client/src/pages/Blog/Blog.js` posts array:
```javascript
{
  id: 14,
  title: "Your Project Name",
  excerpt: "Project description",
  image: `${process.env.PUBLIC_URL}/images/YourImage.jpg`,
  category: "Category",
  link: "https://www.behance.net/your-link"
}
```

### Update Portfolio Projects
Edit `client/src/pages/Portfolio/Portfolio.js` portfolioItems array:
- Change project titles, descriptions, technologies
- Update category colors in filters array
- Add new categories or projects as needed

### Customize Colors & Branding
**Brand Colors:**
- Primary: `#FF6B6B` (Coral Red)
- Secondary: `#4ECDC4` (Teal)
- Accent: `#95E1D3` (Mint)

**Update in:**
- `client/src/App.css` - CSS variables
- `client/src/pages/*/[Page].css` - Component-specific styles
- `client/src/components/Resume/ModernResumePDF.js` - PDF colors

### Modify Animations
Edit `client/src/animations.css`:
- Adjust animation durations and timing functions
- Modify keyframe animations
- Customize scroll reveal effects
- Change transition speeds in `PageTransition.css`

## � Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the client:**
```bash
cd client
npm run build
```

2. **Deploy `build/` folder** to:
   - **Vercel**: `vercel --prod`
   - **Netlify**: Drag & drop `build/` folder or use Netlify CLI
   - **GitHub Pages**: 
     ```bash
     npm install gh-pages --save-dev
     # Add to package.json: "homepage": "https://ross711.github.io/RossResume"
     npm run deploy
     ```

### Backend Deployment (Heroku/Railway/Render)

1. **Set environment variables** on your hosting platform
2. **Deploy server directory:**
   - **Heroku**: 
     ```bash
     cd server
     heroku create ross-resume-api
     git push heroku main
     ```
   - **Railway**: Connect GitHub repo, select server directory
   - **Render**: Connect GitHub, set build command `cd server && npm install`

3. **Update client API URL** in `client/.env`:
```env
REACT_APP_API_URL=https://your-api-domain.com/api
```

## 📧 Contact

**Leroy Ross**
- **Portfolio**: [RossResume](https://github.com/ross711/RossResume)
- **LinkedIn**: [ross711](https://www.linkedin.com/in/ross711/)
- **GitHub**: [ross711](https://github.com/ross711)
- **Behance**: [Paintbrushmarketing](https://www.behance.net/Paintbrushmarketing)
- **Email**: [Contact Form](http://localhost:5560/contact)

## 🎓 Education & Certifications

- **Bachelor's Degree** in Design, Business and Marketing - University of Tampa (2010)
- **Adobe Certified Professional** - Digital Experience Platform
- **Google Digital Marketing & E-commerce Certificate**
- **Google Ads Search Certification**

## � Acknowledgments

- **React PDF Renderer** - Dynamic PDF generation
- **React Icons** - Comprehensive icon library
- **Intersection Observer API** - Scroll-based animations
- **VS Code** - Development environment

## 📝 License

MIT License - Feel free to use this project for your own portfolio!

---

**Built with ❤️ by Leroy Ross in Tampa, FL**
