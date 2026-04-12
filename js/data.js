// ═══════════════════════════════════════════════════════════════
//  DEFAULT SETTINGS — all editable by admin in-app
// ═══════════════════════════════════════════════════════════════
const DEFAULT_SETTINGS = {
  sessionYear: "2025-26",
  totalMarks: 100,            // global fallback
  terms: [
    { id:'t1', label:'Term 1', exam:'2025-09-04', syllabus:'2025-07-18' },
    { id:'t2', label:'Term 2', exam:'2025-12-11', syllabus:'2025-11-14' },
    { id:'t3', label:'Term 3', exam:'2026-03-15', syllabus:'2026-02-06' }
  ],
  months: [
    { key:'apr25', label:'April', yr:2025, term:'t1' },
    { key:'may25', label:'May', yr:2025, term:'t1' },
    { key:'jun25', label:'June', yr:2025, term:'t1' },
    { key:'jul25', label:'July', yr:2025, term:'t1' },
    { key:'aug25', label:'August', yr:2025, term:'t1' },
    { key:'sep25', label:'September', yr:2025, term:'t1' },
    { key:'oct25', label:'October', yr:2025, term:'t2' },
    { key:'nov25', label:'November', yr:2025, term:'t2' },
    { key:'dec25', label:'December', yr:2025, term:'t2' },
    { key:'jan26', label:'January', yr:2026, term:'t3' },
    { key:'feb26', label:'February', yr:2026, term:'t3' },
    { key:'mar26', label:'March', yr:2026, term:'t3' }
  ],
  classes: {
    1:  { name:'Class 1',  subjects:['English','Maths','Urdu','Islamiat','General Knowledge','Grammar'], totalMarks:100 },
    2:  { name:'Class 2',  subjects:['English','Maths','Urdu','Islamiat','General Knowledge','Grammar'], totalMarks:100 },
    3:  { name:'Class 3',  subjects:['English','Maths','Urdu','Islamiat','General Knowledge','Grammar'], totalMarks:100 },
    4:  { name:'Class 4',  subjects:['English','Maths','Urdu','Islamiat','General Knowledge','Grammar'], totalMarks:100 },
    5:  { name:'Class 5',  subjects:['English','Urdu','Maths','Islamiat','Science','Social Studies','Grammar'], totalMarks:100 },
    6:  { name:'Class 6',  subjects:['English','Urdu','Maths','Islamiat','Science','History','Geography','Grammar'], totalMarks:100 },
    7:  { name:'Class 7',  subjects:['English','Urdu','Maths','Islamiat','Science','History','Geography','Grammar'], totalMarks:100 },
    8:  { 
        name:'Class 8',  
        subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], 
        subjectTotals: { 'English':75, 'Urdu':75, 'Maths':75, 'Physics':75, 'Chemistry':75, 'Biology':75, 'Islamiat':50, 'Pak Study':50, 'MQH':50 } 
    },
    9:  { 
        name:'Class 9',  
        subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], 
        subjectTotals: { 'English':75, 'Urdu':75, 'Maths':75, 'Physics':75, 'Chemistry':75, 'Biology':75, 'Islamiat':50, 'Pak Study':50, 'MQH':50 } 
    },
    10: { 
        name:'Class 10', 
        subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], 
        subjectTotals: { 'English':75, 'Urdu':75, 'Maths':75, 'Physics':75, 'Chemistry':75, 'Biology':75, 'Islamiat':50, 'Pak Study':50, 'MQH':50 } 
    }
  },
  school: {
    name: 'IQRA PUBLIC SCHOOL AND COLLEGE',
    city: 'DARA PEZU (Boys & Girls)',
    phone1: '03471575196',
    phone2: '03701575196',
    socials: [
      { label:'Facebook', url:'https://facebook.com/iqrapezu', icon:'📘' },
      { label:'TikTok', url:'https://tiktok.com/@ipscpezu', icon:'🎵' },
      { label:'WhatsApp', url:'https://wa.me/923471575196', icon:'💬' }
    ],
    founderName: 'Principal Abdul Qayyum Khan (Late)',
    founderDesc: 'IQRA is an educational institute founded by Principal Abdul Qayyum Khan (Late) in 1999.'
  }
};

// --- Live Variables ---
let SETTINGS = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
let TERMS     = SETTINGS.terms;
let MONTHS    = SETTINGS.months;
let CLASSES   = SETTINGS.classes;
let SCHOOL    = SETTINGS.school;

// --- Helper Functions ---
function getClassIds(){ return Object.keys(CLASSES).map(Number).sort((a,b)=>a-b); }
function getSubs(cls){ return CLASSES[cls]?.subjects || []; }

// Updated to handle both Class-level and Subject-level marks
function getClassTM(cls, subject = null) {
    const classData = CLASSES[cls];
    if (!classData) return 100;
    
    // Check if a specific subject total exists (for Class 8, 9, 10)
    if (subject && classData.subjectTotals && classData.subjectTotals[subject]) {
        return classData.subjectTotals[subject];
    }
    
    return parseFloat(classData.totalMarks || SETTINGS.totalMarks || 100);
}

// ── Shared Helpers ──────────────────────────────────────────
function esc(s){ return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function pct(o,t){ return (t&&t>0) ? ((o/t)*100).toFixed(1) : '0.0'; }

function grade(p){
  if(p===null||p===undefined||isNaN(p)) return {l:'—',c:'#8a7f72'};
  p=parseFloat(p);
  if(p>=90) return {l:'A+',c:'#16a34a'};
  if(p>=75) return {l:'A', c:'#65a30d'};
  if(p>=60) return {l:'B', c:'#d97706'};
  if(p>=45) return {l:'C', c:'#ea580c'};
  if(p>=33) return {l:'D', c:'#dc2626'};
  return {l:'F',c:'#9f1239'};
}
function gradeMsg(p){
  if(p==null) return '';
  p=parseFloat(p);
  if(p>=90) return 'Excellent 🌟';
  if(p>=75) return 'Very Good 👍';
  if(p>=60) return 'Good ✔';
  if(p>=45) return 'Satisfactory';
  if(p>=33) return 'Needs Improvement';
  return 'Needs Attention ⚠';
}
function getN(obj,keys){
  let c=obj;
  for(const k of keys){ if(!c||c[k]===undefined) return undefined; c=c[k]; }
  return c;
}
function setN(obj,keys,v){
  let c=obj;
  for(let i=0;i<keys.length-1;i++){
    if(!c[keys[i]]||typeof c[keys[i]]!=='object') c[keys[i]]={};
    c=c[keys[i]];
  }
  c[keys[keys.length-1]]=v;
}
function fbKey(s){ return String(s).replace(/[.#$\/\[\]\s]/g,'_'); }
function daysTo(ds){ const n=new Date(); n.setHours(0,0,0,0); return Math.ceil((new Date(ds)-n)/86400000); }
function fmtDate(ds){ return new Date(ds).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}); }
function todayKey(){ const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function fmtDay(k){ return new Date(k+'T00:00:00').toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'}); }

// Get ISO week's Monday→Sunday range
function getWeekRange(dateStr){
  const d = new Date(dateStr+'T00:00:00');
  const day = d.getDay(); // 0=Sun
  const diffToMon = (day===0)?-6:(1-day);
  const mon = new Date(d); mon.setDate(d.getDate()+diffToMon);
  const sun = new Date(mon); sun.setDate(mon.getDate()+6);
  function fmt(dt){ return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`; }
  return { start: fmt(mon), end: fmt(sun) };
}

// Generate array of date strings Mon→Sun
function getWeekDates(startStr){
  const dates=[];
  const start=new Date(startStr+'T00:00:00');
  for(let i=0;i<7;i++){
    const d=new Date(start); d.setDate(start.getDate()+i);
    dates.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`);
  }
  return dates;
}
