import { PAGE_URL } from '@/enums'
import { Link, Outlet } from '@tanstack/react-router'
import { css } from '~/styled-system/css'

export const MainTemplate = () => {
  return (
    <div>
      <header className={css({ p: '2', bg: 'baseBackground', flex: '1' })}>GlobalHeader</header>
      <div className={css({ display: 'flex', gridTemplateColumns: '3' })}>
        <aside className={css({ p: '4', bg: 'baseAccent', color: 'textPale', flex: '1' })}>
          <div className={`divide-y w-56`}>
            {(
              [
                ['/sample', 'Sample'],
                ['/posts', 'Posts'],
              ] as const
            ).map(([to, label]) => {
              return (
                <div key={to}>
                  <Link
                    to={to}
                    activeOptions={
                      {
                        // If the route points to the root of it's parent,
                        // make sure it's only active if it's exact
                        // exact: to === '.',
                      }
                    }
                    preload="intent"
                    className={`block py-2 px-3 text-blue-700`}
                    // Make "active" links bold
                    activeProps={{ className: `font-bold` }}
                    search={{
                      page: to === PAGE_URL.POSTS ? 1 : undefined,
                      keyword: to === PAGE_URL.POSTS ? '' : undefined,
                    }}
                  >
                    {label}
                  </Link>
                </div>
              )
            })}
          </div>
        </aside>
        <div className={css({ p: '4', flex: '5' })}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
