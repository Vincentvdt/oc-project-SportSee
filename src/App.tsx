import './App.css'
import Header from './components/layout/Header.tsx'
import Sidebar from './components/layout/Sidebar.tsx'
import styled from 'styled-components'
import Dashboard from './components/layout/Dashboard.tsx'

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: fit-content;
  height: calc(100dvh - 91px);
  background: white;
    color: #222;
`

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Sidebar />
        <Dashboard />
      </Layout>
    </>
  )
}

export default App
