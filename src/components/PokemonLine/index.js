import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function PokemonLine({ data }) {
  return (
    <View style={styles.container}>
      <Image style={styles.pokemonImage} source={require("../../img/p1.png")} />
      <Text style={styles.pokemonNumber}> {data.number} </Text>
      <Text style={styles.pokemonName}> {data.name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pokemonImage: {
    height: 40,
    width: 40,
    paddingLeft: 10,
    paddingRight: 40,
  },
});
