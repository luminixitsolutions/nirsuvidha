/**
 * One-off terminology pass: job-portal -> NRI service platform (UI strings).
 * Skips paths that are mostly CSS class tokens (heuristic: line has className and job-).
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..', 'src')

const PAIRS = [
  [/Remote Work Platform For Digital Team/g, 'Financial Super-App for Global Indians'],
  [/Best Job Search platform\s*<br\s*\/?>\s*Experience for you/gi, 'All-in-One NRI Services Platform'],
  [/Best Job Search platform<br\/>Experience for you/g, 'All-in-One NRI Services Platform'],
  [/Best Job Search platform/gi, 'All-in-One NRI Services Platform'],
  [/Find Job/g, 'Explore Services'],
  [/Find job/g, 'Explore services'],
  [/Explore More Jobs/g, 'Explore Services'],
  [/Apply Now/g, 'Get Started'],
  [/Save Job/g, 'Save'],
  [/Job Description/g, 'Service description'],
  [/Job Requirements/g, 'Requirements'],
  [/Related Jobs/g, 'Related Services'],
  [/Share This Job/g, 'Share this service'],
  [/Create Job Alert/g, 'Create service alert'],
  [/Job title/gi, 'Service title'],
  [/Job Title/g, 'Service title'],
  [/Job Category/g, 'Service Category'],
  [/Job Type/g, 'Service Type'],
  [/Job summary/gi, 'Service summary'],
  [/Job Fee Type/g, 'Fee type'],
  [/Job Lavel/g, 'Priority'],
  [/Post Jobs/g, 'Request a service'],
  [/Post jobs/g, 'Request a service'],
  [/My Resume/g, 'My profile'],
  [/Save Resume/g, 'Save profile'],
  [/Upload Resume/g, 'Upload documents'],
  [/Alert Jobs/g, 'Service alerts'],
  [/Found jobs/g, 'Matches'],
  [/Save Job Alert!/g, 'Save alert'],
  [/Corporate Business jobs/gi, 'Corporate & business services'],
  [/Hire Expert Candidates/g, 'Expert advisors'],
  [/Easy To Upload Resume/g, 'Secure document upload'],
  [/Trusted & Popular\s*<br\s*\/?>\s*Job Portal/gi, 'Trusted NRI<br/>service platform'],
  [/Trusted & Popular<br\/>Job Portal/g, 'Trusted NRI<br/>service platform'],
  [/5 Job Posted/g, '500+ services delivered'],
  [/10 Featured jobs/gi, '12+ service lines'],
  [/Hire with hourly basis/g, 'Expert-led support'],
  [/Job Search on Map/g, 'Service map'],
  [/Browse Map Jobs/g, 'Browse map services'],
  [/Single job Detail/g, 'Service detail'],
  [/Download Resume/g, 'Download profile'],
  [/Approve Candidate/g, 'Approve client'],
  [/Remove Candidate/g, 'Remove'],
  [/Following Employers/g, 'Following experts'],
  [/Candidate Grid/g, 'NRI client grid'],
  [/Candidate List/g, 'NRI client list'],
  [/Candidate Detail/g, 'Client profile'],
  [/Employer Grid/g, 'Expert grid'],
  [/Employer Detail/g, 'Expert profile'],
  [/Employer Dashboard/g, 'Expert dashboard'],
  [/Candidate Dashboard/g, 'Client dashboard'],
  [/Search Employers/g, 'Browse experts'],
  [/List Style Jobs/g, 'List style'],
  [/Grid Style Jobs/g, 'Grid style'],
  [/Job List/g, 'Service list'],
  [/Job Grid/g, 'Service grid'],
  [/Vacancy/gi, 'Availability'],
  [/Recruitment/gi, 'Onboarding'],
  [/Hiring/gi, 'Engagement'],
]

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    const st = fs.statSync(p)
    if (st.isDirectory()) walk(p, files)
    else if (/\.(tsx|ts|jsx|js)$/.test(name) && !p.includes('node_modules')) files.push(p)
  }
  return files
}

for (const file of walk(root)) {
  let s = fs.readFileSync(file, 'utf8')
  const orig = s
  for (const [re, to] of PAIRS) s = s.replace(re, to)
  if (s !== orig) fs.writeFileSync(file, s)
}
console.log('replace-service-copy done')
