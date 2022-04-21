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

const SignInForm = () => {
  //1- Creation des variables d'états pour inputs et erreurs
  const [usernameInput, setUsernameInput] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //2- Créer les fonction permettant de changer les variable avec les entrées de l'utilisateur.
  function handleUsername(event) {
    setUsernameInput(event);
    setUsernameError("");
  }

  function handleEmail(event) {
    setEmailInput(event);
    setEmailError("");
  }

  function handlePassword(event) {
    setPasswordInput(event);
    setPasswordError("");
  }

  function handleConfirmPassword(event) {
    setConfirmPasswordInput(event);
    setConfirmPasswordError("");
  }

  //3- Créer la fonction qui s'excute quand on valide le formulaire
  function signIn() {
    if (usernameInput.length >= 3 && usernameInput.length < 12 && emailInput.includes("@") && passwordInput.length >= 6 && confirmPasswordInput === passwordInput ) {
      alert("Inscription réussie, back end non mise en place!");
    } else {
      setUsernameError(
        usernameInput.length <= 3 ? 
        "Username trop court" 
        : usernameInput.length >= 12 ? 
        "Username trop long" 
        : ""
      );

      setEmailError(!emailInput.includes("@") ? "Email incorrect!" : "");
      setPasswordError(
        passwordInput.length < 6 ? "Mot de passe trop court!" : ""
      );
      setConfirmPasswordError(
        confirmPasswordInput != passwordInput  ? "Mot de passe différents" : ""
      );
    }
  }
  //4- Utilisez les variables et les fonction dans les composants:
  return (
    <View style={styles.container}>
        
        <InputWithError
        holder='Username'
        valeur={usernameInput}
        action={handleUsername}
        errorMessage={usernameError}
        icon='username'
        type='username-address'
      />

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

      <InputWithError
        holder='Confirmation du mot de passe'
        valeur={confirmPasswordInput}
        action={handleConfirmPassword}
        errorMessage={confirmPasswordError}
        isPassword
        icon='password'
        type='default'
      />
      

      <Button label='Inscrivez-vous' action={signIn} start>
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

export default SignInForm;