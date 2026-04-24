'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Area,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Card } from '@/components/admin/ui/Card'

/* Vibrant, accessible palette (brand gold kept for one slice) */
const PIE = ['#0ea5e9', '#8b5cf6', '#c9a34e', '#10b981', '#f43f5e', '#6366f1', '#f59e0b']

const tipStyle = {
  borderRadius: 12,
  border: '1px solid #e2e8f0',
  background: 'rgba(255,255,255,0.96)',
  boxShadow: '0 8px 30px rgba(15,23,42,0.08)',
} as const

type LinePt = { name: string; leads: number }
type BarPt = { name: string; value: number }
type PiePt = { name: string; value: number }

type Props = {
  lineData: LinePt[]
  barData: BarPt[]
  pieData: PiePt[]
}

export function LeadActivityCharts({ lineData, barData, pieData }: Props) {
  const hasLine = lineData.some((d) => d.leads > 0)
  const hasPie = pieData.length > 0

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card
        className="overflow-hidden border-t-4 border-t-sky-500 shadow-md"
        title="Leads over time"
        description="New leads by day (last 14 days)"
        noPadding
        revealIndex={0}
      >
        <div className="h-72 w-full bg-gradient-to-b from-sky-50/30 to-white p-4 pt-2 sm:p-6">
          {!hasLine ? (
            <p className="flex h-full items-center justify-center text-sm text-slate-500">
              No lead dates in this window — activity will show here.
            </p>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={lineData} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="leadsArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  allowDecimals={false}
                  width={36}
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={tipStyle}
                  labelStyle={{ color: '#0f172a', fontWeight: 600, fontSize: 12 }}
                  formatter={(v) => [v, 'Leads']}
                />
                <Area
                  type="monotone"
                  dataKey="leads"
                  name="Leads"
                  fill="url(#leadsArea)"
                  stroke="none"
                />
                <Line
                  type="monotone"
                  dataKey="leads"
                  name="Leads"
                  stroke="#0ea5e9"
                  strokeWidth={2.5}
                  dot={{ fill: '#0ea5e9', r: 3, strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: '#0284c7', stroke: '#fff', strokeWidth: 2 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          )}
        </div>
      </Card>
      <Card
        className="overflow-hidden border-t-4 border-t-violet-500 shadow-md"
        title="Revenue"
        description="Current total in reporting currency"
        noPadding
        revealIndex={1}
      >
        <div className="h-72 w-full bg-gradient-to-b from-violet-50/30 to-white p-4 pt-2 sm:p-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revBar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: '#64748b' }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                allowDecimals={true}
                width={44}
                tick={{ fontSize: 11, fill: '#64748b' }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={tipStyle}
                labelStyle={{ color: '#0f172a', fontWeight: 600, fontSize: 12 }}
                formatter={(v) => [v, 'Amount']}
              />
              <Bar
                dataKey="value"
                name="Amount"
                fill="url(#revBar)"
                radius={[8, 8, 0, 0]}
                maxBarSize={64}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <Card
        className="lg:col-span-2 overflow-hidden border-t-4 border-t-amber-500 shadow-md"
        title="Leads by status"
        description="Distribution in your pipeline"
        noPadding
        revealIndex={2}
      >
        <div className="grid gap-4 bg-gradient-to-r from-amber-50/20 via-white to-rose-50/20 p-4 sm:grid-cols-2 sm:p-6">
          <div className="flex h-64 items-center justify-center sm:h-72">
            {hasPie ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={tipStyle}
                    labelStyle={{ color: '#0f172a', fontWeight: 600, fontSize: 12 }}
                  />
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={56}
                    outerRadius={96}
                    paddingAngle={3}
                    stroke="#fff"
                    strokeWidth={2}
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={PIE[i % PIE.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-sm text-slate-500">No status data yet.</p>
            )}
          </div>
          <ul className="flex flex-col justify-center space-y-3.5 pr-2">
            {pieData.map((d, i) => (
              <li key={d.name} className="flex items-center justify-between rounded-lg bg-white/60 px-3 py-2 text-sm shadow-sm ring-1 ring-slate-200/50">
                <span className="flex items-center gap-2.5">
                  <span
                    className="h-3 w-3 shrink-0 rounded-full ring-2 ring-white shadow"
                    style={{ backgroundColor: PIE[i % PIE.length] }}
                    aria-hidden
                  />
                  <span className="font-medium capitalize text-slate-800">{d.name}</span>
                </span>
                <span className="tabular-nums text-base font-semibold text-slate-800">
                  {d.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  )
}
