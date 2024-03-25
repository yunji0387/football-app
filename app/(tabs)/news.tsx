import { ScrollView, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import TopLogo from "@/components/TopLogo";
import NewsList from "@/components/NewsList";
import HeaderText from "@/components/HeaderText";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import StyledBtn from "@/components/StyledBtn";

export default function news() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.flexContainer}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
            >
              <TopLogo />
              <HeaderText title="News " />
              <StyledBtn to="" title="News" />
              <StyledBtn to="" title="Feature" />
              <StyledBtn to="" title="Transfer" />
              <StyledBtn to="" title="Statistics" />
              <NewsList />
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    }

    const styles = StyleSheet.create({
      flexContainer: {
        flex: 1,
      },
      scrollView: {
        flex: 1,
      },
      contentContainer: {
        paddingBottom: hp("9%"),
        alignItems: "center",
        justifyContent: "center",
      },
    });