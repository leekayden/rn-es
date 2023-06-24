import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "./Button";
import { Listing } from "./listing";

interface CardProps {
  payload: Listing;
}

const Card = ({ payload }: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageTitleContainer}>
        <Image
          source={{
            uri: payload.images[0],
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{payload.title}</Text>
          <Text style={styles.street}>{payload.address}</Text>
        </View>
      </View>
      <View style={styles.panelContainer}>
        <View style={styles.panelColumn}>
          <Text style={styles.panelLabel}>S$ {payload.price}/mo</Text>
        </View>
        <View style={styles.panelColumn}>
          <Text style={styles.panelLabel}>{payload.mrt}</Text>
        </View>
        <View style={styles.panelColumn}>
          <Text style={styles.panelLabel}>{payload.roomType}</Text>
        </View>
      </View>
      <Text>{"\n"}</Text>
      <Button title={"View"} onPress={() => console.log("")} />
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
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0, 0, 0, 0.6)",
  },
  description: {
    fontSize: 14,
    color: "#777",
  },
  panel: {
    backgroundColor: "#000",
    borderRadius: 10,
  },
  panelContainer: {
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    width: "100%",
  },
  panelColumn: {
    flex: 1,
    alignItems: "center",
  },
  panelLabel: {
    fontSize: 20,
    marginTop: 8,
    marginBottom: 8,
    textAlign: "center",
    verticalAlign: "middle",
  },
  textContainer: {
    flexDirection: "column",
  },
});

export default Card;
