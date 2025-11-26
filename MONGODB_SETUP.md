# MongoDB Setup - Simplest Method (MongoDB Atlas)

## Why MongoDB Atlas?
- ✅ **Free forever** (M0 tier)
- ✅ **No installation required**
- ✅ **Cloud-based** - works from anywhere
- ✅ **Automatic backups**
- ✅ **Easy to set up** (5 minutes)

## Step-by-Step Setup

### 1. Create MongoDB Atlas Account
1. Go to: **https://www.mongodb.com/cloud/atlas/register**
2. Sign up with your email (it's free!)

### 2. Create a Free Cluster
1. After signing up, click **"Build a Database"**
2. Choose **"M0 FREE"** tier (free forever)
3. Select any cloud provider (AWS, Google Cloud, or Azure)
4. Choose any region (closest to you)
5. Click **"Create"** (takes 1-3 minutes)

### 3. Create Database User
1. Go to **"Database Access"** in the left sidebar
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter:
   - **Username**: `premierleague` (or any username)
   - **Password**: Create a strong password (save it!)
5. Set privileges to **"Atlas admin"**
6. Click **"Add User"**

### 4. Allow Network Access
1. Go to **"Network Access"** in the left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (adds 0.0.0.0/0)
4. Click **"Confirm"**

### 5. Get Connection String
1. Go back to **"Database"** in the left sidebar
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` with your database username
6. Replace `<password>` with your database password
7. Add database name at the end: `premier-league-app`
   
   Final format:
   ```
   mongodb+srv://premierleague:yourpassword@cluster0.xxxxx.mongodb.net/premier-league-app?retryWrites=true&w=majority
   ```

### 6. Update .env File
1. Open the `.env` file in your project root
2. Replace the `MONGODB_URI` line with your connection string:
   ```env
   MONGODB_URI=mongodb+srv://premierleague:yourpassword@cluster0.xxxxx.mongodb.net/premier-league-app?retryWrites=true&w=majority
   ```
3. Save the file

## That's It! 🎉

Your MongoDB is now set up and ready to use. The app will automatically connect when you start it.

## Test Connection

After updating `.env`, you can test the connection by running:
```bash
npm run server
```

You should see: `MongoDB connected` in the console.

## Troubleshooting

### "Authentication failed"
- Double-check your username and password in the connection string
- Make sure you URL-encoded special characters in the password

### "IP not whitelisted"
- Go to Network Access in Atlas
- Make sure 0.0.0.0/0 is added (allows all IPs)

### "Connection timeout"
- Make sure your cluster is running (check the Atlas dashboard)
- Verify the connection string format is correct

## Need Help?

- MongoDB Atlas Docs: https://docs.atlas.mongodb.com/
- Free tier limits: https://www.mongodb.com/cloud/atlas/pricing

