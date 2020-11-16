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

//Stylesheet
import styles from "../../styles/PokemonLine";

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
          <View style={styles.modalPokemonImageContainer}>
            <Image
              style={styles.modalPokemonImage}
              source={{
                uri: data.image,
              }}
            />
          </View>
          <View style={styles.modalPokemonDataContainer}>
            <Text style={styles.modalPokemonNumber}>#{data.number}</Text>
            <Text style={styles.modalPokemonName}>{data.name}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
