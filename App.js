import React, { useState } from "react";
import {
  FlatList,
  Picker,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import PokemonLine from "./src/components/PokemonLine";

//Stylesheet
import styles from "./src/styles/App";

export default function App() {
  const [searchOption, setSearchOption] = useState("Name");
  const [pokemon, setPokemon] = useState([
    {
      number: 1,
      name: "Bulbasaur",
      image:
        "https://lh4.googleusercontent.com/GzJzSirwtXbJR7Dpsm2lrpJgRO6cqDLUap3ThPmaDskfC2VYJ9gG3VcBYhw5GF1Kw0c4mx2bM1zyo1f0BIMd=w1366-h625",
    },
    {
      number: 2,
      name: "Ivysaur",
      image:
        "https://lh4.googleusercontent.com/wl5BVeh5j6nsyO7Qqu7RHLPL0_oB9Fc-jm7NxqHOKg0tsKpVe9syJQnFRjBkiMHLbhlJfUkHz7f0jvUs6UwV=w1080-h1920",
    },
    {
      number: 3,
      name: "Venusaur",
      image:
        "https://lh6.googleusercontent.com/djxXSnA653b6jIEvxWn4mt0GFq9MI8dzi1xKECtwwxTMTyNfQMKdbLVkdAO09pa3sVsih23UOqQucIE51Yxv=w1366-h625",
    },
    {
      number: 4,
      name: "Charmander",
      image:
        "https://lh6.googleusercontent.com/yx_MWumOuuB8Tn5QumEynYki3eKWsqgLzVNipb5Nclvew-MaV-Dik9WwoQbuYkfeQaIvLh567EqqjkLUhO3S=w1366-h625",
    },
    {
      number: 5,
      name: "Charmeleon",
      image:
        "https://lh4.googleusercontent.com/2Myfz9-S-LWkQLeAQygxmMm67d-6BBfBJ9JxIriF-6sie7vfT838LW7fEhybWNqA1JRNTwmuQGBaX6I2stPN=w1366-h625",
    },
    {
      number: 6,
      name: "Charizard",
      image:
        "https://lh5.googleusercontent.com/pBlpCjIGqmGJwu_NgAn8I2VNZfhry2CTOt3CtGdOqcxIdJphuCNt2pnLxzv5U1RWQXHq9HQ_ff-iiXUdrBab=w1080-h1920",
    },
    {
      number: 7,
      name: "Squirtle",
      image:
        "https://lh6.googleusercontent.com/SnXM0KDpWjcDGghQ34yNVy4i9qm524a0Dqhw0yJXrwkgeX8C8tuJKczo57pQc6lB7XMngAuicr5gchj5soJl=w1366-h625",
    },
    {
      number: 8,
      name: "Wartortle",
      image:
        "https://lh6.googleusercontent.com/_dPQgHDmVU6p0MNzs8f1GSi7Hc2OzlfmIqEEy5mn6vH6Phf3G9Y0RCRNBXigM_T4xNHaOwH-zZTEPUl2q8J6=w1080-h1920",
    },
    {
      number: 9,
      name: "Blastoise",
      image:
        "https://lh6.googleusercontent.com/0HLgqq0Yka3npGA8HqzbvH27vpTOyHta2ISBj1Ck-w4fMg87UATXlkrkEsIOFtc5c2bcQaBER73m-8QaRnl0=w1080-h1920",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Picker
          selectedValue={searchOption}
          style={styles.searchOptionPicker}
          onValueChange={(itemValue, itemIndex) => setSearchOption(itemValue)}
        >
          <Picker.Item label="Nome" value="Name" />
          <Picker.Item label="Número" value="Number" />
        </Picker>
        <TextInput style={styles.searchInput} />
        <TouchableOpacity style={styles.searchButton}>
          <Feather name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={pokemon}
        keyExtractor={(item) => String(item.number)}
        renderItem={({ item }) => <PokemonLine data={item} />}
      />
    </SafeAreaView>
  );
}
