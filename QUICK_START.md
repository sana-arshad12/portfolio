# Quick Start Guide: Enable Contact Form Email

## 🚀 Quick Setup (5 minutes)

### Option 1: Using the Setup Script (Easiest)

1. **Get EmailJS Credentials** (See detailed steps below)
2. **Run the setup script:**
   ```cmd
   setup_emailjs.bat
   ```
3. **Enter your credentials** when prompted
4. **Done!** Your contact form will now send emails

### Option 2: Manual Setup

1. **Create a `.env` file** in the project root
2. **Copy from `.env.example`:**
   ```bash
   copy .env.example .env
   ```
3. **Edit `.env`** and add your credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
4. **Save and restart** your dev server

---

## 📧 Getting EmailJS Credentials (Step by Step)

### Step 1: Create Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (It's FREE!)
3. Verify your email

### Step 2: Add Email Service (2 minutes)
1. Click **"Email Services"** in the left menu
2. Click **"Add New Service"**
3. Choose **Gmail** (or your preferred email provider)
4. Click **"Connect Account"**
5. Sign in with: **sanaarshad1209@gmail.com**
6. Allow EmailJS permissions
7. ✅ **Copy your Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template (2 minutes)
1. Click **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. **Template Settings:**
   - **Name:** Portfolio Contact Form
   - **Subject:** `New message from {{from_name}}`
4. **Template Content:**
   ```
   Hello {{to_name}},
   
   You received a new message from your portfolio:
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   Sent via Portfolio Contact Form
   ```
5. **To Email:** sanaarshad1209@gmail.com
6. Click **"Save"**
7. ✅ **Copy your Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key (30 seconds)
1. Click your **profile icon** (top right)
2. Go to **"Account"**
3. Find **"General"** tab
4. Look for **"Public Key"** or **"API Keys"**
5. ✅ **Copy your Public Key** (looks like: `abcXYZ123_456`)

---

## ✅ Testing Your Setup

1. **Start your dev server:**
   ```cmd
   npm run dev
   ```

2. **Navigate to Contact section**

3. **Fill out the form:**
   - Name: Test User
   - Email: your_email@example.com
   - Message: Testing contact form

4. **Click "Send Message"**

5. **Check your inbox:** sanaarshad1209@gmail.com

---

## 🔧 Troubleshooting

### "EmailJS is not configured" alert
- You haven't created the `.env` file yet
- Run `setup_emailjs.bat` or create `.env` manually

### Email not received
- ✅ Check **spam/junk** folder
- ✅ Verify all three credentials are correct
- ✅ Make sure your EmailJS service is **active**
- ✅ Check browser console for errors

### "Invalid credentials" error
- Double-check Service ID, Template ID, and Public Key
- No extra spaces when copying
- Restart dev server after changing `.env`

### Form validation errors
- All fields must be filled
- Email must be valid format
- Message must be at least 10 characters

---

## 📊 Free Plan Limits

EmailJS Free Plan includes:
- ✅ **200 emails/month** (perfect for portfolio!)
- ✅ 2 email services
- ✅ 2 email templates
- ✅ All features unlocked

More than enough for a personal portfolio! 🎉

---

## 🔒 Security Notes

- ✅ `.env` file is in `.gitignore` (won't be uploaded to GitHub)
- ✅ Public Key is safe to use in frontend
- ✅ EmailJS provides rate limiting automatically

### Optional: Add CAPTCHA
To prevent spam, you can add Google reCAPTCHA later.

---

## 📱 Contact Form Features

Your contact form now includes:
- ✅ Form validation
- ✅ Error messages
- ✅ Loading states
- ✅ Email sending
- ✅ Success notifications
- ✅ Direct contact links (email & phone)
- ✅ Responsive design

---

## 🆘 Need Help?

- **EmailJS Docs:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Support:** [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
- **Check detailed guide:** See `EMAILJS_SETUP.md`

---

## 🎉 That's It!

Your contact form is now fully functional! Visitors can send you messages directly to your email.

**Test it thoroughly before deploying! 🚀**
