import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'
import styled, { css } from 'react-emotion'
import { Field, reduxForm } from 'redux-form'
import Link from 'next/link'

import { login } from '../duck/app'
import withApp from '../components/withApp'

const WrapperHome = styled.div`
  padding: 40px;
  width: 274px;
  background-color: #f7f7f7;
  margin: 0 auto 10px;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`
const NevBar = styled.div`
    style="display:none;
    z-index:2;
    width:40%;
    min-width:300px"

`

const ContactReduxForm = props => {
  const { handleSubmit } = props
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h> Login </h>

          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text" />
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

const ContactForm = reduxForm({
  form: 'contact',
})(ContactReduxForm)

export default compose(
  withApp,
  connect(
    state => ({
      currentUser: state.currentUser,
    }),
    { login },
  ),
  withHandlers({
    onSubmit: props => value => {
      login(value)
    },
  }),
 
)(props => {
  const { login, currentUser, onChangeUsername, onSubmit } = props
  return (
    <WrapperHome>
      <ContactForm onSubmit={onSubmit} />
    </WrapperHome>
  )
})
