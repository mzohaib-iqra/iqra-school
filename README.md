# 🏫 IQRA Public School & College — Live Tracker

**IQRA Public School and College, Dara Pezu (Boys & Girls)**  
Principal: Muhammad Zohaib | Since 1999

---

## 📁 Project Structure

```
iqra-school/
├── index.html            ← Admin panel (teachers only)
├── parent-portal.html    ← Parent portal (share this link)
├── logo.png              ← School logo
├── css/
│   ├── admin.css         ← Admin panel styles
│   └── portal.css        ← Parent portal styles
├── js/
│   ├── firebase-config.js  ← ⚠ FILL THIS IN FIRST
│   └── data.js             ← Shared data & helpers
└── README.md
```

---

## 🚀 Setup in 3 Steps

### Step 1 — Create Firebase Project (Free)

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Add project"** → Name it `iqra-school` → Create
3. In left menu: **Build → Realtime Database → Create Database**
4. Choose any region → Select **"Start in test mode"** → Enable
5. Go to ⚙️ **Project Settings → Your apps → Add Web App `</>`**
6. Register app as `iqra-tracker` → Copy the config object

### Step 2 — Fill in Firebase Config

Open `js/firebase-config.js` and replace the placeholder values:

```javascript
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",           // paste from Firebase
  authDomain:        "iqra-school.firebaseapp.com",
  databaseURL:       "https://iqra-school-default-rtdb.firebaseio.com",
  projectId:         "iqra-school",
  storageBucket:     "iqra-school.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123"
};
```

Also add/edit teacher accounts in the same file:

```javascript
const TEACHER_ACCOUNTS = [
  {
    username: "admin",
    password: "iqra@admin",
    name:     "Muhammad Zohaib (Principal)",
    classes:  [1,2,3,4,5,6,7,8,9,10],
    role:     "admin"   // can access Boards + Weekly tabs
  },
  {
    username: "teacher1",
    password: "iqra000",
    name:     "Teacher Name",
    classes:  [1,2,3,4,5],    // which classes this teacher can edit
    role:     "teacher"
  }
];
```

### Step 3 — Upload to GitHub Pages (Free Hosting)

1. Create a free account at [github.com](https://github.com)
2. Click **New repository** → Name: `iqra-school` → Public → Create
3. Upload **all files** (keeping the folder structure intact)
4. Go to **Settings → Pages → Branch: main → / (root) → Save**
5. Wait ~2 minutes → Your live links will be:

| Link | Purpose |
|------|---------|
| `https://YOUR_USERNAME.github.io/iqra-school/` | Admin Panel |
| `https://YOUR_USERNAME.github.io/iqra-school/parent-portal.html` | Parent Portal |

---

## 👨‍💻 Teacher Accounts

Each teacher logs in with their username and password.

- **Admin account** sees all 4 tabs: Marks, Planner, Board Results, Weekly Tests
- **Teacher accounts** only see Marks and Planner
- Teachers can only **edit** the classes assigned to them (others show 🔒)
- All changes **sync instantly** to the Parent Portal in real time

---

## 📱 How Parents Use It

1. Share the `parent-portal.html` link with parents
2. Parents open it on any phone or computer — no login needed
3. They select their child's class from the dropdown
4. They see live marks, syllabus coverage, board results, weekly tests & toppers

---

## ✏️ Making Changes Later

**To add a new teacher:** Edit `js/firebase-config.js` → add entry to `TEACHER_ACCOUNTS` → commit & push to GitHub.

**To change exam dates:** Edit `js/data.js` → update the `TERMS` array → commit & push.

**To add/change subjects:** Edit `js/data.js` → update the `SUBS` object → commit & push.

---

## 🔒 Security Notes

- The admin panel link is **not publicly listed** — only share it with teachers
- Teacher passwords are stored in the config file — choose strong passwords
- Firebase free tier allows **1GB storage + 10GB/month transfer** — more than enough
- For higher security, enable Firebase Authentication (advanced setup)

---

## 📞 Contact

IQRA Public School and College, Dara Pezu  
Principal: Muhammad Zohaib  
📞 0347-1575196 / 0370-1575196  
Founded by Principal Abdul Qayyum Khan (Late) — 1999
