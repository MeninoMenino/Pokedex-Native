import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function PokemonLine({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.pokemonImage}
        source={{
          uri: data.image,
        }}
      />
      <Text style={styles.pokemonNumber}> {data.number} </Text>
      <Text style={styles.pokemonName}> {data.name} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 20,
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pokemonImage: {
    height: 100,
    width: 100,
    marginLeft: 10,
    marginRight: 20,
  },
  pokemonNumber: {
    fontSize: 20,
  },
  pokemonName: {
    fontSize: 18,
    paddingLeft: 40,
    paddingRight: 20,
  },
});
