const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setup() {
  console.log('\n=== Premier League Fan App - Environment Setup ===\n');
  
  const env = {
    PORT: '5000',
    CLIENT_URL: 'http://localhost:3000',
    JWT_SECRET: 'premier-league-fan-app-secret-key-change-in-production-' + Math.random().toString(36).substring(7),
  };

  console.log('MongoDB Setup:');
  console.log('1. Using MongoDB Atlas (Cloud - Recommended - Free)');
  console.log('2. Using Local MongoDB (if installed)');
  const mongoChoice = await question('\nChoose option (1 or 2) [1]: ') || '1';

  if (mongoChoice === '1') {
    console.log('\n📝 MongoDB Atlas Setup Instructions:');
    console.log('1. Go to: https://www.mongodb.com/cloud/atlas/register');
    console.log('2. Sign up for free (M0 cluster is free forever)');
    console.log('3. Create a cluster (choose any region)');
    console.log('4. Go to Database Access -> Add New Database User');
    console.log('5. Go to Network Access -> Add IP Address (0.0.0.0/0 for all)');
    console.log('6. Go to Database -> Connect -> Connect your application');
    console.log('7. Copy the connection string\n');
    
    const mongoUri = await question('Paste your MongoDB Atlas connection string: ');
    if (mongoUri.trim()) {
      env.MONGODB_URI = mongoUri.trim();
    } else {
      env.MONGODB_URI = 'mongodb://localhost:27017/premier-league-app';
      console.log('Using default local MongoDB URI (you can change it later)');
    }
  } else {
    env.MONGODB_URI = 'mongodb://localhost:27017/premier-league-app';
    console.log('Using local MongoDB. Make sure MongoDB is running!');
  }

  console.log('\nOpenAI API Key (Required for AI features):');
  console.log('Get your key from: https://platform.openai.com/api-keys\n');
  const openaiKey = await question('Enter your OpenAI API key: ');
  if (openaiKey.trim()) {
    env.OPENAI_API_KEY = openaiKey.trim();
  } else {
    env.OPENAI_API_KEY = 'your-openai-api-key-here';
    console.log('⚠️  Warning: OpenAI API key not set. AI features will not work!');
  }

  const useFootballApi = await question('\nDo you want to add a Football Data API key? (y/n) [n]: ') || 'n';
  if (useFootballApi.toLowerCase() === 'y') {
    console.log('\nFootball API Options:');
    console.log('1. API-Football (RapidAPI)');
    console.log('2. football-data.org (Free tier)');
    const apiChoice = await question('Choose option (1 or 2): ');
    
    if (apiChoice === '1') {
      const rapidKey = await question('Enter your RapidAPI key: ');
      if (rapidKey.trim()) {
        env.FOOTBALL_API_KEY = rapidKey.trim();
      }
    } else if (apiChoice === '2') {
      const footballDataKey = await question('Enter your football-data.org API key: ');
      if (footballDataKey.trim()) {
        env.FOOTBALL_DATA_API_KEY = footballDataKey.trim();
      }
    }
  }

  // Create .env file content
  let envContent = `# Server Configuration
PORT=${env.PORT}
CLIENT_URL=${env.CLIENT_URL}

# Database
MONGODB_URI=${env.MONGODB_URI}

# JWT Secret
JWT_SECRET=${env.JWT_SECRET}

# OpenAI API Key (Required for AI features)
OPENAI_API_KEY=${env.OPENAI_API_KEY}
`;

  if (env.FOOTBALL_API_KEY) {
    envContent += `\n# Football API - API-Football (RapidAPI)\nFOOTBALL_API_KEY=${env.FOOTBALL_API_KEY}\n`;
  }

  if (env.FOOTBALL_DATA_API_KEY) {
    envContent += `\n# Football API - football-data.org\nFOOTBALL_DATA_API_KEY=${env.FOOTBALL_DATA_API_KEY}\n`;
  }

  // Write .env file
  fs.writeFileSync(path.join(__dirname, '.env'), envContent);
  
  console.log('\n✅ .env file created successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. If using MongoDB Atlas, make sure your cluster is running');
  console.log('2. Install dependencies: npm install');
  console.log('3. Install client dependencies: cd client && npm install && cd ..');
  console.log('4. Start the app: npm run dev');
  console.log('\n✨ Setup complete!\n');

  rl.close();
}

setup().catch(console.error);

