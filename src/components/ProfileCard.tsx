import type { UserData } from '@api/_types'

import Card, { CardTitle } from '@/components/Card'
import ProfilePicture from '@/components/ProfilePicture'
import { Pencil1Icon } from '@radix-ui/react-icons'
import styled from 'styled-components'
import useMediaQuery from '@/hooks/useMediaQuery'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  width: 100%;
  min-width: 0;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  flex: 1 0 0;
  align-self: stretch;
  min-width: 0;
`

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  h3 {
    margin: unset;
    line-height: 1;
  }
  svg {
    width: 16px;
    height: 16px;
    aspect-ratio: 1/1;
    flex-shrink: 0;
    color: #62636c;
  }
`

const Bio = styled.div`
  color: #62636c;
  font-size: 14px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const DataGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`

const DataItem = styled.div`
  display: flex;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  > span {
    text-align: center;
  }

  > span:nth-child(2) {
    color: #979797;
  }
`

export interface GridOrder {
  order?: number
  mobileOrder?: number
}
export interface UserProfile extends GridOrder {
  user: UserData
}

const ProfileCard = ({ user, order, mobileOrder }: UserProfile) => {
  const isMobile = useMediaQuery('(max-width: 600px')
  const cardPadding = isMobile ? '0' : undefined

  return (
    <Card order={order} mobileOrder={mobileOrder} padding={cardPadding}>
      <Wrapper>
        <UserInfo>
          <TitleSection>
            <CardTitle>
              {user.firstName} {user.lastName}
            </CardTitle>
            <Pencil1Icon />
          </TitleSection>
          <Bio>{user.bio}</Bio>
          <DataGroup>
            <DataItem>
              <span>{user.height}cm</span>
              <span>Taille</span>
            </DataItem>
            <DataItem>
              <span>{user.weight}kg</span>
              <span>Poids</span>
            </DataItem>
            <DataItem>
              <span>{user.age}</span>
              <span>Age</span>
            </DataItem>
          </DataGroup>
        </UserInfo>
        <ProfilePicture size={80} />
      </Wrapper>
    </Card>
  )
}

export default ProfileCard
