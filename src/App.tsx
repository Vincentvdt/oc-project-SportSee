import './App.css'

import Sidebar from '@/components/Sidebar.tsx'
import Header from '@/components/Header.tsx'
import styled from 'styled-components'
import Dashboard from '@/components/Dashboard/Dashboard.tsx'
import Footer from '@/components/Footer.tsx'
import { useEffect } from 'react'

const Layout = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 30px 40px;
  align-items: flex-start;
  gap: 40px;
`

const App = () => {
  useEffect(() => {}, [])
  return (
    <>
      <Header />
      <Layout>
        <Sidebar />
        <Dashboard />
      </Layout>
      <Footer />
    </>
  )
}

export default App
