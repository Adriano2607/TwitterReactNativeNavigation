import React, { FC, useState } from "react";
import { View, Text, Alert, TextInput, Pressable, StyleSheet } from "react-native"



const Login: FC<{ navigation: any }> = ({ navigation }) => {
  const data = require("../data/dados.json");
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");

  const goSuccess = () => {
    navigation.navigate("Success");
  };

  const goError = () => {
    navigation.navigate("Error");
  };

  const login = () => {
    if(getPassword == '' || getUsername == ''){
      Alert.alert("!!!", "Insira os dados", [ { text: "!!!" }, ]);
    }else{
      if (getUsername === data.login[0].username && getPassword === data.login[0].password) {
        Alert.alert("Sucesso", "Você está logado!", [ { text: "OK", onPress: goSuccess }, ]);
      } else {
        Alert.alert("Atencao","Conta nao Encontrada", [ { text: "OK", onPress: goError }, ]);
      }

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
