import styled from 'styled-components'
import { Pencil2Icon } from '@radix-ui/react-icons'

export interface UserProfile {
  name: string
  bio: string
  height: number | string
  weight: number | string
  pictureUrl: string
  onEdit?: () => void
}

const Card = styled.article`
  display: flex;
  padding: 32px 24px;
  align-items: flex-start;
  gap: 24px;
  background: #fff;
  border-radius: 16px;
`

const AvatarContainer = styled.figure`
  width: 110px;
  height: 110px;
  border-radius: 16px;
  overflow: hidden;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 11px;
  flex: 1 0 0;
  height: 131px;
  justify-content: space-between;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  h3 {
    color: #1e1f24;
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }

  button {
    border: none;
    background: none;
    width: 16px;
    height: 16px;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: color 80ms ease-in-out;

    svg {
      width: 100%;
      height: 100%;
    }

    &:hover {
      color: #62636c;
    }
  }
`

const Bio = styled.p`
  color: #62636c;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  flex: 1 0 0;
  text-align: left;
`

const DataGroup = styled.div`
  display: flex;
  gap: 32px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    > span {
      color: #1e1f24;
      font-weight: 500;
      text-align: center;
    }

    > span:nth-child(2) {
      color: #979797;
      font-size: 14px;
      font-weight: 400;
    }
  }
`

const ProfileCard = ({ name, bio, height, weight, pictureUrl, onEdit }: UserProfile) => {
  const [firstName, lastName] = name.split(' ')

  return (
    <Card>
      <InfoSection>
        <Header>
          <h3>
            {firstName} {lastName && `${lastName.slice(0, 1)}.`}
          </h3>
          {onEdit && (
            <button aria-label="Edit profile" onClick={onEdit}>
              <Pencil2Icon />
            </button>
          )}
        </Header>
        <Bio>{bio}</Bio>
        <DataGroup>
          <div>
            <span>{height}</span>
            <span>Taille</span>
          </div>
          <div>
            <span>{weight}</span>
            <span>Poids</span>
          </div>
        </DataGroup>
      </InfoSection>
      <AvatarContainer>
        <img src={pictureUrl} alt={`${name} profile`} />
      </AvatarContainer>
    </Card>
  )
}

export default ProfileCard
