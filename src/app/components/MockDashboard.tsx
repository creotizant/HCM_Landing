import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { MoreHorizontal, Search, Bell, User, ArrowUpRight, ArrowDownRight, Filter, Download } from 'lucide-react';
import { cn } from '@/app/lib/utils';

type DashboardVariant = 'executive' | 'hiring' | 'workforce' | 'payroll' | 'performance' | 'compliance';

interface MockDashboardProps {
  variant: DashboardVariant;
  className?: string;
  compact?: boolean; // For smaller previews
}

const COLORS = ['#4f46e5', '#818cf8', '#c7d2fe', '#e0e7ff', '#312e81'];

const dataHeadcount = [
  { name: 'Jan', value: 1240 },
  { name: 'Feb', value: 1255 },
  { name: 'Mar', value: 1280 },
  { name: 'Apr', value: 1310 },
  { name: 'May', value: 1340 },
  { name: 'Jun', value: 1325 },
];

const dataHiring = [
  { name: 'Applied', value: 450 },
  { name: 'Screening', value: 210 },
  { name: 'Interview', value: 85 },
  { name: 'Offer', value: 32 },
  { name: 'Hired', value: 24 },
];

const dataPerformance = [
  { name: 'Marketing', score: 88, employees: 45 },
  { name: 'Sales', score: 92, employees: 120 },
  { name: 'Engineering', score: 85, employees: 200 },
  { name: 'Product', score: 89, employees: 35 },
  { name: 'HR', score: 94, employees: 15 },
];

const dataPayroll = [
  { name: 'Q1', salary: 4500000, bonus: 200000 },
  { name: 'Q2', salary: 4600000, bonus: 250000 },
  { name: 'Q3', salary: 4750000, bonus: 180000 },
  { name: 'Q4', salary: 4900000, bonus: 850000 },
];

export function MockDashboard({ variant, className, compact = false }: MockDashboardProps) {

  const Sidebar = () => (
    <div className="w-16 bg-slate-900 flex-shrink-0 flex flex-col items-center py-4 space-y-4">
      <div className="w-8 h-8 bg-indigo-500 rounded-md mb-4" />
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="w-8 h-8 rounded-md bg-slate-800/50 hover:bg-slate-700 transition-colors" />
      ))}
    </div>
  );

  const Header = ({ title }: { title: string }) => (
    <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <h3 className="font-semibold text-slate-700">{title}</h3>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-2 top-1.5" />
          <div className="w-48 h-7 bg-slate-100 rounded-md pl-8 text-xs flex items-center text-slate-400">Search...</div>
        </div>
        <Bell className="w-4 h-4 text-slate-400" />
        <User className="w-4 h-4 text-slate-400" />
      </div>
    </div>
  );

  const StatCard = ({ label, value, trend, positive }: { label: string, value: string, trend: string, positive: boolean }) => (
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs text-slate-500 font-medium">{label}</span>
        <MoreHorizontal className="w-4 h-4 text-slate-300" />
      </div>
      <div className="text-2xl font-bold text-slate-900 mb-1">{value}</div>
      <div className={cn("text-xs flex items-center font-medium", positive ? "text-emerald-600" : "text-rose-600")}>
        {positive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
        {trend} vs last month
      </div>
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'executive':
        return (
          <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCard label="Total Headcount" value="1,342" trend="2.4%" positive={true} />
            <StatCard label="Attrition Rate" value="4.2%" trend="0.8%" positive={false} />
            <StatCard label="Time to Fill" value="28 Days" trend="12%" positive={true} />
            <StatCard label="eNPS Score" value="42" trend="5pts" positive={true} />

            <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-semibold text-slate-800">Global Headcount Trend</h4>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs bg-slate-100 rounded-md text-slate-600">Yearly</button>
                  <button className="px-3 py-1 text-xs text-slate-400">Quarterly</button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dataHeadcount}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1} />
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="col-span-1 bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-semibold text-slate-800 mb-4">Diversity Distribution</h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Female', value: 45 },
                        { name: 'Male', value: 52 },
                        { name: 'Other', value: 3 },
                      ]}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {COLORS.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-xs text-slate-600"><span>Female</span><span>45%</span></div>
                <div className="flex justify-between text-xs text-slate-600"><span>Male</span><span>52%</span></div>
              </div>
            </div>
          </div>
        );

      case 'hiring':
        return (
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
              <StatCard label="Open Roles" value="24" trend="2" positive={true} />
              <StatCard label="Active Candidates" value="1,204" trend="12%" positive={true} />
              <StatCard label="Interviews this week" value="48" trend="5%" positive={true} />
              <StatCard label="Offer Acceptance" value="92%" trend="1%" positive={true} />
            </div>

            <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-semibold text-slate-800 mb-6">Recruitment Funnel</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataHiring} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={80} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px' }} />
                    <Bar dataKey="value" fill="#4f46e5" radius={[0, 4, 4, 0]} barSize={24} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-semibold text-slate-800 mb-4">Candidate Sources</h4>
              <div className="space-y-4">
                {[
                  { name: 'LinkedIn', val: 65 },
                  { name: 'Referrals', val: 20 },
                  { name: 'Careers Page', val: 10 },
                  { name: 'Agencies', val: 5 },
                ].map((source) => (
                  <div key={source.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 font-medium">{source.name}</span>
                      <span className="text-slate-500">{source.val}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${source.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="p-4 sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-800">Performance Overview Q1 2026</h2>
              <div className="flex space-x-2">
                <button className="flex items-center px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 shadow-sm">
                  <Filter className="w-3 h-3 mr-2" /> Filter
                </button>
                <button className="flex items-center px-3 py-2 bg-indigo-600 text-white rounded-lg text-xs font-medium shadow-sm">
                  <Download className="w-3 h-3 mr-2" /> Export
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Avg Score</th>
                    <th className="px-6 py-4">Employees</th>
                    <th className="px-6 py-4">High Performers</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {dataPerformance.map((dept, i) => (
                    <tr key={dept.name} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-medium text-slate-900">{dept.name}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-slate-700">{dept.score}%</span>
                          <div className="w-16 bg-slate-100 rounded-full h-1.5">
                            <div
                              className={cn("h-1.5 rounded-full", dept.score > 90 ? "bg-emerald-500" : "bg-indigo-500")}
                              style={{ width: `${dept.score}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{dept.employees}</td>
                      <td className="px-6 py-4 text-slate-600">{Math.floor(dept.employees * 0.2)}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          dept.score > 90 ? "bg-emerald-100 text-emerald-700" : "bg-indigo-100 text-indigo-700"
                        )}>
                          On Track
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-6 flex items-center justify-center h-full text-slate-400">
            Select a dashboard view
          </div>
        );
    }
  };

  if (compact) {
    // A simplified view for previews
    return (
      <div className={cn("bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200 select-none pointer-events-none", className)}>
        <div className="h-8 bg-slate-50 border-b border-slate-200 px-3 flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-rose-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
        </div>
        <div className="p-4">
          {/* Abstracted chart representation */}
          <div className="flex justify-between mb-4">
            <div className="space-y-1">
              <div className="w-16 h-3 bg-slate-100 rounded" />
              <div className="w-10 h-5 bg-slate-200 rounded" />
            </div>
            <div className="w-8 h-8 rounded-full bg-indigo-50" />
          </div>
          <div className="flex items-end space-x-2 h-24 mt-4">
            <div className="w-1/5 bg-indigo-100 rounded-t h-[40%]" />
            <div className="w-1/5 bg-indigo-200 rounded-t h-[70%]" />
            <div className="w-1/5 bg-indigo-500 rounded-t h-[55%]" />
            <div className="w-1/5 bg-indigo-300 rounded-t h-[85%]" />
            <div className="w-1/5 bg-indigo-400 rounded-t h-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col rounded-xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200 bg-slate-50", className)}>
      <div className="flex flex-1 overflow-hidden min-h-[500px] h-full">
        <div className="hidden sm:block">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <Header title={variant === 'executive' ? 'Executive Overview' : variant === 'hiring' ? 'Talent Acquisition' : 'Performance Mgmt'} />
          <div className="flex-1 overflow-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
