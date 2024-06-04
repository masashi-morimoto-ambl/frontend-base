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
      refetchOnWindowFocus: false,
    },
  },
  // queryCache: new QueryCache({
  //   onError: (error) => {
  //     console.log('onError', error)
  //   },
  // }),
})

const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultErrorComponent: ({ error }) => {
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
