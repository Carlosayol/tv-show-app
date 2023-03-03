import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import Loader from "./Loader";
import { POSTER_IMAGE_URL } from "../config/config";
import Constants from "../utils/Constants";
import { getRequest } from "../api/api";
import Rating from "./Rating";

const PopularShows = (props) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const data = await getRequest("/tv/popular");
      setShows(data.results);
      setLoading(false);
    };

    getShows();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={styles.heading}>Popular</Text>
          <FlatList
            keyExtractor={(item) => item.id}
            data={shows}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => showCard(item, props)}
          />
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text style={styles.moreText}>See All</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const showCard = ({ item }, props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Show", { showId: item.id });
      }}
      style={{ marginHorizontal: 10 }}
    >
      <Image source={{ uri: `${POSTER_IMAGE_URL}${item.poster_path}` }} style={styles.posterImage} />
      <Text style={styles.title}>{item.name}</Text>
      <Rating rating={item.vote_average} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 15,
    color: Constants.primaryText,
    fontFamily: "GilroyBold",
    textAlign: "left",
    width: 150,
    marginTop: 10,
    marginBottom: 10,
  },
  moreText: {
    fontSize: 20,
    fontFamily: "Gilroy",
    color: Constants.primaryColor,
    margin: 20,
  },
});

export default PopularShows;
