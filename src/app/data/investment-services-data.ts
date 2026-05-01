/** `/services/investment-services` — aligned with Lovable investment-services hub */

export const investmentPage = {
  title: 'Investment Services',
  subtitle: 'Mutual funds, equities, and portfolio guidance aligned with your India goals',
} as const

export const investmentRecommendedIntro =
  'Based on your risk profile: Moderate Aggressive' as const

export const recommendationPicks = [
  { tier: 'Recommended', name: 'HDFC Top 100 Fund', expectedReturn: '12-15%' },
  { tier: 'Trending', name: 'SBI Blue Chip Fund', expectedReturn: '10-12%' },
  { tier: 'Conservative', name: 'ICICI Balanced Fund', expectedReturn: '8-10%' },
] as const

export const availableSection = {
  title: 'Available Investments',
  subtitle: 'Explore mutual funds and stocks',
} as const

export type InvestmentRiskLevel = 'Low' | 'Moderate' | 'High' | 'Very High'

export const availableInvestments = [
  {
    name: 'HDFC Top 100 Fund',
    category: 'Large Cap',
    navLabel: '₹685.50',
    retLabel: '+12.5%',
    risk: 'Moderate' as InvestmentRiskLevel,
  },
  {
    name: 'SBI Blue Chip Fund',
    category: 'Large Cap',
    navLabel: '₹58.20',
    retLabel: '+10.8%',
    risk: 'Low' as InvestmentRiskLevel,
  },
  {
    name: 'ICICI Technology Fund',
    category: 'Sectoral',
    navLabel: '₹125.80',
    retLabel: '+18.2%',
    risk: 'High' as InvestmentRiskLevel,
  },
  {
    name: 'Axis Small Cap Fund',
    category: 'Small Cap',
    navLabel: '₹45.30',
    retLabel: '+22.1%',
    risk: 'Very High' as InvestmentRiskLevel,
  },
  {
    name: 'Reliance Infrastructure',
    category: 'Stock',
    navLabel: '₹245.60',
    retLabel: '+8.5%',
    risk: 'High' as InvestmentRiskLevel,
  },
] as const

export const transactionSection = {
  title: 'Transaction History',
  subtitle: 'Your recent investment transactions',
} as const

export const investmentTransactions = [
  {
    kind: 'Purchase',
    name: 'HDFC Top 100 Fund',
    amount: '₹10,000',
    date: '2024-01-15',
    status: 'Completed',
  },
  {
    kind: 'SIP',
    name: 'SBI Blue Chip Fund',
    amount: '₹5,000',
    date: '2024-01-10',
    status: 'Completed',
  },
  {
    kind: 'Redemption',
    name: 'ICICI Technology Fund',
    amount: '₹8,500',
    date: '2024-01-05',
    status: 'Processing',
  },
] as const

export const quickInvestFundOptions = [
  { id: 'hdfc-top-100', label: 'HDFC Top 100 Fund' },
  { id: 'sbi-bluechip', label: 'SBI Blue Chip Fund' },
  { id: 'icici-tech', label: 'ICICI Technology Fund' },
] as const

export const quickInvestCopy = {
  title: 'Quick Invest',
  subtitle: 'Make an investment quickly',
  fundLabel: 'Select Fund',
  amountLabel: 'Investment Amount',
  typeLabel: 'Investment Type',
  oneTime: 'One-time Investment',
  sip: 'Monthly SIP',
  proceedCta: 'Proceed to Payment',
  paymentFooter: 'Secure payment powered by Razorpay',
  minNote: 'Min investment: ₹500',
} as const
