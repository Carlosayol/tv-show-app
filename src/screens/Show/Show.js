import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { POSTER_IMAGE_URL_BG } from "../../config/config";
import Constants from "../../utils/Constants";
import { getRequest } from "../../api/api";
import Rating from "../../components/Rating";
import CustomButton from "../../components/CustomButton";
import Loader from "../../components/Loader";

const deviceHeight = Dimensions.get("window").height;

const Show = (props) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();
  const params = props.route.params;

  useEffect(() => {
    const getShowDetails = async () => {
      const data = await getRequest(`/tv/${params.movieId}`);
      setDetail(data);
      setLoading(false);
    };

    getShowDetails();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <View style={{ alignItems: "center", justifyContent: "space-evenly", height: "100%" }}>
          <View style={{ position: "relative" }}>
            <Image source={{ uri: `${POSTER_IMAGE_URL_BG}${detail.backdrop_path}` }} style={styles.posterImage} />
            {detail.in_production ? (
              <MaterialIcons
                name="play-circle-fill"
                size={80}
                color={Constants.primaryColor}
                style={{ position: "absolute", top: "40%", left: "23%" }}
              />
            ) : null}
          </View>

          <Text style={styles.heading}>{detail.name}</Text>
          <Rating rating={detail.vote_average} />
          <Text style={styles.info}>IMDb: {detail.vote_average}</Text>
          <CustomButton
            onPress={() => {
              props.navigation.navigate("ShowDetail", { showId: detail.id });
            }}
            text="Watch Now"
            type="Primary"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.secondaryColor,
    height: deviceHeight,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  heading: {
    fontSize: 30,
    fontFamily: "GilroyBold",
    color: Constants.primaryText,
    margin: 10,
  },
  posterImage: {
    height: 350,
    width: 250,
    borderRadius: 20,
  },
  info: {
    color: Constants.tertiaryColor,
    fontFamily: "Gilroy",
  },
});

export default Show;
