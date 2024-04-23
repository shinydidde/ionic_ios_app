import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.horsevalleyresort',
  appName: 'Horse Valley Resort',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  'plugins': {
    "Camera": {
      "android": {
        "permissions": ["CAMERA", "READ_EXTERNAL_STORAGE"]
      },
      "SplashScreen": {
        "launchShowDuration": 1000
      },
      "ios": {
        "permissions": {
          "photo-library": {
            "description": "Allow access to photo library"
          }
        }
      }
    }
  }
};

export default config;
