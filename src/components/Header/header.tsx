import * as S from './styled'

import SvgLogo from '../../assets/logo.svg'

const Header = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <S.TextWrapper>
          <S.Title>
            <S.Bold>C</S.Bold>aldim{' \n'}
            da <S.Bold>Meire</S.Bold>
          </S.Title>
        </S.TextWrapper>
        <SvgLogo width={50} />
      </S.LogoWrapper>
      <S.Logo name="align-justify" style={{ display: 'none' }} />
    </S.Container>
  )
}

export default Header
