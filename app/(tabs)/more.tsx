import { ScrollView, StyleSheet } from "react-native";
import TopLogo from "@/components/TopLogo";
import HeaderText from "@/components/HeaderText";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import StyledBtn from "@/components/StyledBtn";

export default function more() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <TopLogo />
        <HeaderText title="More" />
        <StyledBtn to="" title="Login / Sign Up" />
        <HeaderText title="Settings" />
        <StyledBtn to="" title="Notifications" styleNum={2} />
        <StyledBtn to="" title="Clear Cache" styleNum={2} />
        <StyledBtn to="" title="Theme" styleNum={2} />
        <HeaderText title="Other" />
        <StyledBtn to="" title="Contact Us" styleNum={2} />
        <StyledBtn to="" title="Term & Conditions" styleNum={2} />
        <StyledBtn to="" title="Privacy Policy" styleNum={2} />
        <StyledBtn to="" title="Current Version" styleNum={2} />
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
