import { useState } from 'react'
import { Modal, ToastAndroid } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { BackButton } from '../../components/BackButton'
import Button from '../../components/Button'
import { formatCurrency } from '../../utils/formatCurrency'
import { RouteProp } from '../../utils/types'
import * as S from './styled'

const products = [
  {
    id: 1,
    product: 'Caldo de Feijão',
    price: 12,
  },
  {
    id: 2,
    product: 'Caldo de Frango',
    price: 14,
  },
  {
    id: 3,
    product: 'Coca-cola Lata',
    price: 5,
  },
  {
    id: 4,
    product: 'Caldo de Feijão',
    price: 12,
  },
  {
    id: 5,
    product: 'Caldo de Frango',
    price: 14,
  },
  {
    id: 6,
    product: 'Coca-cola Lata',
    price: 5,
  },
]
interface Product {
  id?: number | string
  product?: string
  price?: number
}

interface SelectedProducts extends Product {
  quantity: number
}

interface Products {
  item: Product
}

const AddProduct = ({ route }: RouteProp) => {
  const [product, setProduct] = useState<Product>()
  const [modalVisible, setModalVisible] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const [selectedProducts] = useState(Array<SelectedProducts>)

  const changeModalVisibility = (product?: Product) => {
    setProduct(product)
    return setModalVisible(!modalVisible)
  }

  const increaseValue = () => {
    setQuantity(quantity + 1)
  }

  const decreaseValue = () => {
    if (quantity === 0) return
    setQuantity(quantity - 1)
  }

  const handleAddQuantity = (quantity: number, product?: Product) => {
    if (quantity === 0) {
      setQuantity(0)
    }

    const hasSelected = selectedProducts.some(
      (selected) => product?.id === selected.id,
    )

    if (hasSelected) {
      selectedProducts.forEach((selected, index) => {
        product?.id === selected.id &&
          (selectedProducts[index].quantity = quantity)
      })
    } else {
      selectedProducts.push({
        id: product?.id,
        product: product?.product,
        quantity: quantity || 0,
        price: product?.price,
      })
    }

    return setModalVisible(false)
  }

  const handleQuantity = (item: Product) => {
    changeModalVisibility(item)
    const hasSelected = selectedProducts.find(
      (selected) => item.id === selected.id,
    )

    if (hasSelected) {
      return setQuantity(hasSelected.quantity)
    }
    return setQuantity(0)
  }

  const handleAddProducts = () => {}

  return (
    <S.AddProductContainer>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          changeModalVisibility()
        }}
      >
        <S.Overlay activeOpacity={1} onPressIn={() => changeModalVisibility()}>
          <S.ModalBody activeOpacity={1} onPress={() => null}>
            <S.ModalHeader>
              <S.ModalText>{`${product?.product}`}</S.ModalText>
            </S.ModalHeader>
            <S.ModalContent>
              <S.ModalButton onPress={() => decreaseValue()}>
                <S.ModalIcon name="minuscircleo" size={RFValue(40)} />
              </S.ModalButton>
              <S.Quantity>{quantity}</S.Quantity>
              <S.ModalButton onPress={() => increaseValue()}>
                <S.ModalIcon name="pluscircleo" size={RFValue(40)} />
              </S.ModalButton>
            </S.ModalContent>
            <Button onPress={() => handleAddQuantity(quantity, product)}>
              {quantity ? 'Adicionar' : 'Cancelar'}
            </Button>
          </S.ModalBody>
        </S.Overlay>
      </Modal>
      <S.Header>
        <BackButton />
        <S.HeaderText>{`Pedido ${route.params?.id}`}</S.HeaderText>
        <S.HeaderText></S.HeaderText>
      </S.Header>
      <S.ProductContainer>
        <S.ProductList
          data={products}
          numColumns={2}
          contentContainerStyle={{ marginTop: 10, paddingBottom: RFValue(85) }}
          keyExtractor={(_, idx) => `item_${idx}`}
          renderItem={({ item }: Products) => {
            const hasSelected = selectedProducts.find(
              (selected) => item.id === selected.id,
            )

            return (
              <S.ProductButton onPress={() => handleQuantity(item)}>
                <S.ProductName numberOfLines={4}>{item.product}</S.ProductName>
                <S.ProductPrice>{formatCurrency(item.price)}</S.ProductPrice>
                {hasSelected && (hasSelected.quantity || '') && (
                  <S.QuantityLabel>
                    <S.QuantityText>{`${hasSelected.quantity}`}</S.QuantityText>
                  </S.QuantityLabel>
                )}
              </S.ProductButton>
            )
          }}
        />
      </S.ProductContainer>
      <S.Footer>
        <Button onPress={handleAddProducts}>Adicionar</Button>
      </S.Footer>
    </S.AddProductContainer>
  )
}

export { AddProduct }
