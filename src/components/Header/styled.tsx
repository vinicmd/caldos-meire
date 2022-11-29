import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/FontAwesome'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  height: 80px;
  background: #191919;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`

export const LogoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TextWrapper = styled.View`
  max-width: 90px;
  height: 100%;
  justify-content: center;
`

export const Title = styled.Text`
  color: #f2f2f2;
  font-size: ${RFValue(20)}px;
`

export const Bold = styled.Text`
  font-weight: bold;
`

export const Menu = styled.View``

export const Logo = styled(Feather)`
  font-size: ${RFValue(32)}px;
`
