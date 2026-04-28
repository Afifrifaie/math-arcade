import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBLeK1ocX5D3hbe5gBcHEH89cfIolZjXeE',
  authDomain: 'math-arcade-5d47e.firebaseapp.com',
  projectId: 'math-arcade-5d47e',
  storageBucket: 'math-arcade-5d47e.firebasestorage.app',
  messagingSenderId: '765365731893',
  appId: '1:765365731893:web:dfc96f7f6353358b64e77c',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
