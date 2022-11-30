import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const AddProductContainer = styled.SafeAreaView`
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
