import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import Loader from "./Loader";
import { POSTER_IMAGE_URL } from "../config/config";
import Constants from "../utils/Constants";
import { getRequest } from "../api/api";
import Rating from "./Rating"
import CustomButton from "./CustomButton"

const RecommendedShows = (props) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getshows = async () => {
      const data = await getRequest("/tv/top_rated");
      setShows(data.results);
      setLoading(false);
    };

    getshows();
  }, []);

  return (
<View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={styles.heading}>Recommendations</Text>
          <FlatList
            keyExtractor={(item) => item.id}
            data={shows}
            vertical
            renderItem={(item) => showCard(item, props)}
          />
        </View>
      )}
    </View>
  )
}

const showCard = ({ item }, props) => {
  return (
    <TouchableOpacity style={styles.infoCard}       onPress={() => {
      props.navigation.navigate("Show", { movieId: item.id });
    }}>
      <Image source={{ uri: `${POSTER_IMAGE_URL}${item.poster_path}` }} style={styles.posterImage} />
      <View style={styles.textInfo}>
        <Text style={styles.title}>{item.name}</Text>
        <Rating rating={item.vote_average} />
        <Text style={styles.info}>IMDb: {item.vote_average}</Text>
        <CustomButton text="Watch Now" type="Primary" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  infoCard: {
    overflow: 'hidden',
    flexDirection: 'row',
    margin: 10,
  },
  textInfo: {
    justifyContent: 'space-evenly',
    alignItems: 'left',
    padding: 20,
  },
  posterImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  heading: {
    fontSize: 30,
    fontFamily: "GilroyBold",
    color: Constants.primaryText,
    margin: 10,
  },
  title: {
    fontSize: 18,
    color: Constants.primaryText,
    fontFamily: "GilroyBold",
    width: 150,
    marginTop: 10,
  },
  info: {
    color: Constants.tertiaryColor,
    fontFamily: "Gilroy",
  }
});

export default RecommendedShows