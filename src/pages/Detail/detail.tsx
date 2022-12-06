import { useState } from 'react'
import { Modal } from 'react-native'
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
      id: '1',
      product: 'Caldo de Frango',
      quantity: 1,
      unityPrice: 14.0,
    },
    {
      id: '2',
      product: 'Caldo de Feijão',
      quantity: 2,
      unityPrice: 12.0,
    },
    {
      id: '3',
      product: 'Coca-cola (lata)',
      quantity: 3,
      unityPrice: 12.0,
    },
  ],
}

interface Order {
  id: string | number
  product: string
  quantity: number
  unityPrice: number
}

interface OrderProp {
  item: Order
}

const Detail = ({ route }: RouteProp) => {
  const [clickedOrder, setClickedOrder] = useState<Order>()
  const [modalVisible, setModalVisible] = useState(false)
  function getAmount() {
    let amount = 0

    orders.items.forEach((order) => {
      amount = amount + order.unityPrice * order.quantity
    })

    return amount
  }

  function handleOrder(order: Order) {
    clickedOrder && clickedOrder.id !== order.id && setClickedOrder(order)
    setModalVisible(!modalVisible)
  }

  function changeModalVisibility(order?: Order) {
    order && setClickedOrder(order)
    return setModalVisible(!modalVisible)
  }

  const navigation: NavigationType = useNavigation()

  return (
    <S.ContainerDetail>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          changeModalVisibility()
        }}
      >
        <S.Overlay activeOpacity={1}>
          <S.ModalBody activeOpacity={1} onPress={() => null}>
            <S.ModalHeader>
              <S.ModalText>Selecione a opção</S.ModalText>
              <S.ModalCloseButton onPress={() => changeModalVisibility()}>
                <S.Icon name="closecircleo" size={RFValue(26)} />
              </S.ModalCloseButton>
            </S.ModalHeader>
            <S.ModalOptions>
              <S.ModalClientName>{clickedOrder?.product}</S.ModalClientName>
              <Button
                style={{ marginBottom: 16 }}
                onPress={() => console.log('Criar')}
              >
                Criar Pedido
              </Button>
              <Button onPress={() => console.log('Teste')}>
                Editar Cadastro
              </Button>
            </S.ModalOptions>
          </S.ModalBody>
        </S.Overlay>
      </Modal>
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
          renderItem={({ item }: OrderProp) => (
            <Order onPress={() => handleOrder(item)} data={item} />
          )}
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
