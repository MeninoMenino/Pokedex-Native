import { StyleSheet } from "react-native";

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
    paddingLeft: 15,
    marginBottom: 15,
  },
  modalContainer: {
    paddingTop: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  modalPokemonImageContainer: {},
  modalPokemonDataContainer: { marginLeft: 50 },
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

export default styles;
