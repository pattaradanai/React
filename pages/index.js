import { connect } from 'react-redux'
import { compose } from 'recompose'
import Rotation from 'react-rotation'

import withApp from '../components/withApp'
import css from '../style.css'

export default () => (
  <div className={css.example}>
    Welcome React App with Next.js
    <Rotation>
      <img src="../images/001.jpeg" />
      <img src="../images/002.jpeg" />
      <img src="../images/003.jpeg" />
      <img src="../images/004.jpeg" />
    </Rotation>
  </div>
)
