# AI Agent Business Form

A comprehensive React + Node.js application for businesses to request AI agent consultation with automated guide generation and email delivery.

## Features

- **Business Information Form**: Collect first name, last name, email, and business description
- **AI Guide Generation**: Automatically creates personalized AI agent implementation guides
- **HTML Report**: Generates professional HTML reports
- **Email Delivery**: Sends guides directly to user's email
- **Responsive Design**: Modern, mobile-friendly interface

## Tech Stack

- **Frontend**: React.js with modern hooks
- **Backend**: Node.js with Express
- **Email**: Nodemailer for email delivery
- **Styling**: CSS3 with responsive design

## Quick Start

1. **Install all dependencies**:
   ```bash
   npm run install-all
   ```

2. **Set up environment variables**:
   Create `.env` file in the `server` directory:
   ```env
   PORT=5000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

3. **Run development servers**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Project Structure

```
ai-agent-business-form/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── styles/         # CSS files
│   │   └── App.js          # Main app component
├── server/                 # Node.js backend
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── templates/          # Email templates
│   └── index.js            # Server entry point
└── README.md
```

## API Endpoints

- `POST /api/submit-form` - Submit business form and generate guide
- `GET /api/health` - Health check endpoint

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| PORT | Server port (default: 5000) | No |
| EMAIL_USER | Gmail address for sending emails | Yes |
| EMAIL_PASS | Gmail app password | Yes |

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details