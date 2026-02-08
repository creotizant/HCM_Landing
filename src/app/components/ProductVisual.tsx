import React from 'react';
import {
   BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart,
   PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ZAxis
} from 'recharts';
import {
   Users, AlertTriangle, TrendingUp, Calendar, CheckCircle, FileText,
   Shield, DollarSign, Clock, UserPlus, Search, Filter, MoreHorizontal,
   ChevronRight, Briefcase, Award, Zap, Layout
} from 'lucide-react';
import { cn } from '@/app/lib/utils';

// --- Types ---
export type VisualVariant =
   | 'shortage_assistant'
   | 'ai_planner'
   | 'hirely_ai'
   | 'recruit_flow'
   | 'interview_iq'
   | 'onboard_pro'
   | 'people_hub'
   | 'perform_edge'
   | 'skill_forge'
   | 'career_path'
   | 'pay_core'
   | 'time_track'
   | 'compliance_guard'
   | 'people_intel';

interface ProductVisualProps {
   variant: VisualVariant;
   className?: string;
}

// --- Shared Components ---
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
   <div className={cn("bg-white rounded-xl border border-slate-200 shadow-sm p-4", className)}>
      {children}
   </div>
);

const Badge = ({ children, color = "indigo" }: { children: React.ReactNode, color?: string }) => (
   <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${color}-100 text-${color}-700`}>
      {children}
   </span>
);

// --- Visual Implementations ---

export function ProductVisual({ variant, className }: ProductVisualProps) {

   // 1. Shortage Assistant
   if (variant === 'shortage_assistant') {
      const data = [
         { name: 'Engineering', shortage: 12, risk: 85 },
         { name: 'Sales', shortage: 8, risk: 65 },
         { name: 'Product', shortage: 4, risk: 45 },
         { name: 'Support', shortage: 15, risk: 92 },
         { name: 'Marketing', shortage: 2, risk: 20 },
      ];

      return (
         <div className={cn("bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-3 gap-6", className)}>
            <div className="col-span-1 lg:col-span-2 space-y-6">
               <Card>
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center">
                     <AlertTriangle className="w-4 h-4 text-amber-500 mr-2" /> Critical Shortage Risks (Next 6 Months)
                  </h4>
                  <div className="h-64">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} layout="vertical">
                           <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
                           <XAxis type="number" />
                           <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 12 }} />
                           <Tooltip cursor={{ fill: 'transparent' }} />
                           <Bar dataKey="risk" name="Risk Score" fill="#f59e0b" radius={[0, 4, 4, 0]} barSize={20} />
                           <Bar dataKey="shortage" name="Headcount Gap" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                     </ResponsiveContainer>
                  </div>
               </Card>

               <Card>
                  <h4 className="font-semibold text-slate-800 mb-4">Skills Gap Heatmap</h4>
                  <div className="grid grid-cols-5 gap-1 text-[10px] sm:text-xs text-center">
                     <div className="col-span-1"></div>
                     <div className="font-medium text-slate-500">React</div>
                     <div className="font-medium text-slate-500">Python</div>
                     <div className="font-medium text-slate-500">Sales</div>
                     <div className="font-medium text-slate-500">Mgmt</div>

                     {['Snr Dev', 'Jr Dev', 'AE', 'VP'].map((role) => (
                        <React.Fragment key={role}>
                           <div className="font-medium text-slate-500 text-left pl-2 py-2">{role}</div>
                           <div className="bg-emerald-100 rounded m-0.5" />
                           <div className="bg-rose-200 rounded m-0.5" />
                           <div className="bg-slate-100 rounded m-0.5" />
                           <div className="bg-amber-100 rounded m-0.5" />
                        </React.Fragment>
                     ))}
                  </div>
               </Card>
            </div>

            <div className="col-span-1 space-y-4">
               <Card className="bg-indigo-600 text-white border-indigo-500">
                  <div className="text-sm font-medium opacity-80 mb-1">Predicted Attrition</div>
                  <div className="text-3xl font-bold">14.2%</div>
                  <div className="text-xs mt-2 flex items-center text-indigo-200">
                     <TrendingUp className="w-3 h-3 mr-1" /> +2.1% vs last Q
                  </div>
               </Card>
               <Card>
                  <h4 className="font-semibold text-slate-800 text-sm mb-3">Action Plan</h4>
                  <ul className="space-y-3">
                     <li className="flex items-start text-xs text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        Open 5 reqs for Senior Backend Engineers
                     </li>
                     <li className="flex items-start text-xs text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        Launch internal upskilling program
                     </li>
                     <li className="flex items-start text-xs text-slate-600">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                        Review compensation for Support leads
                     </li>
                  </ul>
               </Card>
            </div>
         </div>
      );
   }

   // 2. AI Workforce Planner
   if (variant === 'ai_planner') {
      const data = [
         { month: 'Jan', current: 100, growth: 105, freeze: 100 },
         { month: 'Feb', current: 102, growth: 112, freeze: 99 },
         { month: 'Mar', current: 105, growth: 125, freeze: 98 },
         { month: 'Apr', current: 108, growth: 135, freeze: 97 },
         { month: 'May', current: 110, growth: 148, freeze: 96 },
      ];

      return (
         <div className={cn("bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200", className)}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
               <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-md shadow-sm">Scenario A: High Growth</button>
                  <button className="px-3 py-1.5 bg-white text-slate-600 border border-slate-200 text-xs font-medium rounded-md">Scenario B: Freeze</button>
                  <button className="px-3 py-1.5 bg-white text-slate-600 border border-slate-200 text-xs font-medium rounded-md">Scenario C: Restructure</button>
               </div>
               <div className="text-right">
                  <div className="text-xs text-slate-500">Projected Budget Impact</div>
                  <div className="text-lg font-bold text-slate-800">£12.4M <span className="text-rose-500 text-xs font-normal">(+15%)</span></div>
               </div>
            </div>

            <div className="h-64 bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} />
                     <XAxis dataKey="month" />
                     <YAxis />
                     <Tooltip />
                     <Area type="monotone" dataKey="growth" stroke="#4f46e5" fill="#e0e7ff" name="Growth Scenario" />
                     <Area type="monotone" dataKey="freeze" stroke="#94a3b8" fill="transparent" strokeDasharray="5 5" name="Freeze Scenario" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               {['Engineering', 'Sales', 'Operations'].map((dept, i) => (
                  <Card key={dept} className="flex flex-col justify-center items-center py-6">
                     <div className="text-sm font-medium text-slate-500 mb-1">{dept} Headcount</div>
                     <div className="text-2xl font-bold text-slate-900">+{10 + i * 5}</div>
                     <div className="text-xs text-indigo-600 mt-1">Approved</div>
                  </Card>
               ))}
            </div>
         </div>
      );
   }

   // 3. Hirely AI
   if (variant === 'hirely_ai') {
      return (
         <div className={cn("bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 flex flex-col h-auto sm:h-[500px]", className)}>
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-slate-800">Top Candidates: Senior Product Designer</h3>
               <Badge color="emerald">AI Screening Active</Badge>
            </div>

            <div className="space-y-3 overflow-auto pr-2">
               {[
                  { name: "Sarah Jenkins", match: 98, skills: ["Figma", "React", "User Research"], status: "Highly Recommended" },
                  { name: "David Chen", match: 92, skills: ["Sketch", "Prototyping"], status: "Recommended" },
                  { name: "Maria Rodriguez", match: 88, skills: ["UI Design", "Adobe XD"], status: "Good Fit" },
                  { name: "James Smith", match: 76, skills: ["Graphic Design"], status: "Potential Mismatch" },
               ].map((candidate, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-indigo-400 cursor-pointer transition-colors group">
                     <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                           {candidate.name.charAt(0)}
                        </div>
                        <div>
                           <div className="font-semibold text-slate-900">{candidate.name}</div>
                           <div className="text-xs text-slate-500 flex space-x-2 mt-1">
                              {candidate.skills.map(s => <span key={s} className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">{s}</span>)}
                           </div>
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="text-2xl font-bold text-indigo-600">{candidate.match}%</div>
                        <div className="text-xs text-slate-400">Match Score</div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
               <div className="flex items-center justify-between bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                  <div className="flex items-center">
                     <Shield className="w-5 h-5 text-indigo-600 mr-2" />
                     <div>
                        <div className="text-sm font-semibold text-indigo-900">Bias Detection Audit</div>
                        <div className="text-xs text-indigo-700">No gender or age bias detected in shortlisting.</div>
                     </div>
                  </div>
                  <button className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded">View Report</button>
               </div>
            </div>
         </div>
      );
   }

   // 4. RecruitFlow
   if (variant === 'recruit_flow') {
      return (
         <div className={cn("bg-slate-100 p-4 rounded-xl border border-slate-200 h-auto sm:h-[500px] overflow-hidden flex flex-col", className)}>
            <div className="flex items-center justify-between mb-4">
               <h3 className="font-bold text-slate-700">Pipeline: Q1 Engineering Hiring</h3>
               <button className="bg-indigo-600 text-white px-3 py-1.5 rounded text-xs">New Job</button>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 overflow-y-auto sm:overflow-x-auto pb-2">
               {[
                  { title: "Applied", count: 24, items: ["Fe E.", "Be E.", "Sr. Dev"] },
                  { title: "Screening", count: 12, items: ["Int. Dev", "Jr. Dev"] },
                  { title: "Interview", count: 5, items: ["Tech Lead"] },
                  { title: "Offer", count: 2, items: ["CTO"] }
               ].map((col) => (
                  <div key={col.title} className="bg-slate-200/50 rounded-lg p-3 flex flex-col h-full">
                     <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-600 text-sm">{col.title}</span>
                        <span className="bg-white px-2 py-0.5 rounded-full text-xs text-slate-500 font-medium">{col.count}</span>
                     </div>
                     <div className="space-y-2 flex-1 overflow-y-auto">
                        {col.items.map((item, i) => (
                           <div key={i} className="bg-white p-3 rounded shadow-sm border border-slate-200 text-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                              <div className="font-medium text-slate-800">Candidate #{i + 10}</div>
                              <div className="text-xs text-slate-400 mt-1">{item}</div>
                              <div className="mt-2 flex items-center justify-between">
                                 <div className="w-5 h-5 rounded-full bg-indigo-100" />
                                 <div className="text-xs text-slate-300">2d ago</div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      );
   }

   // 5. Interview IQ
   if (variant === 'interview_iq') {
      return (
         <div className={cn("bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-3 gap-6", className)}>
            <div className="col-span-1 lg:col-span-2">
               <Card className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-4">Live Interview: Front-End Lead</h4>
                  <div className="bg-slate-900 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden mb-4">
                     <div className="text-white flex flex-col items-center">
                        <Users className="w-12 h-12 mb-2 opacity-50" />
                        <span>Video Call Interface</span>
                     </div>
                     <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded text-white text-xs">
                        Recording & Transcribing...
                     </div>
                  </div>
                  <div className="flex space-x-2">
                     <div className="flex-1 bg-indigo-50 p-3 rounded text-xs text-indigo-900">
                        <span className="font-bold">AI Note:</span> Candidate demonstrated strong knowledge of React hooks but struggled with CSS Grid concepts.
                     </div>
                  </div>
               </Card>
            </div>
            <div className="col-span-1 space-y-4">
               <Card>
                  <h4 className="font-semibold text-slate-800 mb-3 text-sm">Scorecard</h4>
                  <div className="space-y-3">
                     {[
                        { label: "Technical Skills", score: 4 },
                        { label: "Communication", score: 5 },
                        { label: "Culture Fit", score: 4 },
                        { label: "Problem Solving", score: 3 },
                     ].map((crit) => (
                        <div key={crit.label}>
                           <div className="flex justify-between text-xs mb-1">
                              <span className="text-slate-600">{crit.label}</span>
                              <span className="font-bold text-slate-900">{crit.score}/5</span>
                           </div>
                           <div className="flex space-x-1">
                              {[1, 2, 3, 4, 5].map(star => (
                                 <div key={star} className={`h-1.5 flex-1 rounded-full ${star <= crit.score ? 'bg-indigo-500' : 'bg-slate-200'}`} />
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </Card>
               <Card className="bg-slate-800 text-white border-slate-700">
                  <h4 className="font-semibold mb-2 text-sm">Upcoming</h4>
                  <div className="text-xs text-slate-300 space-y-2">
                     <div className="flex items-center"><Clock className="w-3 h-3 mr-2" /> 14:00 - Sys Design</div>
                     <div className="flex items-center"><Clock className="w-3 h-3 mr-2" /> 15:30 - Culture Fit</div>
                  </div>
               </Card>
            </div>
         </div>
      );
   }

   // 6. OnboardPro
   if (variant === 'onboard_pro') {
      return (
         <div className={cn("bg-white p-4 sm:p-6 rounded-xl border border-slate-200 flex flex-col h-auto lg:h-[500px]", className)}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
               <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-white shadow-sm" />
               <div>
                  <h3 className="text-xl font-bold text-slate-900">Welcome, Alex!</h3>
                  <p className="text-slate-500">Software Engineer • London Office</p>
               </div>
               <div className="w-full sm:ml-auto sm:text-right mt-2 sm:mt-0 flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-end">
                  <div className="text-2xl font-bold text-emerald-600">65%</div>
                  <div className="text-xs text-slate-400">Onboarding Complete</div>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Your Checklist</h4>
                  <div className="space-y-3">
                     {[
                        { task: "Sign Employment Contract", done: true },
                        { task: "Upload Right-to-Work Docs", done: true },
                        { task: "Setup Payroll Details", done: true },
                        { task: "IT Equipment Selection", done: false },
                        { task: "Compliance Training (GDPR)", done: false },
                        { task: "Team Introduction", done: false },
                     ].map((item, i) => (
                        <div key={i} className="flex items-center p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                           <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center border ${item.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300'}`}>
                              {item.done && <CheckCircle className="w-3 h-3" />}
                           </div>
                           <span className={`text-sm ${item.done ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{item.task}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-4">
                  <Card>
                     <h4 className="font-semibold text-slate-800 mb-3 text-sm">Provisioning Status</h4>
                     <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100">
                        <span className="text-slate-600">MacBook Pro M4</span>
                        <span className="text-emerald-600 font-medium">Shipped</span>
                     </div>
                     <div className="flex items-center justify-between text-sm py-2">
                        <span className="text-slate-600">Office Keycard</span>
                        <span className="text-amber-600 font-medium">Processing</span>
                     </div>
                  </Card>
                  <Card className="bg-indigo-50 border-indigo-100">
                     <h4 className="font-semibold text-indigo-900 mb-2 text-sm">Need Help?</h4>
                     <p className="text-xs text-indigo-700 mb-3">Your onboarding buddy is <span className="font-bold">Sarah J.</span></p>
                     <button className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded">Chat now</button>
                  </Card>
               </div>
            </div>
         </div>
      );
   }

   // 7. PeopleHub
   if (variant === 'people_hub') {
      return (
         <div className={cn("bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 h-auto", className)}>
            <div className="flex flex-col lg:flex-row gap-6 h-full">
               <div className="w-full lg:w-1/3 space-y-4">
                  <Card className="text-center py-6">
                     <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4" />
                     <h3 className="font-bold text-slate-900">Jordan Lee</h3>
                     <p className="text-sm text-slate-500">Director of Product</p>
                     <div className="flex justify-center space-x-2 mt-4">
                        <button className="p-2 bg-indigo-50 text-indigo-600 rounded-full"><FileText className="w-4 h-4" /></button>
                        <button className="p-2 bg-indigo-50 text-indigo-600 rounded-full"><Calendar className="w-4 h-4" /></button>
                     </div>
                  </Card>
                  <Card>
                     <h4 className="font-semibold text-sm mb-3">Direct Reports</h4>
                     <div className="space-y-2">
                        {[1, 2, 3, 4].map(i => (
                           <div key={i} className="flex items-center space-x-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
                              <div className="w-8 h-8 rounded-full bg-slate-200" />
                              <div className="text-sm font-medium text-slate-700">Team Member {i}</div>
                           </div>
                        ))}
                     </div>
                  </Card>
               </div>

               <div className="w-full lg:w-2/3 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                     <Card className="flex flex-col items-center justify-center py-6 cursor-pointer hover:border-indigo-400">
                        <FileText className="w-8 h-8 text-indigo-600 mb-2" />
                        <span className="font-medium text-slate-700">Documents</span>
                     </Card>
                     <Card className="flex flex-col items-center justify-center py-6 cursor-pointer hover:border-indigo-400">
                        <DollarSign className="w-8 h-8 text-emerald-600 mb-2" />
                        <span className="font-medium text-slate-700">Payslips</span>
                     </Card>
                     <Card className="flex flex-col items-center justify-center py-6 cursor-pointer hover:border-indigo-400">
                        <Calendar className="w-8 h-8 text-rose-500 mb-2" />
                        <span className="font-medium text-slate-700">Time Off</span>
                     </Card>
                     <Card className="flex flex-col items-center justify-center py-6 cursor-pointer hover:border-indigo-400">
                        <Award className="w-8 h-8 text-amber-500 mb-2" />
                        <span className="font-medium text-slate-700">Benefits</span>
                     </Card>
                  </div>
                  <Card>
                     <h4 className="font-semibold text-sm mb-2">Organization Structure</h4>
                     <div className="h-32 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs">
                        Interactive Org Chart Visualization
                     </div>
                  </Card>
               </div>
            </div>
         </div>
      );
   }

   // 8. PerformEdge
   if (variant === 'perform_edge') {
      return (
         <div className={cn("bg-white p-4 sm:p-6 rounded-xl border border-slate-200 h-auto sm:h-[500px]", className)}>
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-slate-900">Q1 Performance Review</h3>
               <div className="text-sm text-slate-500">Due in 4 days</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <div className="col-span-1 lg:col-span-2 space-y-6">
                  <Card>
                     <h4 className="font-semibold text-slate-800 mb-4 text-sm">Goals Progress</h4>
                     <div className="space-y-4">
                        {[
                           { goal: "Launch Mobile App v2", progress: 85 },
                           { goal: "Hire 3 Senior Engineers", progress: 33 },
                           { goal: "Reduce AWS Costs by 10%", progress: 100 },
                        ].map((g, i) => (
                           <div key={i}>
                              <div className="flex justify-between text-sm mb-1">
                                 <span className="text-slate-700 font-medium">{g.goal}</span>
                                 <span className="text-slate-500">{g.progress}%</span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full">
                                 <div className={`h-full rounded-full ${g.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`} style={{ width: `${g.progress}%` }} />
                              </div>
                           </div>
                        ))}
                     </div>
                  </Card>
                  <Card>
                     <h4 className="font-semibold text-slate-800 mb-4 text-sm">Feedback 360</h4>
                     <div className="flex space-x-4">
                        <div className="flex-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                           <div className="text-xs text-slate-400 mb-1">Manager</div>
                           <p className="text-sm text-slate-700">"Excellent leadership on the migration project..."</p>
                        </div>
                        <div className="flex-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                           <div className="text-xs text-slate-400 mb-1">Peer</div>
                           <p className="text-sm text-slate-700">"Great collaborator but needs to be more punctual..."</p>
                        </div>
                     </div>
                  </Card>
               </div>

               <div className="col-span-1">
                  <Card className="h-full flex flex-col items-center justify-center text-center">
                     <div className="w-24 h-24 rounded-full border-4 border-indigo-100 flex items-center justify-center mb-4">
                        <span className="text-3xl font-bold text-indigo-600">4.2</span>
                     </div>
                     <h4 className="font-bold text-slate-800">Exceeds Expectations</h4>
                     <p className="text-xs text-slate-500 mt-2">Overall Rating Prediction</p>

                     <div className="mt-8 w-full">
                        <div className="text-left text-xs font-semibold text-slate-600 mb-2">Promotion Readiness</div>
                        <div className="flex space-x-1">
                           <div className="h-2 flex-1 bg-emerald-500 rounded" />
                           <div className="h-2 flex-1 bg-emerald-500 rounded" />
                           <div className="h-2 flex-1 bg-emerald-500 rounded" />
                           <div className="h-2 flex-1 bg-slate-200 rounded" />
                        </div>
                        <div className="text-right text-xs text-emerald-600 mt-1">High</div>
                     </div>
                  </Card>
               </div>
            </div>
         </div>
      );
   }

   // 9. SkillForge
   if (variant === 'skill_forge') {
      const data = [
         { subject: 'Leadership', A: 120, fullMark: 150 },
         { subject: 'Technical', A: 98, fullMark: 150 },
         { subject: 'Product', A: 86, fullMark: 150 },
         { subject: 'Design', A: 99, fullMark: 150 },
         { subject: 'Sales', A: 65, fullMark: 150 },
         { subject: 'Compliance', A: 140, fullMark: 150 },
      ];

      return (
         <div className={cn("bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto sm:h-[500px]", className)}>
            <Card className="flex items-center justify-center relative">
               <h4 className="absolute top-4 left-4 font-semibold text-slate-800">Team Skills Matrix</h4>
               <ResponsiveContainer width="100%" height="80%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                     <PolarGrid />
                     <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                     <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                     <Radar name="Team A" dataKey="A" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.4} />
                     <Tooltip />
                  </RadarChart>
               </ResponsiveContainer>
            </Card>

            <div className="space-y-4">
               <Card>
                  <h4 className="font-semibold text-slate-800 mb-3 text-sm">Recommended Learning Paths</h4>
                  <div className="space-y-3">
                     {[
                        { title: "Advanced React Patterns", dur: "4h 20m", prog: 0 },
                        { title: "Enterprise Security Basics", dur: "1h 30m", prog: 45 },
                        { title: "Effective Mentorship", dur: "2h 15m", prog: 0 },
                     ].map((c, i) => (
                        <div key={i} className="flex items-center justify-between p-2 border border-slate-100 rounded hover:bg-slate-50">
                           <div className="flex items-center">
                              <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center text-indigo-600 mr-3">
                                 <Play className="w-4 h-4" />
                              </div>
                              <div>
                                 <div className="text-sm font-medium text-slate-800">{c.title}</div>
                                 <div className="text-xs text-slate-500">{c.dur}</div>
                              </div>
                           </div>
                           {c.prog > 0 ? (
                              <div className="w-16 h-1 bg-slate-200 rounded-full overflow-hidden">
                                 <div className="h-full bg-indigo-600" style={{ width: `${c.prog}%` }} />
                              </div>
                           ) : (
                              <button className="text-xs font-medium text-indigo-600">Start</button>
                           )}
                        </div>
                     ))}
                  </div>
               </Card>
               <Card className="flex justify-between items-center">
                  <div>
                     <div className="text-sm font-semibold text-slate-700">Certifications</div>
                     <div className="text-xs text-slate-500">2 Expiring Soon</div>
                  </div>
                  <div className="flex -space-x-2">
                     <div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-amber-600 text-xs font-bold">AWS</div>
                     <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600 text-xs font-bold">CIPD</div>
                  </div>
               </Card>
            </div>
         </div>
      );
   }

   // 10. CareerPath AI
   if (variant === 'career_path') {
      return (
         <div className={cn("bg-white p-6 rounded-xl border border-slate-200 h-auto sm:h-[500px] flex flex-col", className)}>
            <div className="mb-6">
               <h3 className="font-bold text-slate-900">Career Explorer: Senior Developer</h3>
               <p className="text-slate-500 text-sm">AI-suggested paths based on your skills and company needs.</p>
            </div>

            <div className="flex-1 flex items-center justify-center relative py-8 sm:py-0">
               {/* Visual Tree */}
               <div className="flex flex-col sm:flex-row items-center gap-8 sm:space-x-8">
                  <div className="flex flex-col items-center">
                     <div className="w-32 p-3 bg-indigo-600 text-white rounded-lg text-center shadow-lg ring-4 ring-indigo-100">
                        <div className="font-bold text-sm">Current Role</div>
                        <div className="text-xs opacity-80">Snr Developer</div>
                     </div>
                  </div>

                  <div className="h-8 w-0.5 sm:h-0.5 sm:w-16 bg-slate-300" />

                  <div className="flex flex-row sm:flex-col gap-4 sm:space-y-8">
                     <div className="relative group cursor-pointer">
                        <div className="hidden sm:block absolute -left-16 top-1/2 w-16 h-0.5 bg-slate-300 transform -translate-y-1/2 origin-left rotate-[-25deg]" />
                        <div className="w-40 p-4 bg-white border border-slate-200 hover:border-indigo-500 rounded-lg shadow-sm transition-all group-hover:shadow-md">
                           <div className="font-bold text-slate-800 text-sm">Staff Engineer</div>
                           <div className="text-xs text-emerald-600 mt-1">92% Match</div>
                           <div className="text-xs text-slate-400 mt-2">Technical Path</div>
                        </div>
                     </div>

                     <div className="relative group cursor-pointer">
                        <div className="hidden sm:block absolute -left-16 top-1/2 w-16 h-0.5 bg-slate-300 transform -translate-y-1/2 origin-left rotate-[25deg]" />
                        <div className="w-40 p-4 bg-white border border-slate-200 hover:border-indigo-500 rounded-lg shadow-sm transition-all group-hover:shadow-md">
                           <div className="font-bold text-slate-800 text-sm">Eng Manager</div>
                           <div className="text-xs text-amber-600 mt-1">74% Match</div>
                           <div className="text-xs text-slate-400 mt-2">Management Path</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-6 bg-slate-50 p-4 rounded-lg flex justify-between items-center">
               <div>
                  <div className="font-semibold text-slate-800 text-sm">Succession Planning Alert</div>
                  <div className="text-xs text-slate-500">You are identified as a potential successor for: <span className="font-medium text-slate-700">Team Lead (Alpha)</span></div>
               </div>
               <button className="text-xs border border-indigo-600 text-indigo-600 px-3 py-1.5 rounded bg-white">View Gap Analysis</button>
            </div>
         </div>
      );
   }

   // 11. PayCore UK
   if (variant === 'pay_core') {
      return (
         <div className={cn("bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 flex flex-col h-auto sm:h-[500px]", className)}>
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-slate-900">March 2026 Payroll Run</h3>
               <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">Draft Mode</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
               <Card>
                  <div className="text-xs text-slate-500">Total Net Pay</div>
                  <div className="text-xl font-bold text-slate-900">£1.42M</div>
               </Card>
               <Card>
                  <div className="text-xs text-slate-500">HMRC (NI/Tax)</div>
                  <div className="text-xl font-bold text-slate-900">£480k</div>
               </Card>
               <Card>
                  <div className="text-xs text-slate-500">Pension</div>
                  <div className="text-xl font-bold text-slate-900">£120k</div>
               </Card>
               <Card>
                  <div className="text-xs text-slate-500">Employees</div>
                  <div className="text-xl font-bold text-slate-900">428</div>
               </Card>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto flex-1 mb-4">
               <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                     <tr>
                        <th className="px-4 py-3 font-medium">Employee</th>
                        <th className="px-4 py-3 font-medium">Gross</th>
                        <th className="px-4 py-3 font-medium">Tax</th>
                        <th className="px-4 py-3 font-medium">NI</th>
                        <th className="px-4 py-3 font-medium">Net</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                     {[1, 2, 3, 4, 5].map(i => (
                        <tr key={i} className="hover:bg-slate-50">
                           <td className="px-4 py-2">John Doe {i}</td>
                           <td className="px-4 py-2">£4,166.66</td>
                           <td className="px-4 py-2 text-rose-600">-£640.20</td>
                           <td className="px-4 py-2 text-rose-600">-£240.10</td>
                           <td className="px-4 py-2 font-medium">£3,286.36</td>
                           <td className="px-4 py-2"><CheckCircle className="w-4 h-4 text-emerald-500" /></td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>

            <div className="flex justify-between items-center">
               <div className="text-xs text-slate-500 flex items-center">
                  <Shield className="w-4 h-4 mr-1 text-emerald-600" />
                  RTI Submission Ready
               </div>
               <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-indigo-700">Approve & Submit to HMRC</button>
            </div>
         </div>
      );
   }

   // 12. TimeTrack Pro
   if (variant === 'time_track') {
      return (
         <div className={cn("bg-white p-4 sm:p-6 rounded-xl border border-slate-200 h-auto sm:h-[500px]", className)}>
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-slate-900">Team Schedule: Week 12</h3>
               <div className="flex space-x-2">
                  <button className="p-1 border rounded hover:bg-slate-50"><ArrowLeft className="w-4 h-4" /></button>
                  <button className="p-1 border rounded hover:bg-slate-50"><ArrowRight className="w-4 h-4" /></button>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 h-full overflow-y-auto">
               <div className="col-span-1 pt-0 sm:pt-8 flex sm:block gap-4 sm:gap-0 space-y-0 sm:space-y-4 mb-4 sm:mb-0 overflow-x-auto sm:overflow-visible">
                  {['Sarah', 'Mike', 'Jessica', 'David', 'Emma'].map(name => (
                     <div key={name} className="h-12 flex items-center font-medium text-sm text-slate-700 pl-2">{name}</div>
                  ))}
               </div>
               {[1, 2, 3, 4, 5].map(day => (
                  <div key={day} className="col-span-1 bg-slate-50 rounded-lg p-2">
                     <div className="text-center text-xs font-semibold text-slate-500 mb-2">Mon {day + 10}</div>
                     <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((slot, i) => (
                           <div key={i} className="h-12 relative">
                              {Math.random() > 0.3 ? (
                                 <div className={`absolute inset-x-0 top-1 bottom-1 rounded bg-indigo-100 border border-indigo-200 flex items-center justify-center text-xs text-indigo-700 ${Math.random() > 0.8 ? 'bg-amber-100 border-amber-200 text-amber-700' : ''}`}>
                                    09:00 - 17:00
                                 </div>
                              ) : (
                                 <div className="absolute inset-x-0 top-1 bottom-1 flex items-center justify-center text-xs text-slate-300">
                                    OFF
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      );
   }

   // 13. ComplianceGuard
   if (variant === 'compliance_guard') {
      return (
         <div className={cn("bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto sm:h-[500px]", className)}>
            <div className="space-y-4">
               <Card className="bg-emerald-50 border-emerald-100">
                  <div className="flex items-center mb-2">
                     <Shield className="w-6 h-6 text-emerald-600 mr-2" />
                     <h3 className="font-bold text-emerald-900">System Healthy</h3>
                  </div>
                  <p className="text-sm text-emerald-700">All 428 employees have valid Right-to-Work documentation. GDPR retention policies are active.</p>
               </Card>

               <Card>
                  <h4 className="font-semibold text-slate-800 mb-4 text-sm">Policy Acknowledgement</h4>
                  <div className="space-y-3">
                     {[
                        { name: "Employee Handbook 2026", signed: 98 },
                        { name: "IT Security Policy", signed: 85 },
                        { name: "Remote Work Guidelines", signed: 100 },
                        { name: "Code of Conduct", signed: 92 },
                     ].map((p, i) => (
                        <div key={i}>
                           <div className="flex justify-between text-xs mb-1">
                              <span className="text-slate-700">{p.name}</span>
                              <span className={`${p.signed < 90 ? 'text-amber-600' : 'text-emerald-600'}`}>{p.signed}%</span>
                           </div>
                           <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                              <div className={`h-full ${p.signed < 90 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${p.signed}%` }} />
                           </div>
                        </div>
                     ))}
                  </div>
               </Card>
            </div>

            <div className="space-y-4">
               <Card>
                  <h4 className="font-semibold text-slate-800 mb-3 text-sm">Regulatory Watch (UK)</h4>
                  <div className="space-y-3">
                     <div className="flex items-start p-2 bg-amber-50 rounded border border-amber-100">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                           <div className="text-xs font-bold text-amber-800">Minimum Wage Increase</div>
                           <p className="text-xs text-amber-700">Effective April 1st. 12 employees below new threshold.</p>
                        </div>
                     </div>
                     <div className="flex items-start p-2 bg-slate-50 rounded border border-slate-200">
                        <FileText className="w-4 h-4 text-slate-500 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                           <div className="text-xs font-bold text-slate-700">P60 Generation</div>
                           <p className="text-xs text-slate-500">Scheduled for May 20th.</p>
                        </div>
                     </div>
                  </div>
               </Card>
               <Card>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Audit Trail</h4>
                  <div className="text-xs text-slate-500 space-y-2">
                     <div className="flex justify-between"><span>User J.Doe accessed salary data</span><span className="text-slate-400">10m ago</span></div>
                     <div className="flex justify-between"><span>Policy updated by Admin</span><span className="text-slate-400">2h ago</span></div>
                     <div className="flex justify-between"><span>Export to CSV (Payroll)</span><span className="text-slate-400">1d ago</span></div>
                  </div>
               </Card>
            </div>
         </div>
      );
   }

   // 14. People Intelligence Cloud
   if (variant === 'people_intel') {
      return (
         <div className={cn("bg-white p-6 rounded-xl border border-slate-200 grid grid-cols-2 gap-6 h-[500px]", className)}>
            <Card className="col-span-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-0">
               <div className="flex justify-between items-start">
                  <div>
                     <h3 className="font-bold text-lg">Executive Summary</h3>
                     <p className="text-indigo-100 text-sm">Workforce health is optimal. Attrition risk has decreased by 2%.</p>
                  </div>
                  <div className="text-right">
                     <div className="text-3xl font-bold">86/100</div>
                     <div className="text-xs text-indigo-200">Organizational Health Score</div>
                  </div>
               </div>
            </Card>

            <Card>
               <h4 className="font-semibold text-slate-800 mb-4 text-sm">Headcount vs Revenue</h4>
               <div className="h-40 bg-slate-50 rounded flex items-center justify-center text-xs text-slate-400">
                  <ResponsiveContainer width="100%" height="100%">
                     <LineChart data={[
                        { name: 'Q1', rev: 10, hc: 5 },
                        { name: 'Q2', rev: 12, hc: 6 },
                        { name: 'Q3', rev: 18, hc: 8 },
                        { name: 'Q4', rev: 24, hc: 12 },
                     ]}>
                        <XAxis dataKey="name" hide />
                        <Line type="monotone" dataKey="rev" stroke="#4f46e5" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="hc" stroke="#10b981" strokeWidth={2} dot={false} />
                        <Tooltip />
                     </LineChart>
                  </ResponsiveContainer>
               </div>
            </Card>

            <Card>
               <h4 className="font-semibold text-slate-800 mb-4 text-sm">Diversity & Inclusion</h4>
               <div className="flex items-center justify-center h-40">
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie data={[{ name: 'F', value: 45 }, { name: 'M', value: 50 }, { name: 'NB', value: 5 }]} outerRadius={50} dataKey="value">
                           <Cell fill="#818cf8" />
                           <Cell fill="#34d399" />
                           <Cell fill="#fbbf24" />
                        </Pie>
                     </PieChart>
                  </ResponsiveContainer>
               </div>
            </Card>
         </div>
      );
   }

   // Fallback
   return (
      <div className={cn("bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-center justify-center h-64", className)}>
         <span className="text-slate-400">Dashboard Visual Unavailable</span>
      </div>
   );
}

// Helper icons
function Play({ className }: { className?: string }) {
   return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
   );
}
function ArrowLeft({ className }: { className?: string }) {
   return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
   );
}
function ArrowRight({ className }: { className?: string }) {
   return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
   );
}
