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
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 2.5rem;
  align-items: flex-start;
  gap: 40px;
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
        {isPending ? <div>Chargement ...</div> : <Dashboard user={userData} />}
      </Layout>
      <Footer />
    </>
  )
}

export default App
