import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const ContainerDetail = styled.SafeAreaView`
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
  font-size: ${RFValue(32)}px;
`

export const PlusButton = styled.TouchableOpacity``

export const PlusIcon = styled(AntDesign)`
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

export const OrderTotal = styled.Text`
  font-size: ${RFValue(18)}px;
  margin-bottom: 12px;
`

export const GreenText = styled.Text`
  color: #219653;
  font-size: ${RFValue(36)}px;
`
