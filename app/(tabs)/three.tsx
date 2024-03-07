import { View, Text } from 'react-native'
import React from 'react'
import EditScreenInfo from '@/components/EditScreenInfo'

export default function three() {
  return (
    <View>
      <Text>three</Text>
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  )
}