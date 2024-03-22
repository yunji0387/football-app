import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import icons from "../constants/icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/constants/theme";

export default function TopLogo() {
  return (
    <View style={styles.container}>
      <Image source={icons.logo} contentFit="contain" style={styles.logoIcon} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>PL Pulse</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: wp("1%"),
    height: hp("7%"),
  },
  logoIcon: {
    width: hp("7%"),
    height: hp("7%"),
  },
  titleContainer: {
    height: hp("4%"),
    borderBottomWidth: hp("0.5%"),
    borderBottomColor: "yellow",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: hp("3%"),
    fontWeight: "bold",
    height: hp("4%"),
    color: COLORS.white,
  },
});
