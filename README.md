# ⚡ Boltzy

<div align="center">
  <img src="public/boltzy-logo.svg" alt="Boltzy Logo" width="120" height="120">
  
  **Watch videos together with friends anywhere.**
  
  [![Netflix Sync](https://img.shields.io/badge/Netflix-Sync-red?style=for-the-badge&logo=netflix)](https://github.com/dilippurohit3/boltzy)
  [![React](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
</div>

## 🎬 What is Boltzy?

Boltzy is a modern, Netflix-inspired video synchronization platform that allows friends to watch videos together in real-time. Built with cutting-edge technology and featuring a sleek, dark UI that rivals the best streaming platforms.

### ✨ Key Features

- **🎥 Netflix Sync** - Rave-style Netflix synchronization (everyone uses their own Netflix account)
- **📺 YouTube Integration** - Watch YouTube videos together with perfect sync
- **🖥️ Screen Sharing** - Share your screen, browser tabs, or applications
- **💬 Real-time Chat** - Chat with emojis, GIFs, and reactions
- **📹 Video Chat** - Face-to-face conversations while watching
- **☁️ Virtual Browser** - Cloud-based browser for content requiring login
- **📱 Mobile Responsive** - Works perfectly on all devices
- **🔒 Secure** - No data collection, privacy-first approach

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - [Download from nodejs.org](https://nodejs.org/)
- **npm or yarn** - Package manager (comes with Node.js)
- **PostgreSQL 14+** - [Download from postgresql.org](https://www.postgresql.org/download/)
- **Redis 6+** - [Download from redis.io](https://redis.io/download)
- **Git** - [Download from git-scm.com](https://git-scm.com/downloads)

### 📋 System Requirements

- **OS**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **RAM**: Minimum 4GB, Recommended 8GB+
- **Storage**: At least 2GB free space
- **Network**: Stable internet connection for real-time features

## 🛠️ Detailed Installation Guide

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/dilippurohit3/boltzy.git
cd boltzy

# Verify you're in the correct directory
ls -la
# You should see: package.json, src/, server/, public/, etc.
```

### Step 2: Install Dependencies

```bash
# Install all dependencies (this may take 2-5 minutes)
npm install

# Alternative with yarn (if you prefer yarn)
yarn install
```

**Expected output:**
```
added 1234 packages, and audited 1234 packages in 45s
found 0 vulnerabilities
```

### Step 3: Database Setup

#### PostgreSQL Installation & Setup

**Windows:**
1. Download PostgreSQL from [postgresql.org](https://www.postgresql.org/download/windows/)
2. Run the installer and follow the setup wizard
3. Remember the password you set for the `postgres` user
4. Open pgAdmin or use command line

**macOS:**
```bash
# Using Homebrew
brew install postgresql
brew services start postgresql

# Create a database
createdb boltzy
```

**Linux (Ubuntu/Debian):**
```bash
# Install PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create a database
sudo -u postgres createdb boltzy
```

#### Redis Installation & Setup

**Windows:**
1. Download Redis from [github.com/microsoftarchive/redis](https://github.com/microsoftarchive/redis/releases)
2. Extract and run `redis-server.exe`

**macOS:**
```bash
# Using Homebrew
brew install redis
brew services start redis
```

**Linux (Ubuntu/Debian):**
```bash
# Install Redis
sudo apt update
sudo apt install redis-server

# Start Redis service
sudo systemctl start redis-server
sudo systemctl enable redis-server
```

### Step 4: Environment Configuration

```bash
# Copy the environment template
cp .env.example .env

# Edit the environment file
# Windows: notepad .env
# macOS/Linux: nano .env
```

**Configure your `.env` file:**

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/boltzy
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=boltzy
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password

# Redis Configuration
REDIS_URL=redis://localhost:6379
REDIS_HOST=localhost
REDIS_PORT=6379

# Server Configuration
PORT=3000
NODE_ENV=development

# Firebase Configuration (for authentication)
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abcdef

# Stripe Configuration (for payments)
STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Discord Bot (optional)
DISCORD_BOT_TOKEN=your_discord_bot_token

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

### Step 5: Database Migration

```bash
# Run database migrations
npm run migrate

# Or manually run the SQL files
psql -U postgres -d boltzy -f sql/schema.sql
```

### Step 6: Start the Development Server

```bash
# Start the development server
npm run dev

# Alternative commands:
npm start          # Production mode
npm run build      # Build for production
npm run test       # Run tests
```

**Expected output:**
```
🚀 Boltzy server starting...
📊 Database connected successfully
🔴 Redis connected successfully
🌐 Server running on http://localhost:3000
⚡ Boltzy is ready!
```

### Step 7: Access the Application

1. **Open your browser** and go to: `http://localhost:3000`
2. **You should see** the Boltzy homepage with the Netflix-inspired design
3. **Test the features:**
   - Create a new room
   - Test Netflix sync
   - Try screen sharing
   - Test chat functionality

## 🔧 Development Setup

### Hot Reload Development

```bash
# Start with hot reload (recommended for development)
npm run dev

# This will:
# - Watch for file changes
# - Automatically restart the server
# - Show detailed error messages
# - Enable debugging tools
```

### Debugging

```bash
# Start with debugging enabled
npm run dev:debug

# Or use VS Code debugger
# Press F5 in VS Code to start debugging
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- --grep "Netflix sync"
```

## 🐳 Docker Setup (Alternative)

If you prefer Docker:

```bash
# Build the Docker image
docker build -t boltzy .

# Run with Docker Compose
docker-compose up -d

# This will start:
# - PostgreSQL database
# - Redis cache
# - Boltzy application
```

## 🚀 Production Deployment

### Environment Setup

```bash
# Set production environment
export NODE_ENV=production

# Use production database
export DATABASE_URL=postgresql://user:pass@prod-db:5432/boltzy

# Use production Redis
export REDIS_URL=redis://prod-redis:6379
```

### Build and Deploy

```bash
# Build the application
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start ecosystem.config.js
```

## 🆘 Troubleshooting

### Common Issues

**1. Database Connection Error:**
```bash
# Check if PostgreSQL is running
pg_ctl status

# Start PostgreSQL
pg_ctl start
```

**2. Redis Connection Error:**
```bash
# Check if Redis is running
redis-cli ping
# Should return: PONG

# Start Redis
redis-server
```

**3. Port Already in Use:**
```bash
# Kill process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

**4. Permission Errors:**
```bash
# Fix npm permissions (macOS/Linux)
sudo chown -R $(whoami) ~/.npm
```

### Getting Help

- **Check logs**: Look at the console output for error messages
- **Verify dependencies**: Run `npm install` again
- **Check environment**: Ensure all `.env` variables are set correctly
- **Database status**: Verify PostgreSQL and Redis are running
- **Network issues**: Check firewall and port availability

## 📱 Mobile Development

For mobile development:

```bash
# Install mobile dependencies
npm install -g @expo/cli

# Start mobile development
npm run mobile

# This will start the Expo development server
# Scan the QR code with Expo Go app
```

## 📦 Available Scripts

### Development Scripts

```bash
# Start development server with hot reload
npm run dev

# Start development server with debugging
npm run dev:debug

# Start development server with verbose logging
npm run dev:verbose
```

### Build Scripts

```bash
# Build for production
npm run build

# Build and analyze bundle size
npm run build:analyze

# Build for different environments
npm run build:staging
npm run build:production
```

### Testing Scripts

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e
```

### Database Scripts

```bash
# Run database migrations
npm run migrate

# Rollback database migrations
npm run migrate:rollback

# Seed database with sample data
npm run seed

# Reset database (WARNING: Deletes all data)
npm run db:reset
```

### Utility Scripts

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check for security vulnerabilities
npm audit

# Update dependencies
npm update
```

## 🎯 How Netflix Sync Works

Boltzy uses a revolutionary "Rave-style" synchronization approach:

1. **Everyone uses their own Netflix account** - No sharing credentials
2. **Perfect synchronization** - Play, pause, and seek commands are synced
3. **Respects DRM** - Works within Netflix's terms of service
4. **Real-time chat** - React to moments together
5. **Cross-platform** - Works on any device with Netflix

### Netflix Sync Process

1. **Start a Netflix session** - Host creates a room and shares Netflix URL
2. **Everyone joins** - Participants open the same Netflix content
3. **Mark ready** - Each person confirms they're at the right video
4. **Sync controls** - Host controls playback for everyone
5. **Enjoy together** - Perfect synchronization with real-time chat

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Semantic UI React** - Modern component library
- **Socket.IO Client** - Real-time communication
- **WebRTC** - Peer-to-peer video/audio chat

### Backend
- **Node.js** - Server runtime
- **TypeScript** - Type-safe server code
- **Socket.IO** - Real-time bidirectional communication
- **MediaSoup** - Advanced WebRTC SFU for high-quality streaming
- **PostgreSQL** - Relational database
- **Redis** - Caching and session management

### Infrastructure
- **Docker** - Containerization
- **Firebase** - Authentication and user management
- **Stripe** - Payment processing
- **DigitalOcean/Hetzner** - Cloud hosting

## 📱 Features in Detail

### 🎥 Netflix Synchronization
- **Rave-style sync** - Everyone uses their own Netflix account
- **Perfect timing** - Play, pause, seek commands synchronized
- **Real-time indicators** - See who's ready and synced
- **Cross-platform** - Works on any device with Netflix

### 📺 Multi-Platform Support
- **YouTube** - Direct YouTube video synchronization
- **Screen Sharing** - Share your entire screen or specific applications
- **File Sharing** - Upload and watch your own videos
- **Virtual Browser** - Cloud browser for content requiring login
- **HTTP Streams** - Support for HLS, DASH, and other streaming protocols

### 💬 Social Features
- **Real-time Chat** - Text chat with emoji reactions
- **Video Chat** - Face-to-face conversations
- **Voice Chat** - Audio-only communication
- **Reactions** - Quick emoji reactions during playback
- **User Profiles** - Customizable user profiles

### 🔧 Advanced Features
- **Playlists** - Queue multiple videos
- **Room Management** - Private rooms with passwords
- **User Permissions** - Host controls and moderation
- **Mobile App** - Progressive Web App (PWA) support
- **Offline Support** - Works without internet (local videos)

## 🎨 UI/UX Design

Boltzy features a modern, Netflix-inspired interface:

- **Dark Mode** - Easy on the eyes for long viewing sessions
- **Netflix Red** - Familiar color scheme for instant recognition
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Polished interactions and transitions
- **Accessibility** - WCAG compliant for all users

## 🚀 Deployment

### Production Setup

1. **Database Setup**
   ```bash
   # PostgreSQL
   createdb boltzy
   psql boltzy < sql/schema.sql
   ```

2. **Environment Configuration**
   ```bash
   # Set production environment variables
   NODE_ENV=production
   DATABASE_URL=postgresql://...
   REDIS_URL=redis://...
   ```

3. **Build and Deploy**
   ```bash
   npm run build
   npm start
   ```

### Docker Deployment

```bash
# Build Docker image
docker build -t boltzy .

# Run with Docker Compose
docker-compose up -d
```

## 🤝 Contributing

We welcome contributions to Boltzy! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

**All Rights Reserved** - This software is proprietary and confidential.

Copyright (c) 2024 Dilippurohit3. All rights reserved.

This software and associated documentation files (the "Software") are the exclusive property of Dilippurohit3. The Software is protected by copyright laws and international treaties.

**No part of this Software may be:**
- Copied, modified, or distributed without explicit written permission
- Used for commercial purposes without a valid license
- Reverse engineered, decompiled, or disassembled
- Incorporated into other software without authorization

**For licensing inquiries, please contact:** [admin@boltzy.me](mailto:admin@boltzy.me)

## 🆘 Support

- **Documentation** - [Wiki](https://github.com/dilippurohit3/boltzy/wiki)
- **Issues** - [GitHub Issues](https://github.com/dilippurohit3/boltzy/issues)
- **Discussions** - [GitHub Discussions](https://github.com/dilippurohit3/boltzy/discussions)
- **Email** - [admin@boltzy.me](mailto:admin@boltzy.me)

## 🙏 Acknowledgments

- **Netflix** - For the inspiration and UI/UX patterns
- **Rave** - For the innovative Netflix sync approach
- **React Team** - For the amazing framework
- **Socket.IO** - For real-time communication
- **Open Source Community** - For the incredible tools and libraries

---

<div align="center">
  <strong>Made with ⚡ by Dilippurohit3</strong>
  
  [![GitHub](https://img.shields.io/badge/GitHub-dilippurohit3-black?style=for-the-badge&logo=github)](https://github.com/dilippurohit3)
  [![Email](https://img.shields.io/badge/Email-admin@boltzy.me-red?style=for-the-badge&logo=gmail)](mailto:admin@boltzy.me)
</div>