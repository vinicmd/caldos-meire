import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, TouchableOpacity } from 'react-native'

export const ContainerDetail = styled(SafeAreaView)`
  height: 100%;
  padding: 20px;
  background: #191919;
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

export const Icon = styled(AntDesign)`
  color: #d72e2e;
`

export const NameView = styled.View`
  background: #191919;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const OrderWrapper = styled.View`
  background: #252525;
  padding: 20px;
  flex: 1;
`

export const OrderList = styled.FlatList`` as unknown as typeof FlatList

export const NameText = styled.Text`
  color: #d3d3d3;
  font-size: ${RFValue(25)}px;
`

export const OrderFooter = styled.View`
  height: 120px;
  background: #191919;
  justify-content: center;
  align-items: center;
`
export const OrderText = styled.View`
  width: 100%;
  align-items: flex-end;
`

export const OrderTotal = styled.Text`
  font-size: ${RFValue(18)}px;
  margin-bottom: 12px;
`

export const GreenText = styled.Text`
  color: #219653;
  font-size: ${RFValue(36)}px;
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
  height: ${RFPercentage(40)}px;

  padding: 20px;

  background-color: #191919;
`

export const ModalHeader = styled.View`
  align-items: center;
`

export const ModalOptions = styled.View`
  height: 80%;

  justify-content: center;
  align-items: center;
`

export const ModalText = styled.Text`
  font-size: ${RFValue(24)}px;
  color: #f2f2f2;
  text-align: center;
`

export const ModalCloseButton = styled(Button)`
  position: absolute;
  right: 10px;
`
export const ModalClientName = styled.Text`
  font-size: ${RFValue(24)}px;
  margin-bottom: 16px;
`
