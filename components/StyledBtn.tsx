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
        <View style={styles.subContainer}>
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
  //   return (
  //     <View style={styles.container}>
  //       <Link
  //         href={
  //           {
  //             pathname: "/[page]",
  //             params: { page: to },
  //           } as any
  //         }
  //         style={styles.btnContainer}
  //       >
  //         <View style={styles.btnContentContainer}>
  //           <View style={styles.titleContainer}>
  //             <Text style={styles.titleText}>{title}</Text>
  //           </View>
  //           <View style={styles.navigationIcon}>
  //             <Text style={styles.navigationText}>{">"}</Text>
  //           </View>
  //         </View>
  //       </Link>
  //     </View>
  //   );
}

// const styles = StyleSheet.create({
//   container: {
//     width: wp("100%"),
//     height: hp("3.5%"),
//     alignItems: "center",
//     justifyContent: "center",
//     paddingHorizontal: wp("2%"),
//     // backgroundColor: "pink",
//   },
//   btnContainer: {
//     // width: "100%",
//     width: wp("96%"),
//     height: hp("3.5%"),
//     // height: "100%",
//     // paddingVertical: hp("0.25%"),
//     // paddingHorizontal: wp("1.25%"),
//     alignItems: "flex-start",
//     justifyContent: "space-between",
//     // alignItems: "center",
//     // justifyContent: "center",
//     borderLeftWidth: hp("0.1%"),
//     borderTopWidth: hp("0.1%"),
//     borderRightWidth: hp("0.25%"),
//     borderBottomWidth: hp("0.25%"),
//     borderBottomColor: COLORS.secondary,
//     borderRightColor: COLORS.secondary,
//     borderTopColor: COLORS.white,
//     borderLeftColor: COLORS.white,
//     backgroundColor: "green",
//   },
//   btnContentContainer: {
//     width: "100%",
//     height: "100%",
//     // width: wp("94%"),
//     // height: hp("3%"),
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//     backgroundColor: "blue",
//   },
//   titleContainer: {
//     width: "90%",
//     height: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "pink",
//   },
//   titleText: {
//     width: "100%",
//     height: "100%",
//     color: COLORS.white,
//     fontSize: hp("2%"),
//     fontWeight: "bold",
//     // backgroundColor: "pink",
//   },
//   navigationIcon: {
//     maxWidth: "10%",
//     alignItems: "center",
//     justifyContent: "center",
//     width: hp("2.5%"),
//     height: hp("2.5%"),
//     borderCurve: "circular",
//     borderRadius: hp("20%"),
//     backgroundColor: COLORS.white,
//     // color: COLORS.primary,
//     // fontSize: hp("2%"),
//   },
//   navigationText: {
//     color: COLORS.primary,
//     fontSize: hp("2%"),
//     fontWeight: "bold",
//     // backgroundColor: "pink",
//   },
// });

const styles = StyleSheet.create({
  container: {
    width: wp("96%"),
    height: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: wp("2%"),
    // backgroundColor: "pink",
  },
  subContainer: {
    // width: wp("96%"),
    // height: hp("3.5%"),
    width: "100%",
    height: "100%",
    paddingVertical: hp("0.25%"),
    paddingHorizontal: wp("2.25%"),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
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
  titleContainer: {
    width: "90%",
    height: "100%",
    // alignItems: "center",
    alignItems: "flex-start",
    justifyContent: "center",
    // backgroundColor: "green",
  },
  titleText: {
    // width: "100%",
    // height: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.white,
    fontSize: hp("2%"),
    fontWeight: "bold",
    // backgroundColor: "pink",
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
    // color: COLORS.primary,
    // fontSize: hp("2%"),
  },
  navigationText: {
    textAlign: "center",
    width: "100%",
    height: "100%",
    color: COLORS.primary,
    fontSize: hp("1.5%"),
    fontWeight: "bold",
    // backgroundColor: "pink",
  },
});
