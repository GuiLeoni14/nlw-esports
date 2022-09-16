import React, { ReactNode } from 'react'
import { ImageBackground } from 'react-native'

import { styles } from './styles'

interface BackgroundProps{
  children: ReactNode;
}

export function Background({children}: BackgroundProps) {
  return <ImageBackground style={styles.container} source={}>{children}</ImageBackground>
}
