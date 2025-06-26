import './App.css'

import Sidebar from '@/components/Sidebar.tsx'
import Header from '@/components/Header.tsx'
import styled from 'styled-components'
import { BellIcon, DotFilledIcon, LightningBoltIcon } from '@radix-ui/react-icons'
import ProfileCard from '@/components/ProfileCard.tsx'
import MacroCard from '@/components/MacroCard.tsx'

const Layout = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 30px 40px;
  align-items: flex-start;
  gap: 40px;
`
const Dashboard = styled.section``

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Sidebar />
        <Dashboard>
          <div>
            <h1>
              Bonjour, <span>Thomas</span> <br />
              Quoi de beau aujourd'hui ?
            </h1>
            <div>
              <article>
                <LightningBoltIcon />
                <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
              </article>
              <button>
                <BellIcon />
              </button>
            </div>
          </div>
          <div>
            <div>
              <div>{/*Charts*/}</div>
              <footer>
                <p>© 2025 SportSee — Bouge mieux, vis plus fort. Tous droits réservés.</p>
                <ul>
                  <li>Mentions légales</li>
                  <DotFilledIcon />
                  <li>Confidentialité</li>
                  <DotFilledIcon />
                  <li>CGU</li>
                  <DotFilledIcon />
                  <li>Politique de cookies</li>
                </ul>
              </footer>
            </div>
            <div>
              <ProfileCard
                name="Thomas Monsouri"
                bio="Be stronger than your excuses"
                height="173cm"
                weight="63kg"
                pictureUrl="/pp.jpg"
                onEdit={() => console.log('Edit clicked')}
              />
              <MacroCard />
              <div></div>
            </div>
          </div>
        </Dashboard>
      </Layout>
    </>
  )
}

export default App
