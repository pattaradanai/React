import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'
//import styled, { css } from 'react-emotion'
import { Field, reduxForm } from 'redux-form'
import Link from 'next/link'

import { teacher } from '../duck/app'
import withApp from '../components/withApp'
import css from '../style.css'
import Head from 'next/head'

// const StudentTable = json => {
//   const p = document.createElement('p')
//   p.appendChild(json[0].name)
// }

const subjectList = () => (
  <div>
    <Head>
      <title>Accordion list</title>
    </Head>
    <div className={css.contentBox}>
      <h2>First name Last name</h2>
      <input type="text" name="sdsd" />
      <div className={css.createSubBtn}>
        <input id="create-tab" type="checkbox" name="panel" />
        <label for="create-tab">Add New Subject</label>
        <div className={css.content}>
          <p>Subject Name: </p>
        </div>
      </div>
      <div className={css.tablv1}>
        <input id="tab1lv1-1" type="checkbox" name="panel" />
        <label for="tab1lv1-1">subject01</label>
        <div className={css.tablv2}>
          <input id="tab1lv2-1" type="checkbox" name="panel" />
          <label for="tab1lv2-1">class 1/1</label>
          <div className={css.table}>
            <table>
              <tr>
                <th className={css.nocol} rowSpan="2">
                  No.
                </th>
                <th rowSpan="2">name</th>
                <th colSpan="20">work</th>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td className={css.nocol}>01</td>
                <td className={css.namecol}>patiharn pukdee</td>
                <td>
                  <img src="https://cdn2.iconfinder.com/data/icons/pointed-edge-web-navigation/130/tick-green-512.png" />
                </td>
                <td>
                  <img src="https://cdn2.iconfinder.com/data/icons/pointed-edge-web-navigation/130/tick-green-512.png" />
                </td>
                <td>
                  <img src="https://cdn2.iconfinder.com/data/icons/pointed-edge-web-navigation/130/tick-green-512.png" />
                </td>
                <td>
                  <img src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-2/512/warning_alert_attention_search-512.png" />
                </td>
                <td>
                  <img src="https://cdn2.iconfinder.com/data/icons/pointed-edge-web-navigation/101/cross-red-256.png" />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className={css.tablv2}>
          <input id="tab1lv2-2" type="checkbox" name="panel" />
          <label for="tab1lv2-2">class 1/2</label>
        </div>
      </div>
      <div className={css.tablv1}>
        <input id="tab2lv1-2" type="checkbox" name="panel" />
        <label for="tab2lv1-2">subject02</label>
        <div className={css.tablv2}>
          <input id="tab2lv2-1" type="checkbox" name="panel" />
          <label for="tab2lv2-1">class 2/2</label>
        </div>
      </div>
    </div>
  </div>
)

// subjectList.getInitialProps = async ({ req }) => {
//   const res = await fetch('http://localhost:8080/student_list')
//   const json = await res.json()
//   return { json }
// }

export default subjectList
