import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const FilterContainer = styled.View`
  height: 50px;
  width: 100%;
  padding: 10px 5px;
  justify-content: space-between;
  flex-direction: row;
  background: #191919;
`

export const Button = styled.TouchableOpacity`
  width: 120px;
  background: ${(props) => (props.selected ? '#f3f3f3' : '#545454')};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${(props) => (props.selected ? '#191919' : '#f3f3f3')};
`
