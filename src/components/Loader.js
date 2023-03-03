import React from "react";
import { ActivityIndicator } from "react-native";

import Constants from "../utils/Constants";

const Loader = () => {
  return <ActivityIndicator size="large" color={Constants.primaryText} />;
};

export default Loader;
