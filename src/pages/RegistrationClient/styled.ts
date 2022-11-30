import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const RegistrationClienteContainer = styled.SafeAreaView`
  background: #191919;
  height: 100%;
  padding: 20px;
`

export const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`

export const HeaderText = styled.Text`
  color: #d3d3d3;
  font-size: ${RFValue(28)}px;
`

export const Button = styled.TouchableOpacity``

export const Form = styled.View`
  padding: 20px 0;
  flex: 1;
`

export const InputWrapper = styled.View`
  margin-bottom: 20px;
`

export const Label = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-bottom: 10px;
`

export const Input = styled.TextInput`
  border: 1px solid #f2f2f2;
  font-size: ${RFValue(20)}px;
  padding: 10px 16px;
  border-radius: 16px;
`

export const Footer = styled.View`
  height: 50px;
  align-items: center;
`

export const ErrorText = styled.Text`
  color: #d72e2e;
  margin-top: 10px;
`
