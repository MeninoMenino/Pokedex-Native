import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";

export default function PokemonModal() {

    const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {

    },

});
