import { useNavigation } from '@react-navigation/native'
import * as S from './styled'
import { RFValue } from 'react-native-responsive-fontsize'

const BackButton = () => {
  const navigation = useNavigation()

  return (
    <S.Button onPress={() => navigation.goBack()}>
      <S.Icon name="leftcircleo" size={RFValue(35)} />
    </S.Button>
  )
}

export { BackButton }
