import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { collection, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

const app = !getApps().length ? initializeApp(clientCredentials) : getApp()

const db = getFirestore(app)
const storage = getStorage(app)

const userCollection = collection(db, 'users')
const productCollection = collection(db, 'products')

export { app, db, getAuth, storage, userCollection, productCollection }
