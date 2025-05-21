import React, { useState, useContext } from "react";
import { View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AuthContext } from "../contexts/AuthContext";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <View style={{ padding: 30, flex: 1, justifyContent: "center" }}>
      <Text
        variant="titleLarge"
        style={{ justifyContent: "center", textAlign: "center" }}
      >
        Login
      </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginTop: 20 }}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginTop: 10, marginBottom: 20 }}
      />
      <Button mode="contained" onPress={() => login(email, password)}>
        Entrar
      </Button>
      <Button onPress={() => navigation.navigate("Cadastro")}>
        Criar conta
      </Button>
    </View>
  );
}
