import FinanceServicesView from '@/app/components/services/finance-services-view'
import styles from './service-detail.module.css'

/**
 * Banking route uses Lovable-aligned finance hub (tabs: Banking & FD, Loans, Calculator, PAN Services).
 * @see https://preview-nri-suvidha-v1.lovable.app/finance-services
 */
export default function BankingServiceDetail() {
  return (
    <main className={styles.page}>
      <div className="container py-4">
        <FinanceServicesView />
      </div>
    </main>
  )
}
