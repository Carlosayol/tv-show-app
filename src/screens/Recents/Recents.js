import { View, Text, Dimensions, FlatList, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";

import Loader from "../../components/Loader";
import { POSTER_IMAGE_URL_B } from "../../config/config";
import Constants from "../../utils/Constants";
import { getRequest } from "../../api/api";
import Rating from "../../components/Rating";

const deviceWidth = Dimensions.get("window").width;

const Recents = (props) => {
  const [loading, setLoading] = useState(true);
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    const getRecents = async () => {
      const data = await getRequest(`/tv/airing_today`);
      setRecents(data.results);
      setLoading(false);
    };

    getRecents();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={recents}
          vertical
          showsVerticalScrollIndicator={false}
          renderItem={(item) => recentCard(item, props)}
        />
      )}
    </View>
  );
};

const recentCard = ({ item }, props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: `${POSTER_IMAGE_URL_B}${item.poster_path}` }} style={styles.posterImage} />
      <Text style={styles.heading}>{item.name}</Text>
      <Rating rating={item.vote_average} />
      <View style={{ width: "100%", flexDirection: "row", justifyContent: "flex-end" }}>
        <Text
          style={styles.moreText}
          onPress={() => {
            props.navigation.navigate("RecentDetail", { showId: item.id, poster_path: item.poster_path });
          }}
        >
          Go to view &gt;
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.secondaryColor,
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: deviceWidth,
    padding: 40,
    alignItems: "center",
  },
  posterImage: {
    height: 250,
    width: "90%",
    borderRadius: 10,
  },
  textInfo: {
    justifyContent: "space-evenly",
    alignItems: "left",
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontFamily: "GilroyBold",
    color: Constants.primaryText,
    marginVertical: 20,
  },
  info: {
    color: Constants.tertiaryColor,
    fontFamily: "Gilroy",
  },
  moreText: {
    fontSize: 20,
    fontFamily: "Gilroy",
    color: Constants.primaryColor,
    margin: 20,
  },
});

export default Recents;
