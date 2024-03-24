import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/constants/theme";

type StyledBtnProps = {
  to: string;
  title?: string;
};

export default function StyledBtn({ to, title }: StyledBtnProps) {
  return (
    <View style={styles.container}>
      <Link
        href={
          {
            pathname: "/[page]",
            params: { page: to },
          } as any
        }
        style={styles.btnContainer}
      >
        <Text style={styles.text}>{title}</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("3%"),
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: wp("2%"),
    // backgroundColor: "pink",
  },
  btnContainer: {
    width: "100%",
    paddingVertical: hp("0.25%"),
    paddingHorizontal: wp("1.25%"),
    alignItems: "flex-start",
    justifyContent: "center",
    height: hp("3.5%"),
    borderLeftWidth: hp("0.1%"),
    borderTopWidth: hp("0.1%"),
    borderRightWidth: hp("0.25%"),
    borderBottomWidth: hp("0.25%"),
    borderBottomColor: COLORS.secondary,
    borderRightColor: COLORS.secondary,
    borderTopColor: COLORS.white,
    borderLeftColor: COLORS.white,
    // backgroundColor: "green",
  },
  text: {
    color: COLORS.white,
    fontSize: hp("2%"),
    fontWeight: "bold",
    // backgroundColor: "pink",
  },
});
