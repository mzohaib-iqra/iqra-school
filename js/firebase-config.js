// ═══════════════════════════════════════════════════════
//  PASTE YOUR FIREBASE CONFIG HERE
//  Get from: console.firebase.google.com
//  Project Settings → Your Apps → Web App → Config
// ═══════════════════════════════════════════════════════
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Teacher accounts — role:"admin" gets full access
const TEACHER_ACCOUNTS = [
  { username:"admin",    password:"iqra@admin",   name:"Muhammad Zohaib (Principal)", classes:[1,2,3,4,5,6,7,8,9,10], role:"admin" },
  { username:"teacher1", password:"teacher@1234", name:"Teacher – Classes 1–5",       classes:[1,2,3,4,5],            role:"teacher" },
  { username:"teacher2", password:"teacher@5678", name:"Teacher – Classes 6–10",      classes:[6,7,8,9,10],           role:"teacher" }
];
