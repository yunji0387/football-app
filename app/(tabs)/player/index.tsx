import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import TopLogo from "@/components/TopLogo";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Player() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <TopLogo />
        <View style={styles.homeContainer}>
            <Text style={styles.title}>Player</Text>
            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
            <EditScreenInfo path="app/(tabs)/player/index.tsx" />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
    },
    contentContainer: {
      paddingBottom: hp("9%"),
      alignItems: "center",
      justifyContent: "center",
    },
    homeContainer: {
      height: 500,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "pink",
      borderWidth: hp("2%"),
      borderColor: "yellow",
      marginTop: hp("5%"),
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
  });