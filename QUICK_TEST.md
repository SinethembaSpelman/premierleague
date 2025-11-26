# 🎮 Quick Test Guide - Mock Data Mode

## ✅ Status: Ready to Test!

Your app is configured with:
- ✅ **Mock football data** (no API keys needed)
- ✅ **All dependencies installed**
- ✅ **UI ready to view**

## 🚀 Start the App

```bash
npm run dev
```

This starts both:
- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:3000

## 📱 What You'll See

### Without MongoDB (UI Testing):
1. Open http://localhost:3000
2. You'll see the login page
3. You can browse the UI (registration/login won't work without MongoDB)
4. Check the browser console for any errors

### With MongoDB (Full Testing):
1. Set up MongoDB Atlas (5 min - see `MONGODB_SETUP.md`)
2. Update `.env` with your MongoDB connection string
3. Register an account
4. Test all features!

## 🎯 Mock Data Included

The app has built-in mock data for:
- **League Standings**: Top 5 teams
- **Fixtures**: Sample matches
- **Top Scorers**: Top 5 goal scorers

All displayed automatically - no API keys needed!

## ⚠️ MongoDB Note

MongoDB is still needed for:
- User accounts (registration/login)
- Saving emotions
- Storing analyses

But the app will start and show the UI even without it!

## 🐛 If You See Errors

### "MongoDB connection error"
- **Normal!** The app will still run
- Set up MongoDB Atlas to enable full features
- See `MONGODB_SETUP.md` for help

### "Cannot GET /"
- Make sure both servers are running
- Check that ports 3000 and 5000 are available

### Frontend won't load
- Wait a moment (React takes time to compile)
- Check http://localhost:3000 (not 5000)
- Look at terminal for errors

## 🎉 Next Steps

1. **Test the UI** - Browse pages and see the design
2. **Set up MongoDB** - 5 minutes for full functionality
3. **Add OpenAI key** - For AI match analysis (optional)

Enjoy testing! 🚀

