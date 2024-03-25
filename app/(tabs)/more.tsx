import { ScrollView, StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
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
        <StyledBtn to="" title="Clear Cache" />
        <StyledBtn to="" title="Theme" />
        <HeaderText title="Other" />
        <StyledBtn to="" title="Contact Us" />
        <StyledBtn to="" title="Term & Conditions" />
        <StyledBtn to="" title="Privacy Policy" />
        <StyledBtn to="" title="Current Version" />
        {/* <View style={styles.container}>
          <Text style={styles.title}>More</Text>
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
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: hp("9%"),
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
