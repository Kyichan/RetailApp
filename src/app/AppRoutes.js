import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import { LoaderRoller } from 'components/Base'

const SpinWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const HomePage = lazy(() => import('pages'))
const FourOFourPage = lazy(() => import('pages/error/404'))
const FiveOOPage = lazy(() => import('pages/error/500'))
const TransactionListPage = lazy(() => import('pages/retail/transactionList'))
const TransactionDetailPage = lazy(() => import('pages/retail/transactionDetail'))

export const routesConfig = () => [
  {
    path: '/',
    title: 'Home',
    component: HomePage,
    visibleIn: ['main'],
    exact: true,
    routes: [
      {
        path: '/transactions',
        title: 'Transaction List',
        component: TransactionListPage,
        exact: true
      },
      {
        path: '/transactions/:id',
        title: 'Transaction Detail',
        component: TransactionDetailPage,
        exact: true
      }
    ]
  },
  {
    path: '/error/500',
    title: 'Server Error',
    component: FiveOOPage
  },
  {
    title: 'Page Not Found',
    component: FourOFourPage
  }
]

export const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact || false}
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
)

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <SpinWrapper>
            <LoaderRoller />
          </SpinWrapper>
        }
      >
        <Switch>
          {routesConfig()
            .reduce((arr, route) => {
              arr.push(route)
              if (route.routes && Array.isArray(route.routes) && route.routes.length > 0) {
                route.routes.forEach(childRoute => arr.push(childRoute))
              }
              return arr
            }, [])
            .map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
