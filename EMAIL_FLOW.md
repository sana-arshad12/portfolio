# Email Setup - Nodemailer + Gmail

This portfolio uses **Nodemailer with Gmail** for the contact form.

## Configuration

### Environment Variables (.env)
```
GMAIL_USER=sanaarshad1209@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
PORT=5000
```

### How to Get Gmail App Password
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Create a new app password for "Mail"
5. Copy the 16-character password

## Running the Server

```bash
cd server
npm install
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

- `POST /api/contact` - Send contact form email
- `GET /api/health` - Health check

## Frontend Configuration

Set `VITE_API_URL` in your frontend .env for production:
```
VITE_API_URL=https://your-backend-url.com
```
