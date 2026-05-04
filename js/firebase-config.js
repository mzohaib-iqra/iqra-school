// ═══════════════════════════════════════════════════════════════
//  FIREBASE CONFIG — Safe to keep in public GitHub
//  apiKey etc. are identifiers only — NOT secret
//  Real security is in Firebase Database Rules (auth != null)
// ═══════════════════════════════════════════════════════════════
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
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
    password:      "iqra@admin",              // local UI login password
    firebaseEmail: "admin@iqra-school.edu",   // Firebase Auth email
    name:          "Muhammad Zohaib (Principal)",
    classes:       [1,2,3,4,5,6,7,8,9,10,11,12,104,105,106,107,108,109,110,111,112],
    role:          "admin"
  },
  {
    username:      "teacher1",
    password:      "teacher@1234",
    firebaseEmail: "teacher1@iqra-school.edu",
    name:          "Teacher – Classes 1–5",
    classes:       [1,2,3,4,5,104,105],
    role:          "teacher"
  },
  {
    username:      "teacher2",
    password:      "teacher@5678",
    firebaseEmail: "teacher2@iqra-school.edu",
    name:          "Teacher – Classes 6–10",
    classes:       [6,7,8,9,10,106,107,108,109,110],
    role:          "teacher"
  }
];

// ═══════════════════════════════════════════════════════════════
//  PARENT PORTAL — shared read-only Firebase account
//  Only the email is here; password is stored locally on device
// ═══════════════════════════════════════════════════════════════
const PARENT_PORTAL_AUTH = {
  firebaseEmail: "parents@iqra-school.edu"
};
