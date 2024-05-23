import { AppRoutePaths } from '@/models'
import { routeTree } from '@/routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { render, waitFor, waitForOptions } from '@testing-library/react'

const timeout = 10000

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  context: { queryClient },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function renderWithContext(routes: AppRoutePaths) {
  router.basepath = routes
  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  )
}

export function waitForElement<T>(callback: () => Promise<T> | T, options?: waitForOptions): Promise<T> {
  return waitFor(callback, {
    ...options,
    timeout: timeout,
  })
}

export * from '@testing-library/react'

export { renderWithContext as render, waitForElement as waitFor }
