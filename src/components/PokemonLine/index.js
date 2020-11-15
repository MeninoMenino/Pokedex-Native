import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

import { Feather } from "@expo/vector-icons";

export default function PokemonLine({ data }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Image
          style={styles.pokemonImage}
          source={{
            uri: data.image,
          }}
        />
        <Text style={styles.pokemonNumber}> {data.number} </Text>
        <Text style={styles.pokemonName}> {data.name} </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        style={styles.modal}
      >
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Feather name="arrow-left" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.modalContainer}>
          <View style={modalPokemonImageContainer}>
            <Image
              style={styles.modalPokemonImage}
              source={{
                uri: data.image,
              }}
            />
          </View>
          <View style={modalPokemonDataContainer}>
            <Text style={styles.modalPokemonNumber}>#{data.number}</Text>
            <Text style={styles.modalPokemonName}>{data.name}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 10,
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pokemonImage: {
    height: 75,
    width: 75,
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
  modal: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  modalHeader: {
    backgroundColor: "#fc4b30",
    paddingVertical: 20,
    marginBottom: 15,
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalPokemonImageContainer: {},
  modalPokemonDataContainer: {},
  modalPokemonImage: {
    height: 100,
    width: 100,
  },
  modalPokemonNumber: {
    fontSize: 20,
  },
  modalPokemonName: {
    fontSize: 17,
  },
});
