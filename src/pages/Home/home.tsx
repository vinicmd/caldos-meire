import * as S from './styled'
import Header from '../../components/Header'
import Command from '../../components/Command'
import { ClientProp, Client, NavigationType } from '../../utils/types'
import Button from '../../components/Button'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

const clientData = [
  {
    id: 1,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
    status: 'open',
  },
  {
    id: 2,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
    status: 'open',
  },
  {
    id: 3,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
    status: 'open',
  },
  {
    id: 4,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
    status: 'open',
  },
  {
    id: 5,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
    status: 'open',
  },
  {
    id: 6,
    name: 'Vinicius Miranda Duarte',
    telephone: '62 98155-0639',
    amount: 45,
    items: '1x Caldo de frango\n2x Caldo de Feijão\n3x Coca-cola (lata)',
    status: 'open',
  },
]

const Home = () => {
  const [orders, setOrders] = useState<Array<Client>>()
  const [filter, setFilter] = useState('')

  useEffect(() => {
    setOrders(clientData)
    console.log(filter)
  }, [filter])

  const navigation: NavigationType = useNavigation()

  const clickedFilter = (status: string) => {
    filter !== status && setFilter(status)
  }

  return (
    <S.ContainerHome>
      <Header />
      <S.FilterContainer>
        <S.Button onPress={() => clickedFilter('open')}>
          <S.ButtonText>Abertas</S.ButtonText>
        </S.Button>
        <S.Button onPress={() => clickedFilter('close')}>
          <S.ButtonText>Fechados</S.ButtonText>
        </S.Button>
        <S.Button onPress={() => clickedFilter('all')}>
          <S.ButtonText>Todos</S.ButtonText>
        </S.Button>
      </S.FilterContainer>
      <S.Main>
        <S.ClientList
          data={orders}
          contentContainerStyle={{ marginTop: 10, paddingBottom: RFValue(75) }}
          keyExtractor={(_, idx) => `item_${idx}`}
          renderItem={({ item }: ClientProp) => (
            <Command
              client={item}
              onPress={() => navigation.navigate('Details', { id: item.id })}
            />
          )}
          ItemSeparatorComponent={() => <S.Separator />}
        />
        <S.Footer>
          <Button onPress={() => navigation.navigate('Clients')}>
            Clientes
          </Button>
        </S.Footer>
      </S.Main>
    </S.ContainerHome>
  )
}

export default Home
