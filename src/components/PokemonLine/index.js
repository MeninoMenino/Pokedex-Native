import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function PokemonLine({ data }) {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 15,
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pokemonImage: {
    height: 70,
    width: 70,
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
