import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const ContainerHome = styled.SafeAreaView`
  height: 100%;
`

export const Main = styled.SafeAreaView`
  flex: 1;
`

export const Footer = styled.View`
  position: absolute;
  bottom: ${RFValue(16)}px;
  left: ${RFValue(39)}px;
`
