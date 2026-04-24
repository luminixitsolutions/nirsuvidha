/** Maps legacy template engagement codes to service-platform labels (UI only). */
export function serviceEngagementLabel(jobtype: string): string {
  const map: Record<string, string> = {
    'Full Time': 'Priority',
    'Part Time': 'Standard',
    Freelancer: 'Specialist',
    Enternship: 'Express',
  }
  return map[jobtype] ?? jobtype
}
