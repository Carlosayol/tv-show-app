import { Dimensions, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Constants from '../../utils/Constants'
import PopularSeries from '../../components/Popular'
import RecommendedSeries from '../../components/Recommended'

const deviceHeight = Dimensions.get('window').height;

const Home = () => {
  return (
    <View style={styles.container}>
      <PopularSeries />
      <RecommendedSeries />
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