import { Alert } from 'react-native'
import * as S from './styled'

import Button from '../../components/Button'
import { Order } from '../../components/Order'
import { formatCurrency } from '../../utils/formatCurrency'
import { BackButton } from '../../components/BackButton'
import { RFValue } from 'react-native-responsive-fontsize'
import { NavigationType, RouteProp } from '../../utils/types'
import { useNavigation } from '@react-navigation/native'

const orders = {
  id: 1,
  client: 'Vinicius Duarte',
  items: [
    {
      product: 'Caldo de Frango',
      quantity: 1,
      unityPrice: 14.0,
    },
    {
      product: 'Caldo de Feijão',
      quantity: 2,
      unityPrice: 12.0,
    },
    {
      product: 'Coca-cola (lata)',
      quantity: 3,
      unityPrice: 12.0,
    },
  ],
}

interface OrderProp {
  item: {
    product: string
    quantity: number
    unityPrice: number
  }
}

const Detail = ({ route }: RouteProp) => {
  function getAmount() {
    let amount = 0

    orders.items.forEach((order) => {
      amount = amount + order.unityPrice * order.quantity
    })

    return amount
  }

  const navigation: NavigationType = useNavigation()

  return (
    <S.ContainerDetail>
      <S.Header>
        <BackButton />
        <S.HeaderText>{`Pedido ${route.params?.id}`}</S.HeaderText>
        <S.Button>
          <S.Icon
            name="pluscircleo"
            size={RFValue(35)}
            onPress={() =>
              navigation.navigate('AddProducts', { id: route.params?.id })
            }
          />
        </S.Button>
      </S.Header>

      <S.NameView>
        <S.NameText numberOfLines={1}>{orders.client}</S.NameText>
      </S.NameView>

      <S.OrderWrapper>
        <S.OrderList
          data={orders.items}
          keyExtractor={(_, idx) => `item_${idx}`}
          renderItem={({ item }: OrderProp) => <Order data={item} />}
        />
      </S.OrderWrapper>
      <S.OrderFooter>
        <S.OrderText>
          <S.OrderTotal>
            {'Subtotal: '}
            <S.GreenText>{` ${formatCurrency(getAmount())}`}</S.GreenText>
          </S.OrderTotal>
        </S.OrderText>
        <Button onPress={() => console.log('Teste')}>Encerrar</Button>
      </S.OrderFooter>
    </S.ContainerDetail>
  )
}

export default Detail
