import './App.css'

import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import styled from 'styled-components'
import Dashboard from '@/components/Dashboard/Dashboard'
import Footer from '@/components/Footer'
import { useQuery } from '@tanstack/react-query'
import { fetchUserData } from '@/hooks/user'
import type { UserData } from '@api/_types'

const Layout = styled.main`
  display: flex;
  padding: 24px 40px;
  width: 100vw;
  box-sizing: border-box;
  justify-content: flex-start;

  @media (max-width: 1240px) {
    padding: 24px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0;
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

  @media (max-width: 600px) {
    overflow-y: unset;
  }
`

const StateWrapper = styled.section<{ $error?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 2rem;
  color: #1e1f24;
  background: ${({ $error }) => ($error ? '#ffffffb0' : 'unset')};
  border: ${({ $error }) => ($error ? '1px solid #d8d9e0' : 'unset')};
  border-radius: 16px;
  margin: 0 auto;
  padding: 32px;
  place-self: center;

  span {
    font-size: 1rem;
    color: #681710;
    line-height: 29px;

    a {
      color: #e50000;
      text-decoration: underline;
    }
  }
`

const App = () => {
  const {
    data: userData,
    isPending,
    isError,
    error,
  } = useQuery<UserData>({
    queryKey: ['user', 12],
    queryFn: fetchUserData,
    retry: 1,
  })

  const isLocalhost =
    window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  const isPort3000 = window.location.port === '3000' || window.location.port === ''

  return (
    <>
      <Header />
      <Layout>
        <Sidebar />
        {isPending ? (
          <StateWrapper>Chargement en cours… </StateWrapper>
        ) : isError ? (
          <StateWrapper $error={isError}>
            Erreur de chargement.
            <br />
            {isLocalhost && !isPort3000 && (
              <span>
                👀 You’re running locally, but not on port 3000. <br />
                Please see the{' '}
                <a
                  href="https://github.com/Vincentvdt/oc-project-SportSee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Getting Started
                </a>{' '}
                guide to use Vercel dev, or try the{' '}
                <a href="https://your-demo-url-here" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>{' '}
                if it’s online. (No offline backup, sorry! 😅)
              </span>
            )}
            <span style={{ fontSize: 12 }}>
              {(error as Error)?.message || 'Essayez de recharger la page.'} <br />
            </span>
          </StateWrapper>
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
