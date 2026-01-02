# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable the contact form functionality on your portfolio website.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to the **Email Services** section
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. For **Gmail**:
   - Click on Gmail
   - Click "Connect Account"
   - Sign in with your Gmail account (sanaarshad1209@gmail.com)
   - Allow EmailJS to access your account
5. Give your service a name (e.g., "Portfolio Contact")
6. Click "Create Service"
7. **Copy the Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to the **Email Templates** section
2. Click "Create New Template"
3. Set up your template with these variables:

### Template Content:
```
Subject: New Contact from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

### Template Settings:
- **Template Name**: Portfolio Contact Form
- **Subject**: `New message from {{from_name}}`
- **Content**: Use the template above
- **To Email**: sanaarshad1209@gmail.com (your email)

4. Click "Save"
5. **Copy the Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** section (click your profile icon)
2. Find "API Keys" or "Public Key"
3. **Copy your Public Key** (e.g., `abcdefghijk123456`)

## Step 5: Update Your Code

Open `src/components/Contact.jsx` and replace these values:

```javascript
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";     // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";   // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";     // Replace with your Public Key
```

### Example:
```javascript
const EMAILJS_SERVICE_ID = "service_abc123";
const EMAILJS_TEMPLATE_ID = "template_xyz789";
const EMAILJS_PUBLIC_KEY = "abcdefghijk123456";
```

## Step 6: Test Your Contact Form

1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email (sanaarshad1209@gmail.com) for the message

## Troubleshooting

### Issue: Emails not being received
- Check your spam/junk folder
- Verify all three IDs are correct
- Make sure your EmailJS service is active
- Check the browser console for error messages

### Issue: "Invalid credentials" error
- Double-check your Service ID, Template ID, and Public Key
- Make sure there are no extra spaces when copying

### Issue: Form validation errors
- Ensure all fields are filled out
- Email must be in valid format
- Message must be at least 10 characters

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

This should be sufficient for a portfolio website!

## Security Note

The public key is safe to expose in frontend code. However, for production, consider:
1. Using environment variables
2. Setting up EmailJS access restrictions
3. Adding CAPTCHA to prevent spam

## Alternative: Environment Variables (Optional)

For better security, you can use environment variables:

1. Create a `.env` file in your project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update Contact.jsx:
```javascript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

3. Add `.env` to your `.gitignore` file

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

Happy coding! 🚀
