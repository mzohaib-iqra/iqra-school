// ═══════════════════════════════════════════════════════════════
//  FIREBASE CONFIG — Safe to keep in public GitHub
//  apiKey etc. are identifiers only — NOT secret
//  Real security is in Firebase Database Rules (auth != null)
// ═══════════════════════════════════════════════════════════════
const FIREBASE_CONFIG = {
apiKey: "AIzaSyBiDDwQY5VPHLEXp2h4wO79potOs9L9A54",
  authDomain: "iqra-parents.firebaseapp.com",
  databaseURL: "https://iqra-parents-default-rtdb.firebaseio.com",
  projectId: "iqra-parents",
  storageBucket: "iqra-parents.firebasestorage.app",
  messagingSenderId: "1038703318060",
  appId: "1:1038703318060:web:1d93561f010de9de006d89"
};

// ═══════════════════════════════════════════════════════════════
//  TEACHER ACCOUNTS
//  ⚠ IMPORTANT: Do NOT put real Firebase passwords here if
//  your GitHub repo is public. Instead, the app will ask for
//  the Firebase password once per device and store it locally.
//
//  firebaseEmail: The email you created in Firebase Auth Console
//  role: "admin" → full access | "teacher" → class-limited
// ═══════════════════════════════════════════════════════════════
const TEACHER_ACCOUNTS = [
  {
    username:      "admin",
    password:      "iqra@admin",          // local UI password
    firebaseEmail: "admin@iqra-school.edu",    // ← must match Firebase Auth
    firebasePass:  "iqra00admin",           // ← must match Firebase Auth
    ...
  }
];

const PARENT_PORTAL_AUTH = {
  firebaseEmail: "parents@iqra-school.edu",   // ← must match Firebase Auth
  firebasePass:  "iqra-parents-2025"          // ← must match Firebase Auth
};

// ═══════════════════════════════════════════════════════════════
//  PARENT PORTAL — shared read-only Firebase account
//  Only the email is here; password is stored locally on device
// ═══════════════════════════════════════════════════════════════
const PARENT_PORTAL_AUTH = {
  firebaseEmail: "parents@iqra-school.edu"
};
