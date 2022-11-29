import { formatCurrency } from '../../utils/formatCurrency'
import { Client } from '../../utils/types'
import * as S from './styled'

type ClientProp = {
  client: Client
}

const Command = ({ client }: ClientProp) => {
  console.log(client)
  return (
    client && (
      <S.CommandContainer>
        <S.ClickableCommand>
          <S.TopLine>
            <S.ClientName>{client.name}</S.ClientName>
            <S.Telephone>{client.telephone}</S.Telephone>
          </S.TopLine>
          <S.BottomLine>
            <S.DetailWrapper>
              <S.Details>{client.items}</S.Details>
            </S.DetailWrapper>
            <S.Amount>{formatCurrency(client.amount)}</S.Amount>
          </S.BottomLine>
        </S.ClickableCommand>
        <S.Separator />
      </S.CommandContainer>
    )
  )
}

export default Command