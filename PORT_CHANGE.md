# Port Changed to 3008

The React app has been configured to use **port 3008**.

## What Changed

✅ React app now runs on: **http://localhost:3008**
✅ Backend still runs on: **http://localhost:5000**
✅ Socket.io CORS updated to allow port 3008

## Access Your App

Open your browser to: **http://localhost:3008**

## Optional: Update .env File

If you want to explicitly set the client URL, update your `.env` file:

```env
CLIENT_URL=http://localhost:3008
```

But it's not required - the app will work with the default.

## Alternative: Free Up Port 3000

If you prefer to use port 3000, you can:

1. Find what's using it:
   ```bash
   netstat -ano | findstr :3000
   ```

2. Stop that process (replace PID with the process ID):
   ```bash
   taskkill /PID <PID> /F
   ```

3. Revert the port changes in `client/package.json` and `package.json`

But using port 3001 is perfectly fine! 🚀

