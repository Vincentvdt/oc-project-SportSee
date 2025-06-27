import './App.css'

import Sidebar from '@/components/Sidebar.tsx'
import Header from '@/components/Header.tsx'
import styled from 'styled-components'
import Dashboard from '@/components/Dashboard/Dashboard.tsx'
import Footer from '@/components/Footer.tsx'
import { useQuery } from '@tanstack/react-query'
import { fetchUserData } from '@/hooks/user.tsx'
import type { UserData } from '../api/types'

const Layout = styled.main`
  display: flex;
  padding: 0 40px;
  width: 100vw;
  box-sizing: border-box;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`
const DashboardOuter = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  min-width: 0;
  overflow-y: auto;
  overflow-x: hidden;
`

const App = () => {
  const {
    data: userData,
    isPending,
    isError,
  } = useQuery<UserData>({
    queryKey: ['user', 12],
    queryFn: fetchUserData,
  })

  if (isError) return <div>Error</div>

  return (
    <>
      <Header />
      <Layout>
        <Sidebar picture={userData?.picture} firstName={userData?.firstName} loading={isPending} />
        {isPending ? (
          <div>Chargement ...</div>
        ) : (
          <DashboardOuter>
            <Dashboard user={userData} />
          </DashboardOuter>
        )}
      </Layout>
      <Footer />
    </>
  )
}

export default App
