import React from 'react';
import store from './redux/store'
import * as actions from './redux/actions/ActionRoot'
import registerScreen, { beforlogin } from './config/router'

export default class extends React.Component {
  constructor(props) {
    super(props)
    registerScreen()
    beforlogin()     
    store.subscribe(this.updateStore)
    store.dispatch(actions.initailAction())
  }

  updateStore = () => {
    const { root } = store.getState().root
    if (this.currentRoot !== root) {
      this.currentRoot = root
      this.startApp(root)
    }
  }

  startApp = (root) => {
    switch (root) {
      case 'beforlogin':
        beforlogin()     
        break
    
      default:
        console.log('not found')
        break
    }
  }
}
