import React from 'react'
import { View, Text } from 'react-native'

export default class extends React.Component {
  static name = ''

  constructor(props) {
    super(props)
    const name = 'test Eslint'
    console.log(name)
  }

  render() {
    return (
      <View style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
        <Text>Text Welcome</Text>
      </View>
    )
  }
}
