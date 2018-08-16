import React from 'react'
import { Screen } from '../components/ComponentsUtity'
import CardSample from '../components/CardSample'
import data from '../utity/data'
// import Card from '../components/Card'

export default class extends React.Component {

  static navigatorStyle = {
    navBarHidden: true
  }

  onPress = (key) => {
    // console.log(key)
  }

  render() {
    return (
      <Screen style={{ justifyContent: 'flex-start' }}>
        {/* <Card data={[1,2,3,4,5,6,7,8,9]} /> */}
        <CardSample data={data} />
      </Screen>
    )
  }
}
