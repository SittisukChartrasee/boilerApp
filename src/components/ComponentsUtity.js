import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { 
  width: viewportwidth,
} = Dimensions.get('window')

export const Screen = styled.View`
  width: ${viewportwidth};
  height: auto;
`

export const Group = styled.View`
  height: ${props => props.h || 'auto'};
  paddingHorizontal: ${props => props.pd || '20'};
`