import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

export default function PokemonModal({}) {
  return (
    <Modal animationType="slide" transparent={true} visible={}>
      <View>
        <TouchableOpacity>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  const styles = StyleSheet.create({});
}
