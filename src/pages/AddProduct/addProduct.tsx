import { BackButton } from '../../components/BackButton'
import { RouteProp } from '../../utils/types'
import * as S from './styled'

const products = [
  {
    id: 1,
    product: 'Caldo de Feijão',
    price: 12.0,
  },
  {
    id: 2,
    product: 'Caldo de Frango',
    price: 12.0,
  },
  {
    id: 3,
    product: 'Coca-cola Lata',
    price: 5.0,
  },
]

const AddProduct = ({ route }: RouteProp) => {
  console.log(route)
  return (
    <S.AddProductContainer>
      <S.Header>
        <BackButton />
        <S.HeaderText>{`Pedido ${route.params?.id}`}</S.HeaderText>
        <S.HeaderText></S.HeaderText>
      </S.Header>
    </S.AddProductContainer>
  )
}

export { AddProduct }
