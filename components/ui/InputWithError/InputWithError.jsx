import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { stylesVariables, theme } from "../../../variables/styles";
import {
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useState } from "react";
const InputWithError = ({
  holder,
  valeur,
  action,
  errorMessage,
  isPassword,
  icon,
  type,
}) => {
  function Icon() {
    switch (icon) {
      case "email":
        return <Entypo name='email' size={24} color='black' />;
      case "password":
        return (
          <MaterialCommunityIcons
            name='form-textbox-password'
            size={24}
            color='black'
          />
        );
      case "username":
        return <AntDesign name='user' size={24} color='black' />;
      default:
        return <MaterialIcons name='short-text' size={24} color='black' />;
    }
  }

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  function toggleIsPasswordHidden() {
    setIsPasswordHidden(!isPasswordHidden);
  }

  const outline = Platform.OS === "web" ? { outlineStyle: "none" } : null;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.icon}>{icon && <Icon />}</View>
        <TextInput
          style={[styles.input, outline]}
          placeholder={holder}
          value={valeur}
          onChangeText={action}
          secureTextEntry={isPassword && isPasswordHidden}
          keyboardType={type}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={toggleIsPasswordHidden}
        >
          {isPassword && (
            <Ionicons
              name={
                isPasswordHidden ? "md-eye-outline" : "md-eye-off-outline"
              }
              size={24}
              color={isPasswordHidden ? "green" : "orange"}
            />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.inputError}>{errorMessage}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgb(220,220,220)",
    borderBottomColor: stylesVariables(theme).primaryColor,
    borderBottomWidth: 1,
    margin: 10,
    maxWidth: 300,
    padding: 5,
  },
  input: {
    padding: 7,
    width: "80%",
  },
  inputError: {
    color: "rgb(200, 10, 10)",
    fontSize: 12,
  },
  icon: {
    width: "10%",
  },
});

export default InputWithError;