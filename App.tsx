import { SafeAreaView, StatusBar } from 'react-native'
import { Detail } from './src/pages/Detail'
import { Home } from './src/pages/Home'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'default'} />
      <Detail />
    </SafeAreaView>
  )
}

export default App
