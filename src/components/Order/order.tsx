import { formatCurrency } from '../../utils/formatCurrency'
import * as S from './styled'

interface OrderProp {
  data: {
    product: string
    quantity: number
    unityPrice: number
  }
  onPress: () => void
}

const Order = ({ data, onPress }: OrderProp) => {
  return (
    <S.ContainerOrder onPress={onPress}>
      <S.OrderDescription>
        <S.OrderName>
          {'> '}
          {data.product}
        </S.OrderName>
        <S.OrderQuantity>
          {data.quantity}
          {'x'}
        </S.OrderQuantity>
      </S.OrderDescription>
      <S.ContainerPrice>
        <S.OrderPrice>{formatCurrency(data.unityPrice)}</S.OrderPrice>
      </S.ContainerPrice>
      <S.Separator />
    </S.ContainerOrder>
  )
}

export default Order
