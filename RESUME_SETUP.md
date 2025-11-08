# Resume Setup Instructions

## How to Add Your Resume PDF

To enable the Resume view and download functionality, follow these steps:

### Step 1: Prepare Your Resume
1. Convert your resume to PDF format
2. Name it `resume.pdf` (or any name you prefer)

### Step 2: Add to Public Folder
1. Navigate to the `public` folder in your project root
2. Copy your `resume.pdf` file into the `public` folder

### Step 3: Update Path (if using different filename)
If you named your resume differently, update the path in `src/components/Resume.jsx`:

```javascript
// Change this line (around line 10):
const resumePath = "/resume.pdf";

// To your filename:
const resumePath = "/your-resume-name.pdf";
```

### File Structure
```
3dPortfolio-main/
├── public/
│   ├── resume.pdf  ← Place your resume here
│   ├── desktop_pc/
│   └── planet/
├── src/
└── ...
```

### Testing
1. Run your development server: `npm run dev`
2. Navigate to the Resume section
3. Click "View Resume" to preview
4. Click "Download Resume" to download

That's it! Your resume will now be accessible on your portfolio.
