import React from 'react'
import { Animated, Dimensions } from 'react-native'

const { width: viewportwidth, height: viewportheight } = Dimensions.get('window')

export default (WrapperComponents) => {
  class animationhoc extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        initAnimation: new Animated.Value(0),
        idItem: undefined,
        currentS: 0,
      }
      this.allFunction = {
        onPressAniPopUp: this.onPressAniPopUp,
        onPressAniPopOut: this.onPressAniPopOut
      }
    }

    onPressAniPopUp = (id) => {
      this.state.initAnimation.setValue(5)
      Animated.spring(
        this.state.initAnimation,
        {
          toValue: 1,
          friction: 5,
        }
      ).start();

      this.setState({ idItem: id })
    }

    onPressAniPopOut = (currentScroll) => {
      this.state.initAnimation.setValue(-20)
      // Animated.spring(
      //   this.state.initAnimation,
      //   {
      //     toValue: 0,
      //     friction: 0,
      //   }
      // ).start();
      this.setState({ idItem: undefined, currentS: currentScroll })
    }

    render = () => <WrapperComponents {...this.allFunction} {...this.props} {...this.state} />
  }
  return animationhoc
}