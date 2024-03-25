import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TopLogo from "@/components/TopLogo";
import HeaderText from "@/components/HeaderText";
import TopStats from "@/components/TopStats";
import LeagueTable from "@/components/LeagueTable";
import StatsTable from "@/components/StatsTable";
import StyledBtn from "@/components/StyledBtn";

export default function stats() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <TopLogo />
        <HeaderText title="Statistics" />
        <TopStats />
        <StyledBtn to="" title="Full Standings" />
        <StyledBtn to="" title="Player Stats" />
        <StyledBtn to="" title="Team Stats" />
        <LeagueTable />
        <StatsTable isPlayerStats={true} title="Player Stats" />
        <StatsTable isPlayerStats={false} title="Team Stats" />
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
