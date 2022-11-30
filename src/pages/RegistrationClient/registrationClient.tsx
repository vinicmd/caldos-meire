import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { BackButton } from '../../components/BackButton'
import Button from '../../components/Button'
import { NavigationType } from '../../utils/types'
import * as S from './styled'

interface Data {
  name: string
  telephone: string
}
const RegistrationClient = () => {
  const navigation: NavigationType = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      telephone: '',
    },
  })

  const onSubmit = (data: Data) => {
    try {
      navigation.dispatch(navigation.navigate('Home'))
      console.log(data)
    } catch (error) {
      navigation.goBack()
    }
  }

  return (
    <S.RegistrationClienteContainer>
      <S.Header>
        <BackButton />
        <S.HeaderText>{`Cadastro`}</S.HeaderText>
        <S.HeaderText></S.HeaderText>
      </S.Header>

      <S.Form>
        <S.InputWrapper>
          <S.Label>Nome</S.Label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <S.Input onBlur={onBlur} onChangeText={onChange} value={value} />
            )}
            name="name"
          />
          {errors.name && <S.ErrorText>Nome é obrigatório</S.ErrorText>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Telefone</S.Label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <S.Input
                maxLength={11}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="number-pad"
              />
            )}
            name="telephone"
          />
          {errors.telephone && (
            <S.ErrorText>Telefone é obrigatório</S.ErrorText>
          )}
        </S.InputWrapper>
      </S.Form>
      <S.Footer>
        <Button onPress={handleSubmit(onSubmit)}>Salvar</Button>
      </S.Footer>
    </S.RegistrationClienteContainer>
  )
}

export { RegistrationClient }
