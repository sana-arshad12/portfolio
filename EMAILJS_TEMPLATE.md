# EmailJS Template Configuration

Copy and paste this into your EmailJS template editor.

## Template Name
```
Portfolio Contact Form
```

## Subject Line
```
New message from {{from_name}} - Portfolio Contact
```

## Email Content (HTML Version - Recommended)

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border: 1px solid #ddd;
        }
        .field {
            margin: 15px 0;
        }
        .label {
            font-weight: bold;
            color: #667eea;
        }
        .message-box {
            background: white;
            padding: 20px;
            border-left: 4px solid #667eea;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🎉 New Message from Portfolio</h2>
        </div>
        <div class="content">
            <p>Hello <strong>{{to_name}}</strong>,</p>
            <p>You have received a new message through your portfolio contact form!</p>
            
            <div class="field">
                <span class="label">👤 From:</span> {{from_name}}
            </div>
            
            <div class="field">
                <span class="label">📧 Email:</span> 
                <a href="mailto:{{from_email}}">{{from_email}}</a>
            </div>
            
            <div class="message-box">
                <div class="label">💬 Message:</div>
                <p>{{message}}</p>
            </div>
            
            <p><em>Reply directly to this email to respond to {{from_name}}.</em></p>
        </div>
        <div class="footer">
            <p>Sent from your Portfolio Contact Form</p>
            <p>© 2025 Sana Arshad</p>
        </div>
    </div>
</body>
</html>
```

## Email Content (Plain Text Version - Simpler)

```
Hello {{to_name}},

You have received a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: {{from_email}}

---
This message was sent via your Portfolio Contact Form
© 2025 Sana Arshad
```

## Template Settings in EmailJS Dashboard

### Basic Settings
- **Template Name:** Portfolio Contact Form
- **Template ID:** (will be auto-generated, copy this!)
- **From Name:** Portfolio Contact Form
- **From Email:** (use your verified email)
- **To Email:** sanaarshad1209@gmail.com
- **Reply To:** {{from_email}}

### Template Variables Used
Make sure these variables are in your template:
- `{{to_name}}` - Your name (Sana Arshad)
- `{{from_name}}` - Visitor's name from form
- `{{from_email}}` - Visitor's email from form
- `{{message}}` - Message content from form

### Auto-Reply (Optional)
If you want to send an auto-reply to the person who contacted you:

1. Create a second template called "Contact Form Auto Reply"
2. Use this content:

```
Subject: Thanks for reaching out!

Hi {{from_name}},

Thank you for your message! I've received your inquiry and will get back to you as soon as possible.

Your message:
{{message}}

Best regards,
Sana Arshad
Web Developer & WordPress Expert

Email: sanaarshad1209@gmail.com
Website: [Your Portfolio URL]
GitHub: github.com/SanaArshad12
```

3. In your Contact.jsx, add a second emailjs.send() call in the .then() block

## Testing Your Template

After setting up:
1. Use the "Test" button in EmailJS dashboard
2. Fill in sample data
3. Check if email arrives correctly
4. Verify all variables are replaced properly

## Pro Tips

✅ Use HTML version for better presentation
✅ Test with different message lengths
✅ Check spam folder during testing
✅ Verify Reply-To works correctly
✅ Keep template simple and professional
✅ Add your branding (colors, logo)

Need help? Check QUICK_START.md for full setup guide!
