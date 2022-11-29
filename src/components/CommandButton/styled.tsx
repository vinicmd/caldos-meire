import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const CommandContainer = styled.View`
  height: 50px;
  width: 100%;
  padding: 10px 5px;
  justify-content: space-between;
  flex-direction: row;
  background: #191919;
`

export const Button = styled.TouchableOpacity`
  width: 120px;
  background: #545454;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-size: ${RFValue(18)}px;
  color: #f3f3f3;
`
