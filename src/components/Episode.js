import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import React from "react";

import { POSTER_IMAGE_URL_BG } from "../config/config";
import Constants from "../utils/Constants";

const deviceWidth = Dimensions.get("window").width;

const Episode = ({ ep, poster_path }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ep.item.episode_number} Episode</Text>
      <Image source={{ uri: `${POSTER_IMAGE_URL_BG}${poster_path}` }} style={styles.posterImage} />
      <Text style={styles.heading}>{ep.item.name}</Text>
      <Text style={styles.info}>IMDb: {ep.item.vote_average}</Text>
      <Text style={styles.description}>{ep.item.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    padding: 25,
    alignItems: "left",
  },
  posterImage: {
    height: 250,
    width: "80%",
    borderRadius: 10,
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontFamily: "GilroyBold",
    color: Constants.primaryText,
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    color: Constants.primaryText,
    fontFamily: "GilroyBold",
    width: 150,
    marginVertical: 20,
  },
  info: {
    color: Constants.tertiaryColor,
    fontFamily: "Gilroy",
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    color: Constants.primaryText,
    fontFamily: "Gilroy",
  },
});

export default Episode;
