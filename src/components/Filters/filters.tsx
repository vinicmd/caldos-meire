import * as S from './styled'

const Filters = () => {
  return (
    <S.FilterContainer>
      <S.Button selected={true}>
        <S.ButtonText>Abertas</S.ButtonText>
      </S.Button>
      <S.Button selected={false}>
        <S.ButtonText>Fechados</S.ButtonText>
      </S.Button>
      <S.Button selected={false}>
        <S.ButtonText>Todos</S.ButtonText>
      </S.Button>
    </S.FilterContainer>
  )
}

export { Filters }
