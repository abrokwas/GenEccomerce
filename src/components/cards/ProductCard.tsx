import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { Ionicons } from "@expo/vector-icons";
import { commonStyles } from "../../styles/sharedStyles";

const ProductCard = () => {
  return (
    <View style={styles.container}>
      {/* Add To Cart Button */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Ionicons name="cart" size={s(15)} color={AppColors.white} />
      </TouchableOpacity>

      {/* Image UI */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6ecYj2vapYi1mZUzxrDPqijsOBy8zB-V2Q&s",
          }}
        />
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>iPhone 15</AppText>
        <AppText style={styles.priceText}>1200 $</AppText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(190),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    ...commonStyles.shadow,
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(130),
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    paddingTop: s(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  titleText: {
    fontSize: s(14),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
  },
  priceText: {
    fontSize: s(14),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginTop: vs(7),
  },
  addToCartButton: {
    height: s(28),
    width: s(28),
    position: "absolute",
    left: 5,
    top: 5,
    borderRadius: s(14),
    backgroundColor: AppColors.primary,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
