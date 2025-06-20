import './App.css'
import Header from './components/Header.tsx'
import Sidebar from './components/Sidebar.tsx'
import styled from 'styled-components'
import Dashboard from './components/Dashboard.tsx'

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: fit-content;
  height: calc(100dvh - 91px);
  background: white;
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
