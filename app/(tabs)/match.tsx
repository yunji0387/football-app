import { ScrollView, StyleSheet } from "react-native";
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
});
