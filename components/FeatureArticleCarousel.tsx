import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { Image } from "expo-image";
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
  const scrollViewRef = useRef<ScrollView>(null);

  const renderItem = (item: Article, index: number) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.slide, { width: screenWidth }]}
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

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const currentSlide = Math.round(contentOffset.x / screenWidth);
    setActiveSlide(currentSlide);
  };

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const currentSlide = Math.round(contentOffset.x / screenWidth);
    setActiveSlide(currentSlide);
  };

  const PaginationComponent = () => {
    return (
      <View style={styles.paginationContainer}>
        {articles.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeSlide
                ? styles.activePaginationDot
                : styles.inactivePaginationDot,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={handleScrollEnd}
        onMomentumScrollEnd={handleScrollEnd}
        style={styles.scrollView}
      >
        {articles.map((item, index) => renderItem(item, index))}
      </ScrollView>
      <PaginationComponent />
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
  scrollView: {
    height: hp("35%"),
  },
  slide: {
    maxHeight: hp("35%"),
    margin: hp("1%"),
    paddingHorizontal: wp("2%"),
  },
  image: {
    width: "100%",
    height: hp("25%"),
    maxHeight: hp("25%"),
    borderBottomWidth: hp("0.3%"),
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: hp("3%"),
    paddingVertical: 0,
    marginVertical: 0,
  },
  paginationDot: {
    width: hp("1%"),
    height: hp("1%"),
    borderRadius: hp("0.5%"),
    marginHorizontal: wp("1%"),
  },
  activePaginationDot: {
    backgroundColor: COLORS.white,
  },
  inactivePaginationDot: {
    backgroundColor: COLORS.white,
    opacity: 0.4,
  },
});
