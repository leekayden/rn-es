import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ThreeColumnComponent from "./ThreeColumnComponent";
import Button from "./Button";

interface CardProps {
  title: string;
  description: string;
  imgUrl: string;
}

const Card = ({ title, description, imgUrl }: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageTitleContainer}>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>
          {title}
          {"\n"}
        </Text>
        <Text style={styles.street}>123 Test Street</Text>
      </View>
      <ThreeColumnComponent />
      <Button
        title={"View"}
        onPress={() => console.log('')}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 120,
    zIndex: -10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    flexDirection: "column",
  },
  imageTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  street: {
    fontSize: 24,
  },
  description: {
    fontSize: 14,
    color: "#777",
  },
  panel: {
    backgroundColor: "#000",
    borderRadius: 10,
  },
});

export default Card;
