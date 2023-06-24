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
            title={item.title}
            description={item.description}
            imgUrl={
              "https://www.cbs42.com/wp-content/uploads/sites/81/2019/10/Sweet-Home-Alabama.jpg?strip=1"
            }
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
