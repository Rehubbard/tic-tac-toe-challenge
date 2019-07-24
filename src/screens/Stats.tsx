import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView, NavigationScreenProps } from "react-navigation";

import { Text } from '../components'

type Props = {

} & NavigationScreenProps

class Stats extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text type='bold'>Stats Screen</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Stats