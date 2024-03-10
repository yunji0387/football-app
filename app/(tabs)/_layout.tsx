import { Tabs } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import icons from "../../constants/icons";
import { COLORS } from "@/constants/theme";

export default function TabLayout() {
  const getTabBarIconContainerStyle = (focused: boolean) => ({
    ...styles.tabIconContainer,
    borderTopColor: focused ? COLORS.secondary : COLORS.grey,
    borderTopWidth: focused ? 2 : 0,
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
          borderTopWidth: 2,
          height: 72,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="standings"
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
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 6,
    top: -2,
    // paddingTop: 7,
    // height: 72,
    // backgroundColor: COLORS.grey,
  },
  tabIcon: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "space-between",
    width: 32,
    height: 32,
  },
  tabLabel: {
    // flex: 1,
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

// const styles = StyleSheet.create({
//   viewStyle: {
//     alignItems: "center",
//     justifyContent: "flex-end",
//     flex: 1,
//     backgroundColor: COLORS.grey,
//     // paddingTop: 5,
//   },
//   imageStyle: {
//     width: 32,
//     height: 32,
//     // backgroundColor: COLORS.grey,
//     // tintColor: focused ? COLORS.white : undefined,
//   },
//   textStyle: {
//     fontSize: 12,
//     // height: 20,
//     // backgroundColor: COLORS.grey,
//   },
// });

//---------------

// import React from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { Link, Tabs } from "expo-router";
// import { StyleSheet, Pressable } from "react-native";

// import Colors from "@/constants/Colors";
// import { useColorScheme } from "@/components/useColorScheme";
// import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
//         // Disable the static render of the header on web
//         // to prevent a hydration error in React Navigation v6.
//         headerShown: useClientOnlyValue(false, true),
//       }}
//     >
//       <Tabs.Screen
//         name="standings"
//         options={{
//           title: "Standings",
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="newspaper-o" color={color} />
//           ),
//           headerRight: () => (
//             <Link href="/modal" asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="info-circle"
//                     size={25}
//                     color={Colors[colorScheme ?? "light"].text}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="match"
//         options={{
//           title: "match",
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="calendar-o" color={color} />
//           ),
//           headerRight: () => (
//             <Link href="/modal" asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="info-circle"
//                     size={25}
//                     color={Colors[colorScheme ?? "light"].text}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="futbol-o" color={color} />
//           ),
//           headerRight: () => (
//             <Link href="/modal" asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="info-circle"
//                     size={25}
//                     color={Colors[colorScheme ?? "light"].text}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="stats"
//         options={{
//           title: "Stats",
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="area-chart" color={color} />
//           ),
//           headerRight: () => (
//             <Link href="/modal" asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="info-circle"
//                     size={25}
//                     color={Colors[colorScheme ?? "light"].text}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="more"
//         options={{
//           title: "More",
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="ellipsis-v" color={color} />
//           ),
//           headerRight: () => (
//             <Link href="/modal" asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="info-circle"
//                     size={25}
//                     color={Colors[colorScheme ?? "light"].text}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   tabBarStyle: {
//     borderTopColor: 'yellow', // Top stroke
//     borderTopWidth: 2,
//     elevation: 0,
//     shadowOpacity: 1,
//     shadowRadius: 0,
//     shadowOffset: {
//       width: 1,
//       height: 0,
//     },
//     shadowColor: 'yellow', // Yellow shadow
//   },
// });
