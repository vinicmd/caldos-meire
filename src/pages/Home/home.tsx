import * as S from './styled'
import CommandButton from '../../components/CommandButton'
import Header from '../../components/Header'
import Command from '../../components/Command'
import { Alert, FlatList } from 'react-native'
import { ClientProp } from '../../utils/types'
import Button from '../../components/Button'
import { RFValue } from 'react-native-responsive-fontsize'

const clientData = [
  {
    id: 1,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
  },
  {
    id: 2,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
  },
  {
    id: 3,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
  },
  {
    id: 4,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
  },
  {
    id: 5,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
  },
  {
    id: 6,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
  },
]

const Home = () => {
  return (
    <S.ContainerHome>
      <Header />
      <CommandButton />
      <S.Main>
        <FlatList
          style={{ backgroundColor: '#191919' }}
          data={clientData}
          contentContainerStyle={{ marginTop: 10, paddingBottom: RFValue(75) }}
          keyExtractor={(_, idx) => `item_${idx}`}
          renderItem={({ item }: ClientProp) => <Command client={item} />}
        />
        <S.Footer>
          <Button onPress={() => Alert.alert('Teste', 'teste')}>
            Clientes
          </Button>
        </S.Footer>
      </S.Main>
    </S.ContainerHome>
  )
}

export default Home
