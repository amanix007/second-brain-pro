// declare namespace NodeJS {
//   interface ProcessEnv {
//     FIREBASE_CLIENT_EMAIL: string;
//     NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY: string;
//     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
//     NEXT_PUBLIC_FIREBASE_DATABASE_URL: string;
//     NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
//     FIREBASE_PRIVATE_KEY: string;
//     COOKIE_SECRET_CURRENT: string;
//     COOKIE_SECRET_PREVIOUS: string;
//     NEXT_PUBLIC_COOKIE_SECURE: string;
//     NEXT_PUBLIC_FIREBASE_API_KEY: string;
//     NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
//     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
//     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
//     NEXT_PUBLIC_FIREBASE_APP_ID: string;
//     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
//     NEXT_PUBLIC_GOOGLE_WEB_CLIENT_ID: string;
//     NEXT_GOOGLE_WEB_CLIENT_SECRET: string;
//   }
// }


export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FIREBASE_CLIENT_EMAIL: string;
      NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY: string;
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
      NEXT_PUBLIC_FIREBASE_DATABASE_URL: string;
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
      FIREBASE_PRIVATE_KEY: string;
      COOKIE_SECRET_CURRENT: string;
      COOKIE_SECRET_PREVIOUS: string;
      NEXT_PUBLIC_COOKIE_SECURE: string;
      NEXT_PUBLIC_FIREBASE_API_KEY: string;
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
      NEXT_PUBLIC_FIREBASE_APP_ID: string;
      NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
      NEXT_PUBLIC_GOOGLE_WEB_CLIENT_ID: string;
      NEXT_GOOGLE_WEB_CLIENT_SECRET: string;
    }
  }
}