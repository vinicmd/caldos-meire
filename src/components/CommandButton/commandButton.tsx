import * as S from './styled'

const CommandButton = () => {
  return (
    <S.CommandContainer>
      <S.Button>
        <S.ButtonText>Abertas</S.ButtonText>
      </S.Button>
      <S.Button>
        <S.ButtonText>Fechados</S.ButtonText>
      </S.Button>
      <S.Button>
        <S.ButtonText>Todos</S.ButtonText>
      </S.Button>
    </S.CommandContainer>
  )
}

export default CommandButton
