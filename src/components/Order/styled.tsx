import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const ContainerOrder = styled.TouchableOpacity`
  padding: 10px 0;
`

export const OrderDescription = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

export const OrderName = styled.Text`
  max-width: 70%;
  font-size: ${RFValue(24)}px;
  color: #d3d3d3;
`

export const OrderQuantity = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #d3d3d3;
`
export const ContainerPrice = styled.View`
  align-items: flex-end;
`

export const OrderPrice = styled.Text`
  font-size: ${RFValue(24)}px;
  color: #d3d3d3;
  margin-bottom: 12px;
`

export const Separator = styled.View`
  width: 100%;
  height: 1px;

  background: #505050;
`
