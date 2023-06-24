import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThreeColumnComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.label}>S$ 200/mo</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Bishan</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Premium Common</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    width: "100%",
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginTop: 8,
    marginBottom: 8,
    textAlign: "center",
    verticalAlign: "middle",
  },
});

export default ThreeColumnComponent;
