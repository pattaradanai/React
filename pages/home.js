import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import Link from 'next/link'
import Rotation from 'react-rotation'

import css from '../style.css'
import withApp from '../components/withApp'

const Card = () => <div>test</div>

const Home = props => {
  const cards = [
    {
      id: 1,
      firstname: 'test',
    },
    {
      id: 1,
      firstname: 'test',
    },
    {
      id: 1,
      firstname: 'test',
    },
    {
      id: 1,
      firstname: 'test',
    },
    {
      id: 1,
      firstname: 'test',
    },
  ]
  return (
    <div className={css.wrapper}>
      <header>
        <div>
          <Link href="/login">
            <img src="./static/login.svg" />
          </Link>
        </div>
      </header>

      <Rotation onChange={aaa} scroll={false}>
        <img src="./static/bottle/001.jpeg" />
        <img src="./static/bottle/002.jpeg" />
        <img src="./static/bottle/003.jpeg" />
        <img src="./static/bottle/004.jpeg" />
      </Rotation>

      {cards.map(user => <Card key={user.id}>{user.firstname}</Card>)}
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
      </section>
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
      </section>
    </div>
  )
}

export default withApp(Home)
