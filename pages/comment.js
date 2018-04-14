import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'

import { Field, reduxForm } from 'redux-form'
import Link from 'next/link'

import withApp from '../components/withApp'
import styled, { css } from 'react-emotion'

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 200px;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Work = () => (
  <Wrapper>
    <label>
      Comment<br />
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </Wrapper>
)

export default Work
