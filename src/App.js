import React from 'react';
import registerScreen, { beforlogin } from './config/router'

export default class extends React.Component {
  constructor(props) {
    super(props)
    registerScreen()
    beforlogin()
  }
}
