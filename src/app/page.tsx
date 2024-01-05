'use client'
import { useEffect, useState } from 'react'
import Header from '@/components/layout/header'
import SideLayout from '@/components/chared/side-layout'
import NavBar from '@/components/layout/navigation/nav_bar'
import AdminNavigation from '@/components/layout/navigation/admin_navigation'
import Login from '@/components/layout/login'
import SearchContainer from '@/components/containers/search'
import Content from '@/components/containers/content'
import Loading from '@/components/ui/loading'
import HomeLayout from '@/components/layout/home_layout'
import { select } from '@/data'
import { select_admin_navigation } from '@/data'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const auth = false

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <HomeLayout>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>
            <SideLayout side="space-between">
              <NavBar menu={select} />
              {auth ? (
                <AdminNavigation menu={select_admin_navigation} />
              ) : (
                <Login />
              )}
            </SideLayout>
          </Header>
          <SearchContainer />
          <Content />
        </>
      )}
    </HomeLayout>
  )
}
