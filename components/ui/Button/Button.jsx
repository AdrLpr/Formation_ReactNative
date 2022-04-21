import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { stylesVariables, theme } from "../../../variables/styles";

const Button = ({ label, action, children, start }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { flexDirection: start ? "row" : "row-reverse" },
      ]}
      onPress={action}
    >
      {children}
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: stylesVariables(theme).primaryColor,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
  },
  labelButton: {
    color: stylesVariables(theme).lightTextColor,
    margin: 5,
    fontSize: 15,
  },
});

export default Button;