import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Button = styled.TouchableOpacity`
  width: ${RFValue(280)}px;
  height: ${RFValue(45)}px;

  align-items: center;
  justify-content: center;

  border-radius: 24px;

  background: #d72e2e;
`

export const ButtonText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 600;
`
