import { View, Text, StyleSheet, Dimensions, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getRequest } from "../../api/api";
import Constants from "../../utils/Constants";
import Loader from "../../components/Loader";
import { POSTER_IMAGE_URL } from "../../config/config";
import CustomButton from "../../components/CustomButton";
import Rating from "../../components/Rating";

const deviceWidth = Dimensions.get("window").width;

const Favorites = (props) => {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      const data = await getRequest(`/tv/top_rated`);
      setFavorites(data.results);
      setLoading(false);
    };

    getFavorites();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={favorites}
          vertical
          renderItem={(item) => favoriteCard(item, props)}
        />
      )}
    </View>
  );
};

const favoriteCard = ({ item }, props) => {
  return (
    <View style={styles.infoCard}>
      <Image source={{ uri: `${POSTER_IMAGE_URL}${item.poster_path}` }} style={styles.posterImage} />
      <View style={styles.textInfo}>
        <Text style={styles.title}>{item.name}</Text>
        <Rating rating={item.vote_average} />
        <Text style={styles.info}>IMDb: {item.vote_average}</Text>
        <CustomButton
          text="Watch Now"
          type="Primary"
          onPress={() => {
            props.navigation.navigate("Show", { movieId: item.id });
          }}
        />
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
  posterImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  infoCard: {
    overflow: "hidden",
    flexDirection: "row",
    margin: 10,
  },
  textInfo: {
    justifyContent: "space-evenly",
    alignItems: "left",
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: Constants.primaryText,
    fontFamily: "GilroyBold",
    width: 150,
    marginTop: 10,
  },
  heading: {
    fontSize: 30,
    fontFamily: "GilroyBold",
    color: Constants.primaryText,
    margin: 10,
  },
  info: {
    color: Constants.tertiaryColor,
    fontFamily: "Gilroy",
  },
});

export default Favorites;
