// ═══════════════════════════════════════════════════════
//  PASTE YOUR FIREBASE CONFIG HERE
//  Get from: console.firebase.google.com
//  Project Settings → Your Apps → Web App → Config
// ═══════════════════════════════════════════════════════
const FIREBASE_CONFIG = {
 apiKey: "AIzaSyBiDDwQY5VPHLEXp2h4wO79potOs9L9A54",
  authDomain: "iqra-parents.firebaseapp.com",
  databaseURL: "https://iqra-parents-default-rtdb.firebaseio.com",
  projectId: "iqra-parents",
  storageBucket: "iqra-parents.firebasestorage.app",
  messagingSenderId: "1038703318060",
  appId: "1:1038703318060:web:1d93561f010de9de006d89"
};

// Teacher accounts — role:"admin" gets full access
const TEACHER_ACCOUNTS = [
  { username:"admin",    password:"iqra@admin",   name:"Muhammad Zohaib (Principal)", classes:[1,2,3,4,5,6,7,8,9,10], role:"admin" },
  { username:"teacher1", password:"teacher@1234", name:"Teacher – Classes 1–5",       classes:[1,2,3,4,5],            role:"teacher" },
  { username:"teacher2", password:"teacher@5678", name:"Teacher – Classes 6–10",      classes:[6,7,8,9,10],           role:"teacher" }
];
