import { Dimensions, View, StyleSheet } from 'react-native'
import React from 'react'

import Constants from '../../utils/Constants'
import PopularSeries from '../../components/Popular'
import RecommendedSeries from '../../components/Recommended'

const deviceHeight = Dimensions.get('window').height;

const Home = (props) => {
  return (
    <View style={styles.container}>
      <PopularSeries navigation={props.navigation} />
      <RecommendedSeries navigation={props.navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.secondaryColor,
    height: deviceHeight,
  },
});

export default Home