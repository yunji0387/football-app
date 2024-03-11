import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import icons from "../constants/icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/constants/theme";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={icons.logo}
          contentFit="contain"
          style={styles.logoIcon}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>PL Pulse</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#3b5998",
    width: "100%",
    height: hp("10%"),
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoIcon: {
    width: 50,
    height: 50,
    // backgroundColor: "white",
  },
  titleContainer: {
    height: hp("4%"),
    borderBottomWidth: 3,
    borderBottomColor: "yellow",
  },
  title: {
    fontSize: hp("3%"),
    fontWeight: "bold",
    color: "white",
    textDecorationLine: "underline",
    textDecorationColor: COLORS.secondary,
  },
});
