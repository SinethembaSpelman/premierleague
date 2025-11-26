# Premier League Fan App

A comprehensive Premier League fan application with live emotion tracking, AI-powered match analysis, and league data.

## Features

### 1. Live Emotion Tracker and Chat
- User authentication (sign up/login)
- Team selection during registration
- Real-time reactions during live matches
- Text reactions and emoji quick reactions
- AI-powered emotion classification (rage, hope, joy, heartbreak, confidence, delusion, shock)
- Real-time emotional table showing percentage of each emotion per team's fanbase
- Live chat feed with all reactions

### 2. Premier League Insider (AI Match Explainer)
- Pull match statistics from football data APIs
- AI-generated tactical analysis after each match
- Explains:
  - Why the team won/lost
  - What tactics worked or failed
  - Which players were key
  - Turning points in the match
  - What should change going into the next match

### 3. Premier League Table + Fixtures
- Current live Premier League standings
- Upcoming and recent fixtures with kickoff times
- Top scorers leaderboard
- Match details and navigation

## Tech Stack

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Socket.io for real-time features
- OpenAI API for emotion classification and match analysis
- JWT for authentication

### Frontend
- React with TypeScript
- React Router for navigation
- Socket.io-client for real-time updates
- Axios for API calls

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- OpenAI API key
- Football data API key (optional - uses mock data if not provided)

### Installation

1. **Clone the repository**
   ```bash
   cd "Premier League"
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   CLIENT_URL=http://localhost:3000
   MONGODB_URI=mongodb://localhost:27017/premier-league-app
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   OPENAI_API_KEY=your-openai-api-key-here
   FOOTBALL_API_KEY=your-rapidapi-key-here (optional)
   FOOTBALL_DATA_API_KEY=your-football-data-api-key-here (optional)
   ```

5. **Start MongoDB** (if using local MongoDB)
   ```bash
   mongod
   ```

6. **Run the application**
   
   Option 1: Run both server and client concurrently
   ```bash
   npm run dev
   ```
   
   Option 2: Run separately
   ```bash
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm run client
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `GET /api/auth/teams` - Get list of Premier League teams

### Emotions
- `POST /api/emotions` - Post a reaction/emotion
- `GET /api/emotions/match/:matchId` - Get emotions for a match
- `GET /api/emotions/match/:matchId/table` - Get emotional table (percentages)

### League Data
- `GET /api/league/standings` - Get Premier League standings
- `GET /api/league/fixtures` - Get fixtures
- `GET /api/league/top-scorers` - Get top scorers

### Match Analysis
- `POST /api/analysis/match/:matchId` - Generate match analysis
- `GET /api/analysis/match/:matchId` - Get existing match analysis

## Football Data APIs

The app supports two football data APIs:

1. **API-Football (RapidAPI)** - Set `FOOTBALL_API_KEY` in `.env`
2. **football-data.org** - Set `FOOTBALL_DATA_API_KEY` in `.env`

If neither API key is provided, the app will use mock data for development purposes.

## Environment Variables

- `PORT` - Server port (default: 5000)
- `CLIENT_URL` - Frontend URL for CORS (default: http://localhost:3000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `OPENAI_API_KEY` - OpenAI API key for AI features
- `FOOTBALL_API_KEY` - API-Football (RapidAPI) key (optional)
- `FOOTBALL_DATA_API_KEY` - football-data.org API key (optional)

## Project Structure

```
premier-league-fan-app/
├── server/
│   ├── index.js              # Express server setup
│   ├── models/               # MongoDB models
│   │   ├── User.js
│   │   ├── Emotion.js
│   │   └── MatchAnalysis.js
│   ├── routes/               # API routes
│   │   ├── auth.js
│   │   ├── emotions.js
│   │   ├── matches.js
│   │   ├── league.js
│   │   └── analysis.js
│   ├── services/              # Business logic
│   │   ├── aiService.js
│   │   └── footballApi.js
│   └── middleware/
│       └── auth.js
├── client/
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── context/           # React context
│   │   └── App.tsx
│   └── public/
└── package.json
```

## Notes

- The app uses mock data for football statistics if no API keys are provided
- Emotion classification uses OpenAI GPT-3.5-turbo for cost efficiency
- Match analysis uses OpenAI GPT-4 for more detailed analysis
- Real-time updates are handled via Socket.io
- All user passwords are hashed using bcrypt

## License

ISC

