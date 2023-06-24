import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface NavbarProps {
  title: string,
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 55,
    width: "100%",
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cf5e18',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    paddingLeft: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
});

export default Navbar;
