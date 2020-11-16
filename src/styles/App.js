import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
  },
  topBar: {
    flex: 1,
    backgroundColor: "#fc4b30",
    paddingVertical: 60,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  searchOptionPicker: {
    width: 130,
    height: 40,
  },
  searchInput: {
    width: 150,
    height: 40,
    backgroundColor: "#FFF",
    fontSize: 15,
    padding: 9,
    borderRadius: 5,
  },
  searchButton: {
    width: 40,
    height: 40,
    backgroundColor: "#fefefe",
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default styles;