import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'

export const ContainerHome = styled(SafeAreaView)`
  height: 100%;
  background: #191919;
`

export const Main = styled.View`
  flex: 1;
`

export const Footer = styled.View`
  position: absolute;
  bottom: ${RFValue(16)}px;
  left: ${RFValue(39)}px;
`
