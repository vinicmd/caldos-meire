import { FlatList, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components/native'

export const ClientsContainer = styled(SafeAreaView)`
  height: 100%;
  padding: 20px 20px 0 20px;
  background-color: #191919;
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

export const ListContainer = styled.View`
  flex: 1;
`

export const ClientsList = styled.FlatList`
  margin-top: 15px;
` as unknown as typeof FlatList

export const ClientWrapper = styled.TouchableOpacity`
  border: 1px solid #f2f2f2;
  height: 60px;
  padding: 0 20px;
  justify-content: center;
  margin-bottom: 10px;
`

export const ClientName = styled.Text`
  font-size: ${RFValue(18)}px;
`

export const ClientTelephone = styled.Text`
  font-size: ${RFValue(14)}px;
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
