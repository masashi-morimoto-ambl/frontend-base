import { TransactionHistories } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/transaction_histories/')({
  component: TransactionHistories,
})
