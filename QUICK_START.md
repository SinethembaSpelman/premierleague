# Quick Start Guide - Simplest Setup

## Step 1: Run the Setup Script

```bash
node setup-env.js
```

This will guide you through creating the `.env` file with all necessary configuration.

## Step 2: MongoDB Atlas Setup (Simplest - Free Cloud Database)

If you chose MongoDB Atlas in the setup script, follow these steps:

1. **Sign up for MongoDB Atlas** (Free forever):
   - Go to: https://www.mongodb.com/cloud/atlas/register
   - Create a free account

2. **Create a Free Cluster**:
   - Click "Build a Database"
   - Choose "M0 FREE" tier
   - Select any cloud provider and region
   - Click "Create"

3. **Create Database User**:
   - Go to "Database Access" in the left menu
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Enter username and password (save these!)
   - Set privileges to "Atlas admin" or "Read and write to any database"
   - Click "Add User"

4. **Allow Network Access**:
   - Go to "Network Access" in the left menu
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**:
   - Go to "Database" in the left menu
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Paste it when prompted in the setup script

## Step 3: Get OpenAI API Key

1. Go to: https://platform.openai.com/
2. Sign up or log in
3. Navigate to "API Keys" section
4. Click "Create new secret key"
5. Copy the key and paste it when prompted in the setup script

## Step 4: Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

## Step 5: Start the Application

```bash
npm run dev
```

This will start both the backend server (port 5000) and frontend (port 3000).

## Step 6: Access the App

- Open your browser: http://localhost:3000
- Register a new account
- Select your favorite Premier League team
- Start using the app!

## Troubleshooting

### MongoDB Connection Error
- Make sure your MongoDB Atlas cluster is running
- Verify your connection string has the correct password
- Check that your IP is whitelisted in Network Access

### OpenAI API Error
- Verify your API key is correct
- Check your OpenAI account has credits
- Make sure the key hasn't expired

### Port Already in Use
- Change `PORT` in `.env` to a different port
- Or stop the process using port 5000/3000

## Alternative: Local MongoDB (If You Prefer)

If you want to use local MongoDB instead:

1. Download MongoDB: https://www.mongodb.com/try/download/community
2. Install it on Windows
3. Start MongoDB service (usually starts automatically)
4. The default connection string in `.env` will work: `mongodb://localhost:27017/premier-league-app`

But **MongoDB Atlas is recommended** as it's simpler and doesn't require installation!

