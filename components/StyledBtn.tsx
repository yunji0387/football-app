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
  title: string;
  styleNum?: number;
};

export default function StyledBtn({ to, title, styleNum = 1 }: StyledBtnProps) {
  let styleContainer;
  switch (styleNum) {
    case 1:
        styleContainer = styles.styleContainer1;
      break;
    case 2:
        styleContainer = styles.styleContainer2;
      break;
    default:
        styleContainer = styles.styleContainer1;
  }

    return (
    <Link
      href={
        {
          pathname: "/[page]",
          params: { page: to },
        } as any
      }
      style={{ marginVertical: hp("1%") }}
    >
      <View style={styles.container}>
        <View style={[styles.subContainer, styleContainer]}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.navigationIcon}>
            <Text style={styles.navigationText}>{">"}</Text>
          </View>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("96%"),
    height: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    width: "100%",
    height: "100%",
    paddingVertical: hp("0.25%"),
    paddingHorizontal: wp("2.25%"),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  styleContainer1: {
    borderLeftWidth: hp("0.1%"),
    borderTopWidth: hp("0.1%"),
    borderRightWidth: hp("0.25%"),
    borderBottomWidth: hp("0.25%"),
    borderBottomColor: COLORS.secondary,
    borderRightColor: COLORS.secondary,
    borderTopColor: COLORS.white,
    borderLeftColor: COLORS.white,
  },
  styleContainer2: {
    backgroundColor: COLORS.darkGrey,
  },
  titleContainer: {
    width: "90%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  titleText: {
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.white,
    fontSize: hp("2%"),
    fontWeight: "bold",
  },
  navigationIcon: {
    maxWidth: "10%",
    alignItems: "center",
    justifyContent: "center",
    width: hp("2.5%"),
    height: hp("2.5%"),
    borderCurve: "circular",
    borderRadius: hp("20%"),
    backgroundColor: COLORS.white,
  },
  navigationText: {
    textAlign: "center",
    width: "100%",
    height: "100%",
    color: COLORS.primary,
    fontSize: hp("1.5%"),
    fontWeight: "bold",
  },
});
