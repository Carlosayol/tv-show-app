import { View, Text, StyleSheet, Dimensions, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import Loader from "../../components/Loader";
import Constants from "../../utils/Constants";
import { getRequest } from "../../api/api";
import { POSTER_IMAGE_URL_B } from "../../config/config";

const deviceWidth = Dimensions.get("window").width;

const RecentDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const [season, setSeason] = useState([]);
  const params = props.route.params;

  useEffect(() => {
    const getSeasonDetails = async () => {
      const data = await getRequest(`/tv/${params.showId}`);
      const dataSeason = await getRequest(`/tv/${params.showId}/season/${data.number_of_seasons}`);
      setSeason(dataSeason);
      setLoading(false);
    };

    getSeasonDetails();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={season.episodes}
          vertical
          showsVerticalScrollIndicator={false}
          renderItem={(item) => episodeCard(item, season.poster_path ?? params.poster_path)}
        />
      )}
    </View>
  );
};

const episodeCard = ({ item }, poster_path) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.episode_number} Episode</Text>
      <View style={{ position: "relative" }}>
      <Image source={{ uri: `${POSTER_IMAGE_URL_B}${poster_path}` }} style={styles.posterImage} />
      <MaterialIcons
                name="play-circle-fill"
                size={80}
                color={Constants.primaryColor}
                style={{ position: "absolute", top: "33%", left: "40%" }}
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
  card: {
    width: deviceWidth,
    padding: 40,
  },
  title: {
    fontSize: 18,
    color: Constants.primaryText,
    fontFamily: "GilroyBold",
    width: 150,
    marginVertical: 20,
  },
  posterImage: {
    height: 250,
    width: "100%",
    borderRadius: 10,
  },
});

export default RecentDetail;
