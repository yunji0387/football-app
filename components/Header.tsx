import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>PL Pulse</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // backgroundColor: "#3b5998",
    width: "100%",
    height: hp("10%"),
    alignItems: "center",
    justifyContent: "flex-end",
  },
  titleContainer: {
    borderBottomWidth: 3,
    borderBottomColor: "yellow",
  },
  title: {
    fontSize: hp("3%"),
    fontWeight: "bold",
    color: "white",
  },
});
