# 🚀 Quick APK Setup Guide

## Fast Track to Building Your APK

### Step 1: Install Dependencies

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### Step 2: Build Your App

```bash
npm run build
```

### Step 3: Initialize Capacitor (First Time)

```bash
npx cap init
```
- App name: `MyDailyOath`
- App ID: `com.mydailyoath.app`  
- Web dir: `out`

### Step 4: Add Android Platform

```bash
npx cap add android
```

### Step 5: Sync

```bash
npx cap sync
```

### Step 6: Open in Android Studio

```bash
npx cap open android
```

### Step 7: Build APK

In Android Studio:
1. **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
2. Wait for build
3. Click **locate** in notification
4. Find your APK: `android/app/build/outputs/apk/debug/app-debug.apk`

### Step 8: Install on Phone

1. Transfer APK to your Android phone
2. Enable "Install from Unknown Sources"
3. Tap APK to install
4. Done! 🎉

---

## Prerequisites Needed

- ✅ Node.js (you have this)
- ⚠️ Java JDK 11+ - [Download](https://adoptium.net/)
- ⚠️ Android Studio - [Download](https://developer.android.com/studio)

---

## All-in-One Command (After Initial Setup)

```bash
npm run build:android && npx cap open android
```

For detailed instructions, see [BUILD_APK.md](./BUILD_APK.md)




