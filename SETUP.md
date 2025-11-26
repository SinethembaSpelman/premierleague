# Quick Setup Guide

## Step 1: Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

## Step 2: Set Up Environment Variables

Create a `.env` file in the root directory with the following:

```env
PORT=5000
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/premier-league-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
OPENAI_API_KEY=sk-your-openai-api-key-here
```

### Optional: Football Data API Keys

You can add one of these for real football data (otherwise mock data will be used):

```env
# Option 1: API-Football (RapidAPI)
FOOTBALL_API_KEY=your-rapidapi-key-here

# Option 2: football-data.org (free tier available)
FOOTBALL_DATA_API_KEY=your-football-data-api-key-here
```

## Step 3: Start MongoDB

If using local MongoDB:
```bash
mongod
```

Or use MongoDB Atlas (cloud) and update `MONGODB_URI` in `.env`.

## Step 4: Run the Application

```bash
# Run both server and client
npm run dev
```

Or run separately:
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
cd client
npm start
```

## Step 5: Access the App

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Getting API Keys

### OpenAI API Key
1. Go to https://platform.openai.com/
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Add it to `.env` as `OPENAI_API_KEY`

### Football Data API (Optional)
- **API-Football (RapidAPI)**: https://rapidapi.com/api-sports/api/api-football
- **football-data.org**: https://www.football-data.org/ (free tier available)

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check your `MONGODB_URI` in `.env`
- For MongoDB Atlas, ensure your IP is whitelisted

### OpenAI API Errors
- Verify your API key is correct
- Check your OpenAI account has credits
- Ensure the key has proper permissions

### Port Already in Use
- Change `PORT` in `.env` to a different port
- Or stop the process using port 5000/3000

