# 💕 MyDailyOath - AI Companion App

A beautiful personal diary and quotes generator application with AI integration, built with **React**, **Next.js**, and **Tailwind CSS**. Features a stunning black/pink and white/pink UI/UX design.

---

## 🚀 Quick Start - How to Use This App

### 📱 For Android Users (Easiest Way)

1. **Download the Repository:**
   - Click the green **"Code"** button on GitHub
   - Select **"Download ZIP"**
   - Extract the ZIP file to your computer

2. **Find the APK File:**
   - Look for `DailyOath.apk` in the extracted folder (or check `android/app/build/outputs/apk/debug/` folder)

3. **Transfer to Your Android Phone:**
   - Connect your phone via USB, or
   - Email the APK to yourself, or
   - Upload to Google Drive and download on your phone

4. **Install the APK:**
   - On your Android phone, go to **Settings** → **Security**
   - Enable **"Install from Unknown Sources"** or **"Install Unknown Apps"**
   - Open the APK file from your phone's file manager
   - Tap **"Install"**
   - Once installed, open **MyDailyOath** from your app drawer! 🎉

### 💻 For PC/Desktop Users (Requires Node.js)

**Prerequisites:**
- **Node.js 18 or higher** - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

**Steps:**

1. **Download the Repository:**
   - Click the green **"Code"** button on GitHub
   - Select **"Download ZIP"**
   - Extract the ZIP file

2. **Open Terminal/Command Prompt:**
   - Navigate to the extracted folder:
     ```bash
     cd DailyOath
     ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

5. **Open in Browser:**
   - Open your browser and go to: [http://localhost:3000](http://localhost:3000)
   - The app will automatically reload when you make changes

**To Build for Production:**
```bash
npm run build
npm start
```

---

## 👨‍💻 Author Information

**Name:** Sean Nyakutira  
**Profession:** Student / Software Developer 
**Location:** Lusaka, Zambia  
**University:** Eden University  

### 📞 Contact Details

- **Phone:** +2607769507996
- **Email:** Seantinashenyakutira@gmail.com
- **GitHub:** [@seantinashenyakutira-whatsblade](https://github.com/seantinashenyakutira-whatsblade)

---

## Features

### 📝 Write Diary
- Write and save your personal diary entries
- Get AI-powered quotes, advice, and encouragement based on your entries
- View all your saved diary entries with dates
- AI analyzes your writing and provides:
  - **Inspirational Quotes** - Personalized quotes to strengthen and inspire you
  - **Advice** - Thoughtful guidance based on your entry
  - **Encouragement** - Supportive messages to build you up

### 💬 Chat with AI
- Talk to AI like you would with your best friend
- Share your feelings, daily experiences, and thoughts
- Get empathetic, supportive responses
- Perfect for when you need someone to talk to about:
  - How you're feeling
  - What you did today
  - People you met
  - Any topic you'd share with a close friend

### ✨ My Quotes
- Collection of all inspirational quotes you've received
- Beautiful quote cards with authors
- Organized by date

### 🎨 Design Features
- **Dual Theme**: Switch between light (white/pink) and dark (black/pink) modes
- **Beautiful UI**: Modern gradient design with pink accents using Tailwind CSS
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Delightful transitions and interactions
- **📱 Mobile App Ready**: Can be installed as PWA or converted to native app with Capacitor

## Tech Stack

- **React 18** - UI library
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **LocalStorage** - Client-side data persistence

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd Downloads/DailyOath
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### 📱 Install as Mobile App (PWA)

Your app is already configured as a Progressive Web App (PWA)! 

**On Android:**
- Open in Chrome → Menu (3 dots) → "Add to Home screen"

**On iOS:**
- Open in Safari → Share button → "Add to Home Screen"

For full native app conversion, see [MOBILE_SETUP.md](./MOBILE_SETUP.md)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
DailyOath/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── DiaryTab.tsx     # Diary writing component
│   ├── ChatTab.tsx      # AI chat component
│   └── QuotesTab.tsx    # Quotes display component
├── package.json
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## AI Integration

The app currently uses a simulated AI system that provides contextual responses based on your input. To integrate with a real AI service:

### OpenAI Integration Example

1. Install the OpenAI SDK:
   ```bash
   npm install openai
   ```

2. Create an API route in `app/api/chat/route.ts`:
   ```typescript
   import { NextResponse } from 'next/server'
   import OpenAI from 'openai'

   const openai = new OpenAI({
     apiKey: process.env.OPENAI_API_KEY,
   })

   export async function POST(request: Request) {
     const { message } = await request.json()
     
     const completion = await openai.chat.completions.create({
       model: 'gpt-3.5-turbo',
       messages: [
         {
           role: 'system',
           content: 'You are a supportive AI companion that provides empathetic responses like a best friend.',
         },
         {
           role: 'user',
           content: message,
         },
       ],
     })

     return NextResponse.json({ response: completion.choices[0].message.content })
   }
   ```

3. Update the chat component to call the API route instead of the simulated response.

4. Add your API key to `.env.local`:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

## Data Storage

All data is stored locally in your browser's localStorage:
- Diary entries persist between sessions
- Chat history is saved (last 50 messages)
- Quotes collection is maintained
- Theme preference is remembered

## Customization

### Changing Colors

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      'pink-primary': '#ff69b4',
      'pink-dark': '#ff1493',
      'pink-light': '#ffb6c1',
    },
  },
}
```

### Modifying AI Responses

Update the `generateContextualResponse` and `generateChatResponse` functions in the respective components to customize AI behavior.

## Browser Compatibility

Works in all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- localStorage API
- React 18

## Privacy

- All data is stored locally on your device
- No data is sent to external servers (unless you integrate a real AI API)
- Your privacy is completely protected

## License

MIT

---

**Developed by:** Sean Nyakutira  
Made with 💕 for personal growth and reflection


