import { PAGE_URL } from '@/enums'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    // TODO:認証済みの場合は入出金一覧画面にリダイレクトする
    const isAuthenticated = true
    if (isAuthenticated) {
      throw redirect({
        to: PAGE_URL.TRANSACTION_HISTORIES,
      })
    }
  },
  component: () => <p>ウォークスルー</p>,
})
