import { VisualVariant } from '@/app/components/ProductVisual';

export interface ProductData {
  id: string;
  name: string;
  category: string;
  hero: {
    title: string;
    subtitle: string;
  };
  keyCapabilities: string[];
  workflow: {
    step: number;
    title: string;
    desc: string;
  }[];
  outcomes: {
    value: string;
    label: string;
  }[];
  visualVariant: VisualVariant;
}

export const productsData: Record<string, ProductData> = {
  'shortage-assistant': {
    id: 'shortage-assistant',
    name: "Shortage Assistant",
    category: "Workforce Planning",
    hero: {
      title: "Predict tomorrow’s workforce gaps before they hurt your business",
      subtitle: "An AI engine that predicts labour shortages, skills gaps, and future hiring demand with 94% accuracy."
    },
    keyCapabilities: [
      "AI-driven labour shortage prediction",
      "Skills gap analysis across all departments",
      "Future hiring demand forecasting based on revenue models",
      "Risk scoring for critical roles"
    ],
    workflow: [
      { step: 1, title: "Data Ingestion", desc: "Connects to HRIS, ATS, and market trend data." },
      { step: 2, title: "AI Modeling", desc: "Analyzes attrition trends and growth targets." },
      { step: 3, title: "Risk Dashboard", desc: "Visualizes gaps and alerts HR leaders." },
      { step: 4, title: "Action Plan", desc: "Auto-generates hiring requisitions to close gaps." }
    ],
    outcomes: [
      { value: "30%", label: "Reduced Talent Risk" },
      { value: "2x", label: "Better Hiring Timing" },
      { value: "15%", label: "Lower Recruitment Costs" }
    ],
    visualVariant: 'shortage_assistant'
  },
  'ai-workforce-planner': {
    id: 'ai-workforce-planner',
    name: "AI Workforce Planner",
    category: "Workforce Planning",
    hero: {
      title: "Scenario-based workforce planning built for uncertainty",
      subtitle: "Model headcount, costs, and organizational structures under different business scenarios."
    },
    keyCapabilities: [
      "Multi-scenario planning (Growth, Freeze, M&A)",
      "Headcount vs Budget modeling",
      "Department impact analysis",
      "Automatic cost forecasting"
    ],
    workflow: [
      { step: 1, title: "Define Scenarios", desc: "Create base, optimistic, and pessimistic cases." },
      { step: 2, title: "Adjust Variables", desc: "Tweak hiring velocity, attrition, and salaries." },
      { step: 3, title: "Analyze Impact", desc: "See real-time budget and headcount projections." },
      { step: 4, title: "Execute", desc: "Push approved plan to Finance and Recruiting." }
    ],
    outcomes: [
      { value: "60%", label: "Faster Planning Cycles" },
      { value: "99%", label: "Budget Accuracy" },
      { value: "100%", label: "Stakeholder Alignment" }
    ],
    visualVariant: 'ai_planner'
  },
  'hirely-ai': {
    id: 'hirely-ai',
    name: "HirelyAI",
    category: "Talent Acquisition",
    hero: {
      title: "The AI engine that finds your next top performer",
      subtitle: "Automated screening, ranking, and bias checking to supercharge your recruitment team."
    },
    keyCapabilities: [
      "AI application screening & ranking",
      "Instant CV parsing & skill extraction",
      "Bias-aware shortlisting algorithms",
      "Compliance-safe decision support"
    ],
    workflow: [
      { step: 1, title: "Application", desc: "Candidates apply via careers page or LinkedIn." },
      { step: 2, title: "AI Analysis", desc: "HirelyAI parses CVs and matches against job spec." },
      { step: 3, title: "Ranking", desc: "Recruiters see a prioritized list of top matches." },
      { step: 4, title: "Interview", desc: "One-click invite for the best candidates." }
    ],
    outcomes: [
      { value: "40%", label: "Less Screening Time" },
      { value: "25%", label: "Higher Quality of Hire" },
      { value: "0", label: "Detected Bias Incidents" }
    ],
    visualVariant: 'hirely_ai'
  },
  'recruit-flow': {
    id: 'recruit-flow',
    name: "RecruitFlow",
    category: "Talent Acquisition",
    hero: {
      title: "A modern ATS that recruiters actually love using",
      subtitle: "Streamline your entire hiring pipeline from job posting to offer acceptance."
    },
    keyCapabilities: [
      "Multi-board job distribution",
      "Visual pipeline management (Kanban)",
      "Automated candidate communication",
      "Agency portal & vendor management"
    ],
    workflow: [
      { step: 1, title: "Create Job", desc: "Draft with AI writing assistant." },
      { step: 2, title: "Post", desc: "Distribute to LinkedIn, Indeed, and Glassdoor." },
      { step: 3, title: "Manage", desc: "Drag-and-drop candidates through stages." },
      { step: 4, title: "Hire", desc: "Generate offers and sync to Onboarding." }
    ],
    outcomes: [
      { value: "18 Days", label: "Average Time-to-Hire" },
      { value: "50+", label: "Job Boards Supported" },
      { value: "90%", label: "Candidate Satisfaction" }
    ],
    visualVariant: 'recruit_flow'
  },
  'interview-iq': {
    id: 'interview-iq',
    name: "InterviewIQ",
    category: "Talent Acquisition",
    hero: {
      title: "Make every interview count with AI intelligence",
      subtitle: "Structured scoring, automated scheduling, and real-time interview assistance."
    },
    keyCapabilities: [
      "Automated panel scheduling",
      "AI-transcribed interview notes",
      "Structured competency scoring",
      "Collaborative feedback consolidation"
    ],
    workflow: [
      { step: 1, title: "Schedule", desc: "Auto-find times that work for everyone." },
      { step: 2, title: "Conduct", desc: "Use structured guides and AI note-taking." },
      { step: 3, title: "Score", desc: "Rate candidates on predefined skills." },
      { step: 4, title: "Decide", desc: "Compare panel feedback side-by-side." }
    ],
    outcomes: [
      { value: "5hrs", label: "Saved per Hire" },
      { value: "100%", label: "Structured Process" },
      { value: "4.8/5", label: "Interviewer Rating" }
    ],
    visualVariant: 'interview_iq'
  },
  'onboard-pro': {
    id: 'onboard-pro',
    name: "OnboardPro",
    category: "Onboarding & People",
    hero: {
      title: "The perfect Day 1, delivered automatically",
      subtitle: "From contract signing to equipment provisioning, streamline the new hire journey."
    },
    keyCapabilities: [
      "Digital contract signing (eSignature)",
      "Automated IT provisioning workflows",
      "Right-to-work verification (UK)",
      "Interactive new hire portal"
    ],
    workflow: [
      { step: 1, title: "Offer Accepted", desc: "Trigger onboarding workflow automatically." },
      { step: 2, title: "Pre-boarding", desc: "Collect docs and ship equipment." },
      { step: 3, title: "Day 1", desc: "Welcome email and access provisioning." },
      { step: 4, title: "Ramp Up", desc: "30-60-90 day check-ins." }
    ],
    outcomes: [
      { value: "100%", label: "Compliance on Day 1" },
      { value: "4.9/5", label: "New Hire Experience" },
      { value: "-20%", label: "Early Attrition" }
    ],
    visualVariant: 'onboard_pro'
  },
  'people-hub': {
    id: 'people-hub',
    name: "PeopleHub",
    category: "Onboarding & People",
    hero: {
      title: "Your single source of truth for people data",
      subtitle: "Secure employee profiles, document management, and self-service tools."
    },
    keyCapabilities: [
      "Centralized employee records",
      "Dynamic organizational charts",
      "Secure document vault",
      "Employee self-service portal"
    ],
    workflow: [
      { step: 1, title: "Store", desc: "Keep all data in one secure, GDPR-compliant place." },
      { step: 2, title: "Manage", desc: "Handle changes to roles, pay, and status." },
      { step: 3, title: "Visualize", desc: "See reporting lines and team structures." },
      { step: 4, title: "Empower", desc: "Let employees update their own details." }
    ],
    outcomes: [
      { value: "Zero", label: "Spreadsheets" },
      { value: "100%", label: "Data Accuracy" },
      { value: "24/7", label: "Self-Service Access" }
    ],
    visualVariant: 'people_hub'
  },
  'perform-edge': {
    id: 'perform-edge',
    name: "PerformEdge",
    category: "Performance & Development",
    hero: {
      title: "Turn performance management into a competitive advantage",
      subtitle: "Align individual goals with company strategy through continuous feedback."
    },
    keyCapabilities: [
      "OKR & Goal setting",
      "Continuous 360° feedback loops",
      "Automated performance review cycles",
      "Calibration & 9-box grids"
    ],
    workflow: [
      { step: 1, title: "Align", desc: "Cascade company goals to individuals." },
      { step: 2, title: "Check-in", desc: "Weekly 1:1s and continuous feedback." },
      { step: 3, title: "Review", desc: "Quarterly or bi-annual formal reviews." },
      { step: 4, title: "Develop", desc: "Create development plans based on gaps." }
    ],
    outcomes: [
      { value: "+32%", label: "Goal Achievement" },
      { value: "High", label: "Employee Engagement" },
      { value: "Fair", label: "Merit Cycles" }
    ],
    visualVariant: 'perform_edge'
  },
  'skill-forge': {
    id: 'skill-forge',
    name: "SkillForge",
    category: "Performance & Development",
    hero: {
      title: "Close the skills gap with precision learning",
      subtitle: "Map skills, assign learning paths, and track certifications."
    },
    keyCapabilities: [
      "Dynamic skills matrix",
      "Personalized learning paths",
      "LMS integration & course tracking",
      "Certification expiry management"
    ],
    workflow: [
      { step: 1, title: "Assess", desc: "Identify current skill levels vs role needs." },
      { step: 2, title: "Plan", desc: "Assign targeted courses and projects." },
      { step: 3, title: "Learn", desc: "Employees complete training." },
      { step: 4, title: "Certify", desc: "Update skills profile upon completion." }
    ],
    outcomes: [
      { value: "40%", label: "Faster Upskilling" },
      { value: "100%", label: "Compliance Training" },
      { value: "Top", label: "Talent Retention" }
    ],
    visualVariant: 'skill_forge'
  },
  'career-path-ai': {
    id: 'career-path-ai',
    name: "CareerPath AI",
    category: "Performance & Development",
    hero: {
      title: "Show every employee a future at your company",
      subtitle: "Visualize career ladders, identify successors, and improve internal mobility."
    },
    keyCapabilities: [
      "Interactive career path visualization",
      "Succession planning for key roles",
      "High-potential (HiPo) identification",
      "Internal marketplace matching"
    ],
    workflow: [
      { step: 1, title: "Map", desc: "Define roles and required competencies." },
      { step: 2, title: "Visualize", desc: "Employees see possible next steps." },
      { step: 3, title: "Match", desc: "AI suggests internal candidates for open roles." },
      { step: 4, title: "Promote", desc: "Fill roles from within." }
    ],
    outcomes: [
      { value: "+25%", label: "Internal Mobility" },
      { value: "2x", label: "Succession Readiness" },
      { value: "Lower", label: "Recruitment Spend" }
    ],
    visualVariant: 'career_path'
  },
  'pay-core-uk': {
    id: 'pay-core-uk',
    name: "PayCore UK",
    category: "Payroll & Compliance",
    hero: {
      title: "Fearless UK payroll, fully automated",
      subtitle: "HMRC recognized payroll that handles Tax, NI, and Auto-enrolment effortlessly."
    },
    keyCapabilities: [
      "Automated UK Payroll Processing",
      "Real-Time Information (RTI) Submissions",
      "Pension Auto-enrolment handling",
      "Global payroll connectors"
    ],
    workflow: [
      { step: 1, title: "Sync", desc: "Pull hours and changes from HR/Time." },
      { step: 2, title: "Calculate", desc: "Auto-compute Tax, NI, and adjustments." },
      { step: 3, title: "Review", desc: "Validate variance reports and warnings." },
      { step: 4, title: "Pay", desc: "BACS files and payslips distributed instantly." }
    ],
    outcomes: [
      { value: "100%", label: "HMRC Compliant" },
      { value: "0", label: "Payroll Errors" },
      { value: "Min", label: "Admin Time" }
    ],
    visualVariant: 'pay_core'
  },
  'time-track-pro': {
    id: 'time-track-pro',
    name: "TimeTrack Pro",
    category: "Payroll & Compliance",
    hero: {
      title: "Master time, attendance, and scheduling",
      subtitle: "Handle complex shifts, overtime rules, and leave management in one place."
    },
    keyCapabilities: [
      "Digital timesheets & approvals",
      "Shift planning & rostering",
      "Complex overtime rule engine",
      "Leave & absence management"
    ],
    workflow: [
      { step: 1, title: "Plan", desc: "Create schedules and assign shifts." },
      { step: 2, title: "Track", desc: "Employees clock in via app or web." },
      { step: 3, title: "Approve", desc: "Managers review exceptions and OT." },
      { step: 4, title: "Export", desc: "Push final hours to PayCore." }
    ],
    outcomes: [
      { value: "-15%", label: "Overtime Costs" },
      { value: "100%", label: "Shift Coverage" },
      { value: "Zero", label: "Time Theft" }
    ],
    visualVariant: 'time_track'
  },
  'compliance-guard': {
    id: 'compliance-guard',
    name: "ComplianceGuard",
    category: "Payroll & Compliance",
    hero: {
      title: "Stay on the right side of the law, automatically",
      subtitle: "Proactive monitoring for GDPR, Right-to-Work, and employment law changes."
    },
    keyCapabilities: [
      "GDPR Data retention automation",
      "Employment law alert system",
      "Policy management & acknowledgment",
      "Right-to-Work verification tracking"
    ],
    workflow: [
      { step: 1, title: "Monitor", desc: "Continuous scan of employee data." },
      { step: 2, title: "Alert", desc: "Notify of missing docs or expiring visas." },
      { step: 3, title: "Update", desc: "Roll out new policies for signature." },
      { step: 4, title: "Audit", desc: "Generate reports for regulators." }
    ],
    outcomes: [
      { value: "100%", label: "Audit Readiness" },
      { value: "Zero", label: "Fines Risk" },
      { value: "Auto", label: "Policy Distribution" }
    ],
    visualVariant: 'compliance_guard'
  },
  'people-intelligence-cloud': {
    id: 'people-intelligence-cloud',
    name: "People Intelligence Cloud",
    category: "Analytics",
    hero: {
      title: "Unlock the hidden value in your people data",
      subtitle: "Unified analytics, attrition forecasting, and executive insights."
    },
    keyCapabilities: [
      "Unified cross-module analytics",
      "Predictive attrition models",
      "Diversity, Equity & Inclusion (DEI) dashboards",
      "Executive board reporting"
    ],
    workflow: [
      { step: 1, title: "Aggregate", desc: "Pull data from all HR modules." },
      { step: 2, title: "Analyze", desc: "Apply AI models to find trends." },
      { step: 3, title: "Visualize", desc: "Present in role-based dashboards." },
      { step: 4, title: "Predict", desc: "Forecast future workforce trends." }
    ],
    outcomes: [
      { value: "Real-time", label: "Decision Making" },
      { value: "Deep", label: "Strategic Insight" },
      { value: "Clear", label: "ROI Tracking" }
    ],
    visualVariant: 'people_intel'
  }
};
