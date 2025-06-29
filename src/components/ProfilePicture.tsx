import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'
import type { UserData } from '@api/_types'
import { fetchUserData } from '@/hooks/user'

const PictureWrapper = styled.span<{ $size: number | string; $rounded: boolean }>`
  display: inline-block;
  width: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size)};
  height: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size)};
  border-radius: ${({ $rounded }) => ($rounded ? '50px' : '8px')};
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background: #f6f7fa;
  cursor: pointer;
  flex-shrink: 0;
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

type ProfilePictureProps = {
  size?: number
  rounded?: boolean
}

const ProfilePicture = ({ size = 40, rounded = false }: ProfilePictureProps) => {
  const { data: user, isPending } = useQuery<UserData>({
    queryKey: ['user', 12],
    queryFn: fetchUserData,
    retry: 1,
  })

  const alt = user ? `Photo de profil de ${user.firstName}` : 'Photo de profil'

  return (
    <>
      {!isPending && user?.picture && (
        <PictureWrapper aria-label={'Profil'} $size={size} $rounded={rounded}>
          <StyledImg src={user.picture} alt={alt} />
        </PictureWrapper>
      )}
    </>
  )
}

export default ProfilePicture
