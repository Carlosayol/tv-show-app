import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import Loader from "./Loader";
import { POSTER_IMAGE_URL } from "../config/config"
import Constants from "../utils/Constants"
import { getRequest } from "../api/api"

const PopularMovies = (props) => {
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getSeries = async () => {
      const data = await getRequest('/tv/popular');
      setSeries(data.results);
      setLoading(false);
    };

    getSeries();
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
            data={series}
            horizontal
            renderItem={(item) => serieCard(item, props)}
          />
        </View>
      )}
    </View>
  );
};

const serieCard = ({item}, props) => {
  return (
    <View
      style={{marginHorizontal: 10}}>
      <Image
        source={{uri: `${POSTER_IMAGE_URL}${item.poster_path}`}}
        style={styles.posterImage}
      />
    </View>
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
});

export default PopularMovies;
