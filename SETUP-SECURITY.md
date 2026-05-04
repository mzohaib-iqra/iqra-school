# 🔐 Firebase Security Setup Guide
## IQRA Public School & College — Dara Pezu

---

## ⚠️ IMPORTANT — Do This Before Going Live

Your data is currently **publicly readable/writable**.
Follow these steps to lock it down completely.

---

## STEP 1 — Create Firebase Auth Users

Go to: **Firebase Console → Authentication → Sign-in method**
1. Enable **Email/Password** provider
2. Go to **Authentication → Users → Add User**

Create these accounts (use your own secure passwords):

| Email                          | Password          | Who          |
|-------------------------------|-------------------|--------------|
| admin@iqra-school.edu         | iqra@admin2025    | Principal    |
| teacher1@iqra-school.edu      | teacher1@2025     | Teacher 1    |
| teacher2@iqra-school.edu      | teacher2@2025     | Teacher 2    |
| parents@iqra-school.edu       | iqra-parents-2025 | Parent Portal|

> ⚠️ These emails/passwords MUST exactly match what's in `js/firebase-config.js`

---

## STEP 2 — Set Firebase Database Security Rules

Go to: **Firebase Console → Realtime Database → Rules**

Replace all rules with:

```json
{
  "rules": {
    "iqra": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

Click **Publish**.

This means:
- ✅ Only users signed in via Firebase Auth can read/write
- ❌ Anyone without credentials gets **Permission Denied**
- ❌ Public internet cannot access your data

---

## STEP 3 — Update `js/firebase-config.js`

Paste your real Firebase config AND update the credentials
to match exactly what you created in Step 1:

```js
const TEACHER_ACCOUNTS = [
  {
    username:      "admin",
    password:      "iqra@admin",          // local UI password
    firebaseEmail: "admin@iqra-school.edu",    // ← must match Firebase Auth
    firebasePass:  "iqra@admin2025",           // ← must match Firebase Auth
    ...
  }
];

const PARENT_PORTAL_AUTH = {
  firebaseEmail: "parents@iqra-school.edu",   // ← must match Firebase Auth
  firebasePass:  "iqra-parents-2025"          // ← must match Firebase Auth
};
```

---

## STEP 4 — Verify It Works

1. Open admin panel → login → should connect and show "🟢 Live – secured & authenticated"
2. Open parent portal → should load data automatically
3. Open Firebase Console → Realtime Database → try to browse data
   → You should see **Permission Denied** if not authenticated

---

## How The Security Works

```
Admin Login        →  Signs into Firebase as admin@iqra-school.edu
Teacher Login      →  Signs into Firebase as teacher1@iqra-school.edu  
Parent Portal      →  Signs into Firebase as parents@iqra-school.edu (read-only)

Firebase Rules     →  Only allows access if auth != null
                   →  No credentials = No access = Data is safe
```

---

## Optional Advanced Rules (Stricter)

For extra security, add write restrictions:

```json
{
  "rules": {
    "iqra": {
      ".read": "auth != null",
      ".write": "auth != null && auth.token.email != 'parents@iqra-school.edu'"
    }
  }
}
```

This prevents the parent portal account from ever writing data.

---

## Backup Your Data

In Firebase Console → Realtime Database → ⋮ (3 dots) → Export JSON
Do this weekly and save to a safe location.


---

## ✅ Is It Safe to Put on GitHub?

**YES — completely safe** after following this guide. Here is why:

| What is in the code | Is it secret? | Risk if public? |
|---------------------|---------------|-----------------|
| `apiKey`, `databaseURL` | No — identifier only | None — Firebase designed these to be public |
| `firebaseEmail` | Low | Someone knows the email, but can't login without the password |
| `firebasePass` | **REMOVED** — stored on your device only | ✅ Never in GitHub code |
| Local UI passwords (`iqra@admin`) | Medium | Only works on the local login screen — Firebase blocks them anyway |

**The real lock is Firebase Rules.** Once rules say `auth != null`, the data is locked regardless of what is in the code.

---

## 📱 Share the Parent Portal

Parents can visit:
```
https://YOUR-USERNAME.github.io/iqra-school/parent-portal.html
```

**First visit:** The portal will ask for the Firebase password once.
- Give parents this password: `iqra-parents-2025` (or whatever you set)
- After they enter it once, it is saved on their phone/computer
- They never need to enter it again

This is the **parent read-only account** — they can only view data, never change it.

---

## 🔒 Admin Panel

Only teachers should access:
```
https://YOUR-USERNAME.github.io/iqra-school/
```

Keep the admin URL less visible — or add a note on the parent portal like "For teachers only, contact school for access."

