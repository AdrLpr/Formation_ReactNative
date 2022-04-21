import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import HeaderMessageCard from "../../hoc/HeaderMessageCard/HeaderMessageCard";
import { TouchableOpacity } from "react-native-web";
import LoginForm from "../../container/LoginForm/LoginForm";
import SignInForm from "../../container/SignInForm/SignInForm";



export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    function toggleIsLogin() {
        setIsLogin(!isLogin)
    }
    return(
        <View style={styles.container}>
            <HeaderMessageCard
                title='Bienvenue !'
                content={isLogin ? <LoginForm/> : <SignInForm/>
                }
            >
                <TouchableOpacity onPress={toggleIsLogin}>
                    <Text style={{color:'aqua'}}>{isLogin ?
                     "Pas encore membre ? Inscrivez vous !" : "Déjà membre ? Connectez vous !"}</Text>
                </TouchableOpacity>
            </HeaderMessageCard>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
  
      alignItems:"center"
  
    }
})