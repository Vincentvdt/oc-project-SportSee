import styled from 'styled-components'
import { Pencil2Icon } from '@radix-ui/react-icons'
import type { UserData } from '../../api/types'

export interface UserProfile {
  user: UserData
  onEdit?: () => void
}

const Card = styled.article`
  display: flex;
  flex-direction: row;
  padding: 32px 24px;
  align-items: flex-start;
  gap: 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(32, 32, 56, 0.06);
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
`

const AvatarContainer = styled.figure`
  flex-shrink: 0;
  width: 110px;
  height: 110px;
  border-radius: 16px;
  overflow: hidden;
  margin: 0;
  background: #f3f3f6;
  display: flex;
  align-items: center;
  justify-content: center;

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
  gap: 16px;
  flex: 1 1 0;
  min-width: 0;
  justify-content: space-between;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  min-width: 0;

  h3 {
    color: #1e1f24;
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    border: none;
    background: none;
    width: 22px;
    height: 22px;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: color 80ms ease-in-out;
    color: #c1c1c1;
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
  font-weight: 500;
  text-align: left;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: normal;
`

const DataGroup = styled.div`
  display: flex;
  gap: 32px;
  min-width: 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    > span {
      color: #1e1f24;
      font-weight: 500;
      text-align: center;
      word-break: break-word;
    }

    > span:nth-child(2) {
      color: #979797;
      font-size: 14px;
      font-weight: 400;
    }
  }
`

const ProfileCard = ({ user, onEdit }: UserProfile) => {
  return (
    <Card>
      <InfoSection>
        <Header>
          <h3 title={`${user.firstName} ${user.lastName}`}>
            {user.firstName} {user.lastName.slice(0, 1)}.
          </h3>
          {onEdit && (
            <button aria-label="Edit profile" onClick={onEdit}>
              <Pencil2Icon aria-hidden="true" />
            </button>
          )}
        </Header>
        <Bio title={user.bio}>{user.bio}</Bio>
        <DataGroup>
          <div>
            <span>{user.age}</span>
            <span>Age</span>
          </div>
          <div>
            <span>{user.gender}</span>
            <span>Genre</span>
          </div>
          <div>
            <span>{user.height}cm</span>
            <span>Taille</span>
          </div>
          <div>
            <span>{user.weight}kg</span>
            <span>Poids</span>
          </div>
        </DataGroup>
      </InfoSection>
      <AvatarContainer>
        <img src={user.picture} alt={`${user.firstName} profile`} />
      </AvatarContainer>
    </Card>
  )
}

export default ProfileCard
