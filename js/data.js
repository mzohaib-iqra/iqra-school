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
    { key:'apr25', label:'April',     yr:2025, term:'t1' },
    { key:'may25', label:'May',       yr:2025, term:'t1' },
    { key:'jun25', label:'June',      yr:2025, term:'t1' },
    { key:'jul25', label:'July',      yr:2025, term:'t1' },
    { key:'aug25', label:'August',    yr:2025, term:'t1' },
    { key:'sep25', label:'September', yr:2025, term:'t1' },
    { key:'oct25', label:'October',   yr:2025, term:'t2' },
    { key:'nov25', label:'November',  yr:2025, term:'t2' },
    { key:'dec25', label:'December',  yr:2025, term:'t2' },
    { key:'jan26', label:'January',   yr:2026, term:'t3' },
    { key:'feb26', label:'February',  yr:2026, term:'t3' },
    { key:'mar26', label:'March',     yr:2026, term:'t3' }
  ],
  classes: {
    // ── BOYS SECTION ──────────────────────────────────────
    1:  { name:'Class 1 (Boys)',   section:'boys', subjects:['English','Maths','Urdu','Islamiat','General Knowledge','Grammar'], totalMarks:100 },
    2:  { name:'Class 2 (Boys)',   section:'boys', subjects:['English','Maths','Urdu','Islamiat','General Knowledge','Grammar'], totalMarks:100 },
    3:  { name:'Class 3 (Boys)',   section:'boys', subjects:['English','Maths','Urdu','Islamiat','General Knowledge','Grammar'], totalMarks:100 },
    4:  { name:'Class 4 (Boys)',   section:'boys', subjects:['English','Maths','Urdu','Islamiat','General Knowledge','Grammar'], totalMarks:100 },
    5:  { name:'Class 5 (Boys)',   section:'boys', subjects:['English','Urdu','Maths','Islamiat','Science','Social Studies','Grammar'], totalMarks:100 },
    6:  { name:'Class 6 (Boys)',   section:'boys', subjects:['English','Urdu','Maths','Islamiat','Science','History','Geography','Grammar'], totalMarks:100 },
    7:  { name:'Class 7 (Boys)',   section:'boys', subjects:['English','Urdu','Maths','Islamiat','Science','History','Geography','Grammar'], totalMarks:100 },
    8:  { name:'Class 8 (Boys)',   section:'boys', subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], totalMarks:100, subjectMarks:{'English':75,'Urdu':75,'Maths':75,'Islamiat':75,'Pak Study':75,'MQH':75,'Physics':75,'Chemistry':75,'Biology':75} },
    9:  { name:'Class 9 (Boys)',   section:'boys', subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], totalMarks:100, subjectMarks:{'English':75,'Urdu':75,'Maths':75,'Islamiat':75,'Pak Study':75,'MQH':75,'Physics':75,'Chemistry':75,'Biology':75} },
    10: { name:'Class 10 (Boys)',  section:'boys', subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], totalMarks:100, subjectMarks:{'English':75,'Urdu':75,'Maths':75,'Islamiat':75,'Pak Study':75,'MQH':75,'Physics':75,'Chemistry':75,'Biology':75} },
    11: { name:'Class 11 (Boys)',  section:'boys', subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], totalMarks:100, subjectMarks:{'English':75,'Urdu':75,'Maths':75,'Islamiat':75,'Pak Study':75,'MQH':75,'Physics':75,'Chemistry':75,'Biology':75} },
    12: { name:'Class 12 (Boys)',  section:'boys', subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], totalMarks:100, subjectMarks:{'English':75,'Urdu':75,'Maths':75,'Islamiat':75,'Pak Study':75,'MQH':75,'Physics':75,'Chemistry':75,'Biology':75} },
    // ── GIRLS SECTION ─────────────────────────────────────
    104: { name:'Class 4 (Girls)',  section:'girls', subjects:['English','Maths','Urdu','Islamiat','General Knowledge','Grammar'], totalMarks:100 },
    105: { name:'Class 5 (Girls)',  section:'girls', subjects:['English','Urdu','Maths','Islamiat','Science','Social Studies','Grammar'], totalMarks:100 },
    106: { name:'Class 6 (Girls)',  section:'girls', subjects:['English','Urdu','Maths','Islamiat','Science','History','Geography','Grammar'], totalMarks:100 },
    107: { name:'Class 7 (Girls)',  section:'girls', subjects:['English','Urdu','Maths','Islamiat','Science','History','Geography','Grammar'], totalMarks:100 },
    108: { name:'Class 8 (Girls)',  section:'girls', subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], totalMarks:100, subjectMarks:{'English':75,'Urdu':75,'Maths':75,'Islamiat':75,'Pak Study':75,'MQH':75,'Physics':75,'Chemistry':75,'Biology':75} },
    109: { name:'Class 9 (Girls)',  section:'girls', subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], totalMarks:100, subjectMarks:{'English':75,'Urdu':75,'Maths':75,'Islamiat':75,'Pak Study':75,'MQH':75,'Physics':75,'Chemistry':75,'Biology':75} },
    110: { name:'Class 10 (Girls)', section:'girls', subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], totalMarks:100, subjectMarks:{'English':75,'Urdu':75,'Maths':75,'Islamiat':75,'Pak Study':75,'MQH':75,'Physics':75,'Chemistry':75,'Biology':75} },
    111: { name:'Class 11 (Girls)', section:'girls', subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], totalMarks:100, subjectMarks:{'English':75,'Urdu':75,'Maths':75,'Islamiat':75,'Pak Study':75,'MQH':75,'Physics':75,'Chemistry':75,'Biology':75} },
    112: { name:'Class 12 (Girls)', section:'girls', subjects:['English','Urdu','Maths','Islamiat','Pak Study','MQH','Physics','Chemistry','Biology'], totalMarks:100, subjectMarks:{'English':75,'Urdu':75,'Maths':75,'Islamiat':75,'Pak Study':75,'MQH':75,'Physics':75,'Chemistry':75,'Biology':75} }
  },
  school: {
    name:        'IQRA PUBLIC SCHOOL AND COLLEGE',
    city:        'DARA PEZU (Boys & Girls)',
    phone1:      '03471575196',
    phone2:      '03701575196',
    socials: [
      { label:'Facebook', url:'', icon:'📘' },
      { label:'TikTok',   url:'tiktok.com/ipscpezu', icon:'🎵' }
    ],
    founderName: 'Principal Abdul Qayyum Khan (Late)',
    founderDesc: 'IQRA is an educational institute founded by Principal Abdul Qayyum Khan (Late) in 1999. His vision of excellence in education lives on in every student.'
  },
  // ── Portal appearance ────────────────────────────────────
  portal: {
    fontSize:   'md',        // sm | md | lg | xl
    fontFamily: 'DM Sans',   // DM Sans | Georgia | Arial | Roboto
    accentColor:'#6366f1',   // any hex
    boldHeaders: true
  },
  // ── Planner year range ───────────────────────────────────
  plannerYear: { start: 2025, end: 2026 },
  // ── Class display order (array of class IDs) ─────────────
  classOrder: [],
  // ── Announcements ────────────────────────────────────────
  announcements: [],          // [{id, text, color, active, createdAt}]
  // ── School toppers (manual overrides) ────────────────────
  toppers: {
    // auto-calculated from term results, but can be overridden
    // format: { primary_boys: [{rank,name,father,cls,pct,override}], ... }
  }
};

// Live settings (loaded from Firebase)
let SETTINGS = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
let TERMS     = SETTINGS.terms;
let MONTHS    = SETTINGS.months;
let CLASSES   = SETTINGS.classes;
let SCHOOL    = SETTINGS.school;

function getClassIds(){ return Object.keys(CLASSES).map(Number).sort((a,b)=>a-b); }
function getSubs(cls){ return CLASSES[cls]?.subjects || []; }
function getClassTM(cls){ return parseFloat(CLASSES[cls]?.totalMarks || SETTINGS.totalMarks || 100); }
// Get total marks for a specific subject in a class (falls back to class total)
function getSubjectTM(cls, sub){
  const subMarks = CLASSES[cls]?.subjectMarks;
  if(subMarks && subMarks[sub] !== undefined) return parseFloat(subMarks[sub]);
  return getClassTM(cls);
}
// Check if class uses per-subject marks (class 8–12 and girls 8–12)
function hasPerSubjectMarks(cls){ return !!(CLASSES[cls]?.subjectMarks); }

// ── Class ordering ────────────────────────────────────────────
function getOrderedClassIds(){
  const all=getClassIds();
  const order=(SETTINGS.classOrder||[]).map(Number).filter(id=>all.includes(id));
  const rest=all.filter(id=>!order.includes(id));
  return [...order,...rest];
}

// ── School level groupings ────────────────────────────────────
function getSchoolLevel(cls){
  const c=CLASSES[cls];
  const section=c?.section||'boys';
  const num=cls>100?cls-100:cls;
  const level=num<=5?'primary':num<=8?'middle':'high';
  return {level,section,label:level.charAt(0).toUpperCase()+level.slice(1)};
}

// ── Generate months from planner year ──────────────────────────
function generateMonthsFromYear(startYear, endYear, terms){
  const sy=parseInt(startYear)||2025;
  const ey=parseInt(endYear)||sy+1;
  const allMonths=[
    {month:3,label:'April'},  {month:4,label:'May'},   {month:5,label:'June'},
    {month:6,label:'July'},   {month:7,label:'August'},{month:8,label:'September'},
    {month:9,label:'October'},{month:10,label:'November'},{month:11,label:'December'},
    {month:0,label:'January'},{month:1,label:'February'},{month:2,label:'March'}
  ];
  const t=terms||TERMS;
  const t1End=t[0]?.syllabus||`${sy}-07-18`;
  const t2End=t[1]?.syllabus||`${sy}-11-14`;
  return allMonths.map((m,i)=>{
    const yr=m.month>=3?sy:ey;
    const mon=String(m.month+1).padStart(2,'0');
    const key=(m.label.slice(0,3).toLowerCase())+(String(yr).slice(2));
    // Assign term based on month position
    const term=i<=5?'t1':i<=8?'t2':'t3';
    return{key,label:m.label,yr,term};
  });
}

const TC   = { t1:'#f97316', t2:'#3b82f6', t3:'#22c55e' };
const TLbl = { t1:'Term 1',  t2:'Term 2',  t3:'Term 3'  };

// ── Helpers ──────────────────────────────────────────────────
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

// Get school week range: Monday→Saturday (school closed Sunday)
function getWeekRange(dateStr){
  const d = new Date(dateStr+'T00:00:00');
  const day = d.getDay(); // 0=Sun,1=Mon,...,6=Sat
  // If Sunday, move to next Monday
  const diffToMon = (day===0)?1:(1-day);
  const mon = new Date(d); mon.setDate(d.getDate()+diffToMon);
  const sat = new Date(mon); sat.setDate(mon.getDate()+5); // Mon+5=Sat
  function fmt(dt){ return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`; }
  return { start: fmt(mon), end: fmt(sat) };
}

// Get only FULLY COMPLETED Mon-Sat weeks in a month
// A week is "complete" if its Saturday is before today
function getCompletedWeeksInMonth(year, month){ // month 0-indexed
  const today = new Date(); today.setHours(0,0,0,0);
  const allWeeks = getWeeksInMonth(year, month);
  // A week is complete if its last date (Saturday) < today
  const completed = allWeeks.filter(wk => {
    const lastDate = wk.dates[wk.dates.length - 1];
    const sat = new Date(lastDate + 'T00:00:00');
    return sat < today;
  });
  // If no week is complete yet (e.g. first day of month), use last 4 completed weeks from previous months
  if(completed.length === 0){
    // Walk back up to 4 weeks from today
    const fallback = [];
    const d = new Date(today);
    // Go to last Saturday
    while(d.getDay() !== 6) d.setDate(d.getDate() - 1);
    for(let w = 0; w < 4; w++){
      const sat = new Date(d);
      const mon = new Date(d); mon.setDate(d.getDate() - 5);
      function fmt(dt){ return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`; }
      const dates = [];
      for(let i = 0; i < 6; i++){
        const dd = new Date(mon); dd.setDate(mon.getDate() + i);
        dates.push(fmt(dd));
      }
      fallback.unshift({ start: fmt(mon), end: fmt(sat), dates });
      d.setDate(d.getDate() - 7);
    }
    return fallback;
  }
  return completed;
}

// Generate Mon→Sat (6 days, no Sunday)
function getWeekDates(startStr){
  const dates=[];
  const start=new Date(startStr+'T00:00:00');
  for(let i=0;i<6;i++){ // 6 days: Mon-Sat
    const d=new Date(start); d.setDate(start.getDate()+i);
    dates.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`);
  }
  return dates;
}

// Get all Mon-Sat weeks in a given month
function getWeeksInMonth(year, month){ // month 0-indexed
  const weeks=[];
  const firstDay=new Date(year,month,1);
  const lastDay=new Date(year,month+1,0);
  // Find first Monday
  let cur=new Date(firstDay);
  const dow=cur.getDay();
  if(dow!==1) cur.setDate(cur.getDate()+(dow===0?1:8-dow));
  while(cur<=lastDay){
    const mon=new Date(cur);
    const sat=new Date(cur); sat.setDate(cur.getDate()+5);
    function fmt(dt){return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;}
    weeks.push({start:fmt(mon),end:fmt(sat<=lastDay?sat:lastDay),dates:[]});
    for(let i=0;i<6;i++){const d=new Date(mon);d.setDate(mon.getDate()+i);if(d<=lastDay)weeks[weeks.length-1].dates.push(fmt(d));}
    cur.setDate(cur.getDate()+7);
  }
  return weeks;
}
