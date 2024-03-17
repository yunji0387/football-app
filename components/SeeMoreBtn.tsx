import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/constants/theme";

type SeeMoreButtonProps = {
  to: string;
  title?: string;
};

export default function SeeMoreButton({
  to,
  title = "See More",
}: SeeMoreButtonProps) {
  return (
    <View style={styles.container}>
      <Link
        href={
          {
            pathname: "/[page]",
            params: { page: to },
          } as any
        }
        style={styles.button}
      >
        <Text style={styles.text}>{title}</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: hp("3%"),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: wp("3%"),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: hp("2%"),
    fontWeight: "bold",
  },
});
