import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { stylesVariables, theme } from "../../../variables/styles";
import Button from "../../ui/Button/Button";
import { AntDesign } from "@expo/vector-icons";
import InputWithError from "../../ui/InputWithError/InputWithError";

const LoginForm = () => {
  //1- Creation des variables d'états pour inputs et erreurs
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //2- Créer les fonction permettant de changer les variable avec les entrées de l'utilisateur.
  function handleEmail(event) {
    setEmailInput(event);
    setEmailError("");
  }

  function handlePassword(event) {
    setPasswordInput(event);
    setPasswordError("");
  }

  //3- Créer la fonction qui s'excute quand on valide le formulaire
  function login() {
    if (emailInput.includes("@") && passwordInput.length >= 6) {
      alert("Connexion avec succés, back end non mise en place!");
    } else {
      setEmailError(!emailInput.includes("@") ? "Email incorrect!" : "");
      setPasswordError(
        passwordInput.length < 6 ? "Mot de passe trop court!" : ""
      );
    }
  }
  //4- Utilisez les variables et les fonction dans les composants:
  return (
    <View style={styles.container}>
      <InputWithError
        holder='Email'
        valeur={emailInput}
        action={handleEmail}
        errorMessage={emailError}
        icon='email'
        type='email-address'
      />
      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePassword}
        errorMessage={passwordError}
        isPassword
        icon='password'
        type='default'
      />

      <Button label='Connectez-vous' action={login} start>
        <AntDesign
          name='login'
          size={20}
          color={stylesVariables(theme).lightTextColor}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginForm;