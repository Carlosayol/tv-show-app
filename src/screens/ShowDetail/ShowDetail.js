import { View, Text, Dimensions, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import { getRequest } from "../../api/api";
import Loader from "../../components/Loader";
import Constants from "../../utils/Constants";
import Episode from "../../components/Episode";

const deviceHeight = Dimensions.get("window").height;

const ShowDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const [season, setSeason] = useState();
  const params = props.route.params;

  useEffect(() => {
    const getSeasonDetails = async () => {
      const data = await getRequest(`/tv/${params.showId}/season/1`);
      setSeason(data);
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
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => <Episode ep={item} poster_path={season.poster_path} />}
        />
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
  },
});

export default ShowDetail;
