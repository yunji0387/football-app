import { Tabs } from "expo-router";
import { View, Text, Platform } from "react-native";
import { Image } from "expo-image";
import icons from "../../constants/icons";
import { COLORS } from "@/constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: COLORS.primary,
          borderTopColor: COLORS.grey,
          borderTopWidth: 1,
          bottom: 0,
          right: 0,
          left: 0,
          height: 50,
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
              <View
                style={{
                  alignItems: "center",
                  // justifyContent: "center",
                  paddingTop: 5,
                  borderTopColor: focused ? COLORS.secondary : COLORS.grey,
                  borderTopWidth: focused ? 2 : 1,
                }}
              >
                <Image
                  source={icons.news}
                  contentFit="contain"
                  style={{
                    width: 25,
                    height: 25,
                    // tintColor: focused ? COLORS.white : undefined,
                  }}
                />
                <Text
                  style={{
                    color: focused ? COLORS.white : COLORS.grey,
                    fontSize: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 20,
                  }}
                >
                  News
                </Text>
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
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 5,
                  borderTopColor: focused ? COLORS.secondary : COLORS.grey,
                  borderTopWidth: focused ? 2 : 1,
                }}
              >
                <Image
                  source={icons.match}
                  contentFit="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text
                  style={{
                    color: focused ? COLORS.white : COLORS.grey,
                    fontSize: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 20,
                  }}
                >
                  Match
                </Text>
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
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 5,
                  borderTopColor: focused ? COLORS.secondary : COLORS.grey,
                  borderTopWidth: focused ? 2 : 1,
                }}
              >
                <Image
                  source={icons.latest}
                  contentFit="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text
                  style={{
                    color: focused ? COLORS.white : COLORS.grey,
                    fontSize: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 20,
                  }}
                >
                  Latest
                </Text>
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
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 5,
                  borderTopColor: focused ? COLORS.secondary : COLORS.grey,
                  borderTopWidth: focused ? 2 : 1,
                }}
              >
                <Image
                  source={icons.stats}
                  contentFit="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text
                  style={{
                    color: focused ? COLORS.white : COLORS.grey,
                    fontSize: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 20,
                  }}
                >
                  Stats
                </Text>
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
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 5,
                  borderTopColor: focused ? COLORS.secondary : COLORS.grey,
                  borderTopWidth: focused ? 2 : 1,
                }}
              >
                <Image
                  source={icons.more}
                  contentFit="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text
                  style={{
                    color: focused ? COLORS.white : COLORS.grey,
                    fontSize: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 20,
                  }}
                >
                  More
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}

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
