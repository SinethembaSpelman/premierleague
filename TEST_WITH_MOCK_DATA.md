# Testing with Mock Data

The app is configured to use **mock data** for football statistics, so you can test it immediately without any API keys!

## What Works with Mock Data

✅ **Football Data** - Standings, fixtures, top scorers (all use mock data)
✅ **User Interface** - All pages and features
✅ **Real-time Chat** - Socket.io connections
✅ **Emotion Tracking** - UI and real-time updates

## What Still Needs MongoDB

⚠️ **User Accounts** - Registration and login require MongoDB
⚠️ **Emotions Storage** - Reactions need to be saved to database
⚠️ **Match Analysis** - AI analysis storage

## Quick MongoDB Setup (2 Options)

### Option 1: MongoDB Atlas (Recommended - 5 minutes, Free)

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up (free)
3. Create free M0 cluster
4. Create database user
5. Allow network access (0.0.0.0/0)
6. Get connection string
7. Update `.env` with your connection string

See `MONGODB_SETUP.md` for detailed steps.

### Option 2: Local MongoDB (If You Have It Installed)

If you have MongoDB installed locally, it should work with the current `.env` settings.

Start MongoDB:
```bash
mongod
```

## Testing Without MongoDB (UI Only)

If you want to see the UI without setting up MongoDB:

1. The app will show connection errors in the console
2. You can still see the frontend UI
3. Registration/login won't work, but you can see the pages

## Current Mock Data

The app includes mock data for:
- **Standings**: Top 5 teams with sample stats
- **Fixtures**: Sample matches (upcoming and finished)
- **Top Scorers**: Top 5 goal scorers

All football data APIs will use this mock data automatically.

## Next Steps

1. **For Full Testing**: Set up MongoDB Atlas (5 minutes)
2. **For UI Testing**: Just run the app and browse the pages
3. **For AI Features**: Add OpenAI API key to `.env`

## Run the App

```bash
# Install dependencies (if not done)
npm install
cd client && npm install && cd ..

# Start the app
npm run dev
```

Then open: http://localhost:3000

Even without MongoDB, you can see:
- Login/Register pages
- Dashboard layout
- League table UI
- Match detail page structure

