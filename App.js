import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";

import PokemonLine from "./src/components/PokemonLine";

export default function App() {
  const [pokemon, setPokemon] = useState([
    { number: 1, name: "Bulbasaur", image: "../../img/p1.png" },
    { number: 2, name: "Ivysaur", image: "../../img/p2.png" },
    { number: 3, name: "Venusaur", image: "../../img/p3.png" },
    { number: 4, name: "Charmander", image: "../../img/p4.png" },
    { number: 5, name: "Charmeleon", image: "../../img/p5.png" },
    { number: 6, name: "Charizard", image: "../../img/p6.png" },
    { number: 7, name: "Squirtle", image: "../../img/p7.png" },
    { number: 8, name: "Wartortle", image: "../../img/p8.png" },
    { number: 9, name: "Blastoise", image: "../../img/p9.png" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={pokemon}
        keyExtractor={(item) => String(item.number)}
        renderItem={({ item }) => <PokemonLine data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
