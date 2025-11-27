# 🪟 Windows Setup Guide

## PowerShell Execution Policy Issue

If you're getting errors like:
```
npm : File ...\npm.ps1 cannot be loaded because running scripts is disabled
```

**Solution:** Use `cmd.exe` instead of PowerShell, or use the `.bat` scripts provided.

## Quick Fix Options

### Option 1: Use Command Prompt (CMD)
Open **Command Prompt** (not PowerShell) and run:
```cmd
cd Downloads\DailyOath
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### Option 2: Use Batch Scripts
We've created `.bat` files that work around the PowerShell issue:
- `install-capacitor.bat` - Installs Capacitor
- `build-android.bat` - Builds and syncs for Android

### Option 3: Fix PowerShell Permanently (Requires Admin)

Run PowerShell **as Administrator** and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then you can use npm normally in PowerShell.

## Building APK on Windows

### Step 1: Install Capacitor
```cmd
npm install @capacitor/core @capacitor/cli @capacitor/android
```
Or use: `install-capacitor.bat`

### Step 2: Build Next.js App
```cmd
npm run build
```

### Step 3: Initialize Capacitor (First Time)
```cmd
npx cap init
```
- App name: `MyDailyOath`
- App ID: `com.mydailyoath.app`
- Web dir: `out`

### Step 4: Add Android Platform
```cmd
npx cap add android
```

### Step 5: Sync
```cmd
npx cap sync
```

### Step 6: Open in Android Studio
```cmd
npx cap open android
```

## Using Batch Scripts

All commands can be run via `.bat` files which bypass PowerShell restrictions:
- `install-capacitor.bat` - Install Capacitor
- `build-android.bat` - Full build process

---

**Note:** If `npx` commands also fail, use:
```cmd
cmd /c "npx cap init"
```




