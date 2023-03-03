import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import Constants from "../utils/Constants"

const Rating = ({ rating }) => {
  const ratingStars = Math.floor(rating / 2);
  const stars = [];
  let i = 1;
  while (i <= 5) {
    if (i <= ratingStars) {
      stars.push(
        <MaterialIcons key={i} name="star" size={16} style={{color: Constants.tertiaryColor}} />
      );
    } else { 
      stars.push(
        <MaterialIcons key={i} name="star-border" size={16} style={{color: Constants.tertiaryColor}} />
      );
    }

    i += 1
  }

  return <View style={styles.stars}>{stars}</View>;
};

const styles = StyleSheet.create({
  stars: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Rating;
