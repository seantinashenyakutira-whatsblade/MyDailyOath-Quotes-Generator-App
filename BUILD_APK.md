# 📱 Building Android APK for MyDailyOath

This guide will help you build an APK file that can be installed on Android devices.

## Prerequisites

1. **Node.js** (already installed ✅)
2. **Java JDK 11 or higher** - [Download here](https://adoptium.net/)
3. **Android Studio** - [Download here](https://developer.android.com/studio)
   - Includes Android SDK and build tools

## Step 1: Install Capacitor

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

## Step 2: Build Your Next.js App

```bash
npm run build
```

This creates a static export in the `out` folder.

## Step 3: Initialize Capacitor (First Time Only)

```bash
npx cap init
```

When prompted:
- **App name:** MyDailyOath
- **App ID:** com.mydailyoath.app
- **Web dir:** out

## Step 4: Add Android Platform

```bash
npx cap add android
```

## Step 5: Sync Your App

```bash
npx cap sync
```

This copies your web app files to the Android project.

## Step 6: Open in Android Studio

```bash
npx cap open android
```

This opens Android Studio with your project.

## Step 7: Build APK in Android Studio

### Option A: Debug APK (For Testing)

1. In Android Studio, go to **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
2. Wait for the build to complete
3. Click **locate** in the notification
4. The APK will be in: `android/app/build/outputs/apk/debug/app-debug.apk`

### Option B: Release APK (For Distribution)

1. **Create a Keystore** (First time only):
   ```bash
   keytool -genkey -v -keystore mydailyoath-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias mydailyoath
   ```
   - Remember the password and alias!

2. **Create `android/key.properties`:**
   ```
   storePassword=YOUR_STORE_PASSWORD
   keyPassword=YOUR_KEY_PASSWORD
   keyAlias=mydailyoath
   storeFile=../mydailyoath-release-key.jks
   ```

3. **Update `android/app/build.gradle`:**
   Add before `android {`:
   ```gradle
   def keystorePropertiesFile = rootProject.file("key.properties")
   def keystoreProperties = new Properties()
   keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
   ```
   
   Update `android {` section:
   ```gradle
   android {
       signingConfigs {
           release {
               keyAlias keystoreProperties['keyAlias']
               keyPassword keystoreProperties['keyPassword']
               storeFile file(keystoreProperties['storeFile'])
               storePassword keystoreProperties['storePassword']
           }
       }
       buildTypes {
           release {
               signingConfig signingConfigs.release
           }
       }
   }
   ```

4. **Build Release APK:**
   - In Android Studio: **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
   - Or use command line:
     ```bash
     cd android
     ./gradlew assembleRelease
     ```
   - APK location: `android/app/build/outputs/apk/release/app-release.apk`

## Step 8: Install APK on Your Phone

1. Transfer the APK file to your Android phone
2. Enable "Install from Unknown Sources" in Settings
3. Tap the APK file to install
4. Open the app!

## Quick Commands Reference

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# Build and sync
npm run build:android

# Open in Android Studio
npm run cap:open:android

# Sync only
npm run cap:sync
```

## Troubleshooting

### "Command not found: cap"
- Make sure Capacitor is installed: `npm install @capacitor/cli -g`

### "Android SDK not found"
- Install Android Studio
- Open Android Studio → SDK Manager
- Install Android SDK and build tools

### Build Errors
- Make sure Java JDK is installed and `JAVA_HOME` is set
- Check Android Studio SDK path is correct

### App Crashes
- Check browser console for errors
- Make sure all assets are in the `out` folder
- Verify Capacitor sync completed successfully

## Alternative: Build APK Without Android Studio

You can also use command line with Gradle:

```bash
cd android
./gradlew assembleDebug  # For debug APK
./gradlew assembleRelease # For release APK (requires signing)
```

## Next Steps

- **Test the APK** on your device
- **Distribute** via Google Play Store (requires release APK and Play Console account)
- **Share** the APK file directly with users

---

**Note:** For production releases, always use a signed release APK. The debug APK is only for testing.




