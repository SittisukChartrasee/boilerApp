import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native'
import styled from 'styled-components/native'
import { Group } from './ComponentsUtity'
import { Margin } from '../styles'
import animate from '../containers/Hoc/animation/animation-hoc'

@animate
export default class extends React.Component {

  state = {
    idenCard: undefined,
    currentScroll: 0,
    initAnimation: 0,
  }

  componentWillReceiveProps = (props) => {
    this.setState({ idenCard: props.idItem, initAnimation: props.initAnimation })
  }

  onSelectValue = (data, idenCard) => data.filter((key, index) => (index === idenCard))

  render() {

    const { 
      data,
      currentS, 
      onPressAniPopUp, 
      onPressAniPopOut 
    } = this.props

    const { 
      idenCard,
      initAnimation,
      currentScroll 
    } = this.state

    const styles = {
      styledefault: {
        marginTop: 50,
      }, 
      tera: {
        backgroundColor: 'black',
        height: 50,
      }
    }

    const tocss = initAnimation && initAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -50],
    })

    console.log(currentScroll, currentS)

    if (idenCard !== undefined && this.onSelectValue(data, idenCard)[0] - 1 === idenCard) {
      return (
        <ScrollView>
          <Group pd="0" key={idenCard}>
            <Animated.View style={[ styles.styledefault ,{ transform: [{ translateY: tocss }] }]}>
              <TouchableOpacity onPress={() => onPressAniPopOut(currentScroll)}>
                <Animated.View style={[ styles.tera, { borderTopLeftRadius: tocss, borderTopRightRadius: tocss }]} />
                <Body bc="green" style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, color: 'white' }}>{idenCard}</Text>
                </Body>
                <Animated.View style={[ styles.tera, { borderBottomLeftRadius: tocss, borderBottomRightRadius: tocss }]} />
              </TouchableOpacity>
            </Animated.View>
          </Group>
        </ScrollView>
      )
    }

    return (
      <ScrollView 
        ref={scroll => {
          if (scroll !== null && currentS !== 0) {
            scroll.scrollTo({ y: currentS, animated: false })
            setTimeout(() => onPressAniPopOut(0), 100)
          }
        }}
        scrollEventThrottle={100} 
        onScroll={(event) => this.setState({ currentScroll: event.nativeEvent.contentOffset.y })}
      >
        <View style={{ height: 50, alignItems: 'flex-start', justifyContent: 'center', marginTop: 30, marginLeft: 20 }}>
          <Text style={{ fontSize: 20 }}>HEADER</Text>
          <Text style={{ fontSize: 10 }}>PROJECT BOILERAPP</Text>
        </View>
        {
          data.map((key, index) => (
            <Group key={index}>
              <Margin mt="20" />
              <TouchableOpacity onPress={() => onPressAniPopUp(index)}>
                <Header bc="purple" />
                <Body bc="green" style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, color: 'white' }}>{index}</Text>
                </Body>
                <Footer bc="purple" />
              </TouchableOpacity>
            </Group>
          ))
        }
      </ScrollView>
    )
    
  }
}

const Header = styled.View`
  backgroundColor: ${props => props.bc || '#ccc'};
  height: 50;
  borderTopRightRadius: ${props => props.btrr || '5'};
  borderTopLeftRadius: ${props => props.btlr || '5'};
`

const Body = styled.View`
  backgroundColor: ${props => props.bc || '#ccc'};
  height: 120;
`

const Footer = styled.View`
  backgroundColor: ${props => props.bc || '#ccc'};
  height: 50;
  borderBottomRightRadius: ${props => props.btrr || '5'};
  borderBottomLeftRadius: ${props => props.btlr || '5'};
`

