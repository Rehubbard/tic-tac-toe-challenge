import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation';

type Props = {

}

class Drawer extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>

      <DrawerItems {...this.props} />
      </SafeAreaView> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Drawer