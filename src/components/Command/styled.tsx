import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const CommandContainer = styled.View`
  background: #191919;
`

export const ClickableCommand = styled.TouchableOpacity`
  padding: 20px;
  height: 150px;
  justify-content: space-between;
`

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: #fff;
`

export const TopLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ClientName = styled.Text`
  font-size: ${RFValue(24)}px;
  max-width: 70%;
  white-space: nowrap;
`

export const Telephone = styled.Text``

export const BottomLine = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`

export const DetailWrapper = styled.View`
  max-width: 70%;
  max-height: 75px;
`

export const Details = styled.Text`
  white-space: nowrap;
  font-size: ${RFValue(14)}px;
`

export const Amount = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(24)}px;
  color: #219653;
`
