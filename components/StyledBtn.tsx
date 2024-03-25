import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useRouter } from 'expo-router';
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
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/[page]",
      params: { page: to },
    } as any);
  };

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
    <Pressable
    style={({ pressed }) => [
      styles.touchableStyle,
      pressed && { opacity: 0.5 }
    ]}
    onPress={handlePress}
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  touchableStyle: {
    marginVertical: hp("1%"),
  },
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
