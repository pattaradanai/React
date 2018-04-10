import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'

import { Field, reduxForm } from 'redux-form'
import Link from 'next/link'
import css from '../style.css'

import withApp from '../components/withApp'
const Home = () => (
  <div className={css.wrapper}>
    <section className={css.boxes}>
      <div className={css.box}>
        <h3>Analytics</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
      <div className={css.box}>
        <h3>Marketing</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
      <div className={css.box}>
        <h3>Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
      <div className={css.box}>
        <h3>Support</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
      <div className={css.box}>
        <h3>Support</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
      <div className={css.box}>
        <h3>Support</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
    </section>
  </div>
)

export default Home
