# 🚀 Start Here - Quick Test with Mock Data

## ✅ What's Ready

Your app is configured to use **mock data** for all football statistics! This means:

- ✅ **No API keys needed** for football data
- ✅ **Mock standings, fixtures, and top scorers** are built-in
- ✅ **UI is fully functional** for testing

## ⚠️ What You Still Need

**MongoDB** is required for:
- User registration/login
- Saving emotions/reactions
- Storing match analyses

But don't worry - it's **free and takes 5 minutes** to set up!

## 🎯 Quick Start (3 Steps)

### Step 1: Install Dependencies

```bash
npm install
cd client && npm install && cd ..
```

### Step 2: Set Up MongoDB (Choose One)

#### Option A: MongoDB Atlas (Recommended - Free Cloud, 5 minutes)

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up → Create free M0 cluster
3. Create database user (username + password)
4. Network Access → Add IP: `0.0.0.0/0`
5. Database → Connect → Copy connection string
6. Update `.env` file:
   ```env
   MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/premier-league-app?retryWrites=true&w=majority
   ```

**Detailed guide:** See `MONGODB_SETUP.md`

#### Option B: Skip MongoDB (UI Testing Only)

The app will start but registration/login won't work. You can still:
- See all the pages
- View the UI design
- Test navigation

### Step 3: Run the App

```bash
npm run dev
```

Open: **http://localhost:3000**

## 🎮 What You Can Test

### With MongoDB Set Up:
- ✅ Register/Login
- ✅ View dashboard with mock fixtures
- ✅ See league table with mock standings
- ✅ View top scorers
- ✅ Post reactions (emotions)
- ✅ See real-time emotional table
- ✅ Generate AI match analysis (needs OpenAI key)

### Without MongoDB (UI Only):
- ✅ View login/register pages
- ✅ See dashboard layout
- ✅ Browse league table UI
- ✅ View match detail page structure

## 📝 Current Configuration

Your `.env` file is set to:
- Use **mock football data** (no API keys needed)
- Connect to **local MongoDB** (or update to Atlas)
- **OpenAI API key** is optional (only needed for AI analysis)

## 🐛 Troubleshooting

### "MongoDB connection error"
- **Option 1**: Set up MongoDB Atlas (see above)
- **Option 2**: Install MongoDB locally and start it
- **Option 3**: Ignore it and test UI only

### "Port already in use"
- Change `PORT=5000` in `.env` to another port
- Or stop the process using that port

### "Cannot find module"
- Run `npm install` in both root and `client` directories

## 🎉 Next Steps After Testing

1. **Add OpenAI API Key** (for AI match analysis):
   - Get key from: https://platform.openai.com/api-keys
   - Add to `.env`: `OPENAI_API_KEY=sk-...`

2. **Add Football API** (optional, for real data):
   - See `SETUP.md` for API options
   - Or keep using mock data!

## 📚 More Info

- `MONGODB_SETUP.md` - Detailed MongoDB Atlas setup
- `TEST_WITH_MOCK_DATA.md` - Mock data information
- `README.md` - Full documentation

