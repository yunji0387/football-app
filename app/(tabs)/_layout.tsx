import { Tabs, Slot } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import icons from "../../constants/icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/constants/theme";

export default function TabLayout() {
  const getTabBarIconContainerStyle = (focused: boolean) => ({
    ...styles.tabIconContainer,
    borderTopColor: focused ? COLORS.secondary : COLORS.grey,
    borderTopWidth: focused ? hp("0.25%") : 0,
  });

  const getTabIconStyle = (focused: boolean) => ({
    ...styles.tabIcon,
    tintColor: focused ? COLORS.white : COLORS.grey,
  });

  const getTabLabelStyle = (focused: boolean) => ({
    ...styles.tabLabel,
    color: focused ? COLORS.white : COLORS.grey,
  });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: COLORS.primary,
          borderTopColor: COLORS.grey,
          borderTopWidth: hp("0.25%"),
          height: hp("8%"),
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="news"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={getTabBarIconContainerStyle(focused)}>
                <Image
                  source={icons.news}
                  contentFit="contain"
                  style={getTabIconStyle(focused)}
                />
                <Text style={getTabLabelStyle(focused)}>News</Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="match"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={getTabBarIconContainerStyle(focused)}>
                <Image
                  source={icons.match}
                  contentFit="contain"
                  style={getTabIconStyle(focused)}
                />
                <Text style={getTabLabelStyle(focused)}>Match</Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={getTabBarIconContainerStyle(focused)}>
                <Image
                  source={icons.latest}
                  contentFit="contain"
                  style={getTabIconStyle(focused)}
                />
                <Text style={getTabLabelStyle(focused)}>Latest</Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={getTabBarIconContainerStyle(focused)}>
                <Image
                  source={icons.stats}
                  contentFit="contain"
                  style={getTabIconStyle(focused)}
                />
                <Text style={getTabLabelStyle(focused)}>Stats</Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={getTabBarIconContainerStyle(focused)}>
                <Image
                  source={icons.more}
                  contentFit="contain"
                  style={getTabIconStyle(focused)}
                />
                <Text style={getTabLabelStyle(focused)}>More</Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="player/index"
        options={{
          title: "",
          href: null,
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={getTabBarIconContainerStyle(focused)}>
                <Image
                  source={icons.logo}
                  contentFit="contain"
                  style={getTabIconStyle(focused)}
                />
                <Text style={getTabLabelStyle(focused)}>player</Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: hp("0.5%"),
    top: -hp("0.25%"),
  },
  tabIcon: {
    width: hp("5%"),
    height: hp("5%"),
  },
  tabLabel: {
    fontSize: hp("1.5%"),
    alignItems: "center",
    justifyContent: "center",
  },
});
