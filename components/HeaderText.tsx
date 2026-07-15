import { StyleSheet, View, Text } from "react-native";
import { wp, hp } from "@/constants/responsive";
import { COLORS } from "@/constants/theme";

type HeaderTextProps = {
  title: string;
};

export default function HeaderText({
    title,
}: HeaderTextProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: wp("2%"),
    width: wp("100%"),
    height: hp("5%"),
  },
  title: {
    fontSize: hp("3%"),
    fontWeight: "bold",
    color: COLORS.white,
  },
});
