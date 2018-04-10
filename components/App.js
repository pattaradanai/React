import { compose } from 'recompose'
import styled from 'react-emotion'
import { injectGlobal } from 'emotion'
import Menu from './Menu'
import withApp from './withApp'

injectGlobal`
  * {
    box-sizing: border-box;
  }
`

export default props => (
  <div>
    <Menu />
    {props.children}
  </div>
)
