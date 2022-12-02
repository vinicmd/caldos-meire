import { FlatList, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const AddProductContainer = styled.SafeAreaView`
  background: #191919;
  height: 100%;
  padding: 20px 20px 0 20px;
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

export const ProductContainer = styled.View`
  flex: 1;
`

export const ProductList = styled.FlatList`
  height: 100%;
  margin-top: 15px;
` as unknown as typeof FlatList

export const ProductButton = styled.TouchableOpacity`
  width: ${RFValue(140)}px;
  height: ${RFValue(130)}px;
  margin-left: 15px;
  margin-top: 15px;

  border: 1px solid #d3d3d3;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`

export const ProductName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #d3d3d3;
`

export const ProductPrice = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: #219653;
`

export const QuantityLabel = styled.View`
  width: 25px;
  height: 25px;

  border-radius: ${RFPercentage(50)}px;
  background: #d72e2e;
  position: absolute;

  bottom: -7px;
  right: -7px;

  justify-content: center;
  align-items: center;
`

export const QuantityText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #d3d3d3;
`

export const Overlay = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`

export const ModalBody = styled(TouchableOpacity)`
  border-radius: 20px;
  width: 90%;
  height: ${RFPercentage(30)}px;

  padding: 20px;

  background-color: #191919;
`

export const ModalHeader = styled.View`
  align-items: center;
`

export const ModalText = styled.Text`
  font-size: ${RFValue(20)}px;
`
export const ModalContent = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const Quantity = styled.Text`
  font-size: ${RFValue(32)}px;
`

export const ModalButton = styled.TouchableOpacity``

export const ModalIcon = styled(AntDesign)`
  color: #d72e2e;
`

export const Footer = styled.View`
  position: absolute;
  bottom: ${RFValue(16)}px;
  left: ${RFValue(39)}px;
`
