import { Sample } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sample/')({
  component: () => <Sample />,
})
