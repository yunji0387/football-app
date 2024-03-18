import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { COLORS } from "@/constants/theme";

const articleImg = require("../assets/images/articleImg.png") as string;

type Article = {
  id: string;
  imageUrl: any;
  title: string;
  summary: string;
};

export default function FeatureArticleCarousel() {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: "1",
      imageUrl: articleImg,
      title: "Can Eriksen's return offset Hammer's defensive issues?",
      summary:
        "Adrian Clarke analyses the Hammers' problems at the back and why Brazilian's return can help David Moyes.",
    },
    {
      id: "2",
      imageUrl: articleImg,
      title: "Can Test 2's return offset Hammer's defensive issues?",
      summary:
        "Adrian Clarke analyses the Hammers' problems at the back and why Brazilian's return can help David Moyes.",
    },
    {
      id: "3",
      imageUrl: articleImg,
      title: "Can Test 3's return offset Hammer's defensive issues?",
      summary:
        "Adrian Clarke analyses the Hammers' problems at the back and why Brazilian's return can help David Moyes.",
    },
    {
      id: "4",
      imageUrl: articleImg,
      title: "Can Test 4's return offset Hammer's defensive issues?",
      summary:
        "Adrian Clarke analyses the Hammers' problems at the back and why Brazilian's return can help David Moyes.",
    },
    {
      id: "5",
      imageUrl: articleImg,
      title: "Can Test 5's return offset Hammer's defensive issues?",
      summary:
        "Adrian Clarke analyses the Hammers' problems at the back and why Brazilian's return can help David Moyes.",
    },
    // Add more mock articles as needed
  ]);

  const [activeSlide, setActiveSlide] = useState(0);
  const screenWidth = Dimensions.get("window").width;

  const renderItem = ({ item }: { item: Article }) => {
    return (
      <TouchableOpacity
        style={styles.slide}
        onPress={() => {
          // TODO: handle press, navigate to article detail
          console.log("Article pressed:", item.id);
        }}
      >
        <Image
          source={item.imageUrl}
          // contentFit="contain"
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summary}>{item.summary}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={articles}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={articles.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotContainerStyle={styles.paginationDotContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.inactivePaginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("40%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    maxHeight: hp("40%"),
    margin: hp("1%"),
  },
  image: {
    width: "100%",
    height: hp("25%"),
    maxHeight: hp("25%"),
    borderBottomWidth: hp("0.5%"),
    borderBottomColor: COLORS.secondary,
  },
  titleContainer: {
    height: hp("6%"),
    display: "flex",
    justifyContent: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: hp("2%"),
    fontWeight: "bold",
    textAlign: "justify",
  },
  summaryContainer: {
    height: hp("4.5%"),
    display: "flex",
    justifyContent: "center",
  },
  summary: {
    height: hp("4.5%"),
    color: COLORS.white,
    fontSize: hp("1.5%"),
    textAlign: "justify",
  },
  paginationContainer: {
    height: hp("3%"),
    paddingVertical: 0,
    marginVertical: 0,
  },
  paginationDotContainer: {
    width: hp("3%"),
    height: hp("3%"),
  },
  paginationDot: {
    width: hp("1%"),
    height: hp("1%"),
    backgroundColor: COLORS.white,
  },
  inactivePaginationDot: {
    // Define styles for inactive dots if needed
  },
});
