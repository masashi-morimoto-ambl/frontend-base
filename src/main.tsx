import { ErrorContextProvider } from '@/pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { routeTree } from './routeTree.gen'
import './styles/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      throwOnError: true,
    },
  },
})

const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultErrorComponent: ({ error }) => {
    // デフォルトのエラーコンポーネント
    // createFileRouteでerrorComponentが指定されない場合に呼ばれる
    // __rootのerrorComponentを呼び出すためにthrow errorが必要
    throw error
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./api/mocks/browser')

  return worker.start()
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  enableMocking().then(() => {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <ErrorContextProvider>
            <RouterProvider router={router} />
          </ErrorContextProvider>
        </QueryClientProvider>
      </React.StrictMode>,
    )
  })
}
