# 🏫 IQRA Public School & College — Live Tracker v2

**IQRA Public School and College, Dara Pezu (Boys & Girls)**
Principal: Muhammad Zohaib | Since 1999

---

## 📁 Project Structure

```
iqra-school/
├── index.html              ← Admin panel (teachers)
├── parent-portal.html      ← Parent portal (share this link)
├── logo.png                ← School logo
├── css/
│   ├── admin.css           ← Admin styles
│   └── portal.css          ← Parent portal styles
└── js/
    ├── firebase-config.js  ← ⚠ FILL THIS IN FIRST
    └── data.js             ← Shared data & helpers
```

---

## 🚀 Setup (15 min total)

### 1. Firebase Project
1. Go to https://console.firebase.google.com → Add project
2. Build → Realtime Database → Create Database → Test mode
3. ⚙ Project Settings → Your Apps → Add Web App → Copy config

### 2. Edit `js/firebase-config.js`
Paste your Firebase config values and set up teacher accounts.

### 3. Upload to GitHub Pages
1. github.com → New repo → `iqra-school` → Public
2. Upload all files (keeping folders intact)
3. Settings → Pages → Branch: main → Save
4. Links: `https://USERNAME.github.io/iqra-school/`

---

## ✨ What's New in v2

### Admin Panel (`index.html`)
| Tab | Features |
|-----|---------|
| 📊 Marks | Enter obtained marks per subject/term. Global total marks setting. Auto-calculates %. No auto-save — click 💾 Save Changes. |
| 👥 Students | Add student list per class. Term-wise result entry with ranking. |
| 📅 Planner | Monthly syllabus planner. Click class to expand. Add topics per subject. |
| 📔 Daily Diary | Add daily homework per subject per class. Pick any date. |
| 🏆 Boards | Board exam results for Classes 9–12. |
| 📝 Weekly | Weekly test results. Auto PASS/FAIL at 60%. |
| ⚙ Settings | **Admin only** — Edit exam dates, syllabus deadlines, session year. |

### Parent Portal (`parent-portal.html`)
| Tab | Features |
|-----|---------|
| 📊 Progress | Class marks with % calculated from Obtained/Total. |
| 📋 Term Results | Full class ranking per term with all student marks. |
| 📔 Daily Diary | View daily homework by date. |
| 🏆 Boards | Board result rankings. |
| 📝 Weekly | Weekly test results with PASS/FAIL and toppers. |
| ⭐ Toppers | Overall Matric and FSc toppers by average %. |

---

## 🔑 Teacher Roles

- **Admin (Principal)**: All tabs including Settings, Boards, Weekly
- **Teacher**: Marks, Students, Planner, Diary for assigned classes only
- **Locked classes** show 🔒 — view only

## 💾 Save Button

Changes are **NOT auto-saved**. Make all edits then click the **💾 Save Changes** button in the top bar. This prevents accidental saves and keeps Firebase writes efficient.

---

## 📞 Contact
IQRA Public School and College, Dara Pezu
Principal: Muhammad Zohaib · 📞 0347-1575196 / 0370-1575196
Founded by Principal Abdul Qayyum Khan (Late) — 1999
