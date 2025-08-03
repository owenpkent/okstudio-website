# OKStudio - Portfolio Website

A modern, responsive portfolio website for drone business services. Built with HTML, CSS, and JavaScript with beautiful animations and interactive features.

## Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Portfolio**: Filterable portfolio gallery with hover effects
- **Contact Form**: Functional contact form with validation and notifications
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Animations**: Scroll-triggered animations and counter effects
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## File Structure

```
Drone website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### 1. Branding & Content

**Company Information:**
- Update the company name "OKStudio" throughout the HTML
- Change contact information (phone, email, location)
- Update social media links in the footer

**Services:**
- Modify the services section to match your offerings
- Update service icons using Font Awesome classes
- Adjust service descriptions

**Portfolio:**
- Replace placeholder images with your actual drone photography
- Update portfolio categories and descriptions
- Add more portfolio items as needed

### 2. Colors & Styling

**Primary Colors:**
- Blue: `#2563eb` (used for buttons, links, accents)
- Gold: `#ffd700` (used for gradients and highlights)
- Purple gradient: `#667eea` to `#764ba2` (hero background)

**To change colors:**
1. Open `styles.css`
2. Search for color values and replace them
3. Update gradient backgrounds as needed

### 3. Images

**Replace placeholder images:**
- Hero section: Add your own drone footage or aerial photography
- Portfolio images: Replace Unsplash URLs with your actual work
- About section: Add a photo of your team or equipment

**Image optimization:**
- Use WebP format for better performance
- Compress images to reduce file size
- Maintain aspect ratios for consistent layout

### 4. Contact Form

**Form functionality:**
- The form currently shows success/error notifications
- To make it functional, you'll need to:
  1. Set up a backend server (Node.js, PHP, etc.)
  2. Configure email sending (SendGrid, Nodemailer, etc.)
  3. Update the form action in `script.js`

**Form fields:**
- Name, Email, Phone, Service selection, Message
- All fields are customizable in the HTML

### 5. SEO & Performance

**Meta tags to update:**
- Title tag
- Meta description
- Open Graph tags for social sharing

**Performance optimizations:**
- Optimize images
- Minify CSS and JavaScript for production
- Enable gzip compression on your server

## Deployment Options

### 1. GitHub Pages (Free)
```bash
# Create a new repository
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/drone-portfolio.git
git push -u origin main

# Enable GitHub Pages in repository settings
```

### 2. Netlify (Free tier)
1. Drag and drop your folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployments on updates

### 3. Vercel (Free tier)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### 4. Traditional Web Hosting
1. Upload files via FTP/SFTP
2. Ensure your hosting supports static sites
3. Configure domain and SSL certificate

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images:**
   - Use WebP format with fallbacks
   - Implement lazy loading
   - Compress images appropriately

2. **Minify Assets:**
   - Minify CSS and JavaScript for production
   - Use a build tool like Webpack or Parcel

3. **Caching:**
   - Set appropriate cache headers
   - Use a CDN for faster loading

4. **Analytics:**
   - Add Google Analytics or similar
   - Track form submissions and user interactions

## Custom Features to Add

### 1. Lightbox Gallery
```javascript
// Add to script.js for portfolio image lightbox
function createLightbox(imageSrc, title, description) {
    // Implementation here
}
```

### 2. Video Background
```html
<!-- Add to hero section -->
<video autoplay muted loop>
    <source src="your-drone-video.mp4" type="video/mp4">
</video>
```

### 3. Testimonials Section
```html
<!-- Add testimonials carousel -->
<section class="testimonials">
    <!-- Testimonial content -->
</section>
```

### 4. Blog/News Section
```html
<!-- Add blog posts or news updates -->
<section class="blog">
    <!-- Blog content -->
</section>
```

## Troubleshooting

### Common Issues:

1. **Images not loading:**
   - Check file paths
   - Ensure images are in the correct directory
   - Verify image URLs are accessible

2. **Form not working:**
   - Check browser console for errors
   - Verify form validation is working
   - Test with different browsers

3. **Mobile menu not working:**
   - Check JavaScript console for errors
   - Verify CSS classes are correct
   - Test on actual mobile devices

4. **Animations not working:**
   - Check if JavaScript is enabled
   - Verify CSS animations are supported
   - Test on different browsers

## Support

For issues or questions:
1. Check the browser console for errors
2. Verify all files are in the correct location
3. Test on different browsers and devices
4. Ensure all dependencies are loaded (Font Awesome, Google Fonts)

## License

This project is open source and available under the MIT License.

---

**Ready to launch your drone business online!** 🚁✨ 