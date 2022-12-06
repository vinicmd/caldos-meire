import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Modal } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { BackButton } from '../../components/BackButton'
import Button from '../../components/Button'
import { NavigationType } from '../../utils/types'
import * as S from './styled'

const clients = [
  {
    id: 1,
    name: 'Vinicius Duarte',
    telephone: '62981550639',
  },
  {
    id: 2,
    name: 'Nathalia Cristina Garcia Costa Duarte',
    telephone: '62981550639',
  },
  {
    id: 3,
    name: 'Juliana Miranda Duarte',
    telephone: '62981550639',
  },
  {
    id: 4,
    name: 'Nivaldo Nepomuceno Duarte',
    telephone: '62981550639',
  },
  {
    id: 5,
    name: 'Rosimary Pereira de Miranda Duarte',
    telephone: '62981550639',
  },
  {
    id: 6,
    name: 'Nara Rubia da Paz Garcia Rosa',
    telephone: '62981550639',
  },
  {
    id: 7,
    name: 'Vinicius Duarte',
    telephone: '62981550639',
  },
  {
    id: 8,
    name: 'Nathalia Cristina Garcia Costa Duarte',
    telephone: '62981550639',
  },
  {
    id: 9,
    name: 'Juliana Miranda Duarte',
    telephone: '62981550639',
  },
  {
    id: 10,
    name: 'Nivaldo Nepomuceno Duarte',
    telephone: '62981550639',
  },
  {
    id: 11,
    name: 'Rosimary Pereira de Miranda Duarte',
    telephone: '62981550639',
  },
  {
    id: 12,
    name: 'Nara Rubia da Paz Garcia Rosa',
    telephone: '62981550639',
  },
]

interface ClientsProps {
  item: Client
}

interface Client {
  id?: number | string
  name?: string
  telephone?: string
}

const Clients = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [client, setClient] = useState<Client>()

  const navigation: NavigationType = useNavigation()

  function changeModalVisibility(client?: Client) {
    setClient(client)
    return setModalVisible(!modalVisible)
  }

  function handleEdit(clientData?: Client) {
    navigation.navigate('RegistrationClient', { client: clientData })
  }

  return (
    <S.ClientsContainer>
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
              <S.ModalText>Selecione a opção</S.ModalText>
              <S.ModalCloseButton onPress={() => changeModalVisibility()}>
                <S.Icon name="closecircleo" size={RFValue(26)} />
              </S.ModalCloseButton>
            </S.ModalHeader>
            <S.ModalOptions>
              <S.ModalClientName>{client?.name}</S.ModalClientName>
              <Button
                style={{ marginBottom: 16 }}
                onPress={() => console.log('Criar')}
              >
                Criar Pedido
              </Button>
              <Button onPress={() => handleEdit(client)}>
                Editar Cadastro
              </Button>
            </S.ModalOptions>
          </S.ModalBody>
        </S.Overlay>
      </Modal>
      <S.Header>
        <BackButton />
        <S.HeaderText>{`Clientes`}</S.HeaderText>
        <S.Button onPress={() => navigation.navigate('RegistrationClient')}>
          <S.Icon name="pluscircleo" size={RFValue(35)} />
        </S.Button>
      </S.Header>

      <S.ListContainer>
        <S.ClientsList
          data={clients}
          keyExtractor={(_, idx) => `item_${idx}`}
          renderItem={({ item }: ClientsProps) => {
            return (
              <S.ClientWrapper onPress={() => changeModalVisibility(item)}>
                <S.ClientName>{item.name}</S.ClientName>
                <S.ClientTelephone>{item.telephone}</S.ClientTelephone>
              </S.ClientWrapper>
            )
          }}
        />
      </S.ListContainer>
    </S.ClientsContainer>
  )
}

export { Clients }
