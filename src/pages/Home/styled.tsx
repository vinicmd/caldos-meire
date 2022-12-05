import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'

export const ContainerHome = styled(SafeAreaView)`
  height: 100%;
  background: #191919;
`

export const Main = styled.View`
  flex: 1;
`

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
  background: #545454;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-size: ${RFValue(18)}px;
  color: #f3f3f3;
`

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: #fff;
`

export const Footer = styled.View`
  position: absolute;
  bottom: ${RFValue(16)}px;
  left: ${RFValue(39)}px;
`

export const ClientList = styled(FlatList)`
  background-color: #191919;
` as unknown as typeof FlatList
