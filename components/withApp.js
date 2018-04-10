import { Provider } from 'react-redux'

import store from '../duck'
import App from './App'

const withApp = Child => props => (
  <Provider store={store}>
    <App>
      <Child {...props} />
    </App>
  </Provider>
)

export default withApp
