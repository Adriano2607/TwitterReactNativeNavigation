
import { FC, useState } from "react";
import { View, Text, Alert, TextInput, Pressable, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {UserLogin,UserData} from '../interfaces/interfaces';

const storeData = async (value: UserLogin) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('userLogin', jsonValue);
  } catch (e) {
    console.error(e)
  }
};


const Login = ({ navigation }: any) => {
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");



  const goSuccess = () => {
    navigation.navigate("Success");
  };

  const goError = () => {
    navigation.navigate("Error");
  };

  const login = () => {

    if (getUsername !== "" && getPassword !== "") {
      const userData = {
        username: getUsername,
        password: getPassword,
      };

      storeData(userData)

      Alert.alert("Alerta",
        `Você está logado!\nUsuário: ${getUsername}\nSenha: ${getPassword}`, [
        { text: "OK", onPress: goSuccess },
      ]);
    } else {
      Alert.alert("Alerta", "Prencha os dados corretamente!", [
        { text: "OK", onPress: goError },

      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>LOGIN</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={getUsername}
        placeholder="Insira seu usuário"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={getPassword}
        placeholder="Insira sua senha"
        secureTextEntry
      />
      <Pressable onPress={login} style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F7F7F7"
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#000080',
    borderRadius: 50,
    backgroundColor: 'white'
  },
  titleText: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#000080",
  },
  button: {
    backgroundColor: "#000080",
    height: 50,
    width: "95%",
    alignSelf: "center",
    borderRadius: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
});

export default Login;