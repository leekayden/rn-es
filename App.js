import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "./Navbar";
import Card from "./Card";
import PropertyList from "./listings.json";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Navbar title={"Eden Spaces"} />
        {PropertyList.map((item, index) => (
          <Card
            key={index}
            payload={item}
          />
        ))}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
