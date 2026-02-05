import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/iceCreamContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import NewCakeContainer from './components/NewCakeContainer'

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  )
}

export default App
