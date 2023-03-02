import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Constants from '../../utils/Constants'
import PopularMovies from '../../components/Popular'

const Home = () => {
  return (
    <View style={styles.container}>
      <PopularMovies />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home