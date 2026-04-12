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
    { key:'may25', label:'May',        yr:2025, term:'t1' },
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
  }
};

// Live settings (loaded from Firebase)
let SETTINGS = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
let TERMS     = SETTINGS.terms;
let MONTHS    = SETTINGS.months;
let CLASSES   = SETTINGS.classes;
let SCHOOL    = SETTINGS.school;

// Updated function to handle board marks
function getMarksForSubject(classId, subjectName) {
    const classData = CLASSES[classId];
    if (!classData) return 100;

    // Use specific board marks (75/50) if they exist
    if (classData.subjectTotals && classData.subjectTotals[subjectName]) {
        return classData.subjectTotals[subjectName];
    }
    
    // Otherwise use class totalMarks or global fallback
    return classData.totalMarks || SETTINGS.totalMarks || 100;
}
