import { ScrollView, StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TopLogo from "@/components/TopLogo";
import HeaderText from "@/components/HeaderText";
import MatchList from "@/components/MatchList";
import StyledBtn from "@/components/StyledBtn";

export default function match() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <TopLogo />
        <HeaderText title="Matches " />
        <StyledBtn to="" title="Post Matches" />
        <StyledBtn to="" title="Upcoming Matches" />
        <StyledBtn to="" title="View custom Range Matches" />
        <MatchList />
        {/* <View style={styles.container}>
          <Text style={styles.title}>Match</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: hp("9%"),
    alignItems: "center",
    justifyContent: "center",
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: "80%",
  // },
});
