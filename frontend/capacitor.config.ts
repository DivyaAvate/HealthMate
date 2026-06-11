import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.healthmate.app',
  appName: 'HealthMate',
  server: {
  url: 'http://10.197.60.74:3000',
    cleartext: true
  }
};

export default config;