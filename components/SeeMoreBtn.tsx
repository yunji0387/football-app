import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
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
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/[page]",
      params: { page: to },
    } as any);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.5 }
        ]}
        onPress={handlePress}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
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
