import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'
import styled, { css } from 'react-emotion'
import { Field, reduxForm } from 'redux-form'
import Link from 'next/link'

import { teacher } from '../duck/app'
import withApp from '../components/withApp'

const subjectList = () => (
  <div>
    <h2>First name</h2>
    <h2>Last name</h2>
    <ul>
      <li>
        <Link href="/login">login</Link>
      </li>
    </ul>
  </div>
)

export default subjectList
