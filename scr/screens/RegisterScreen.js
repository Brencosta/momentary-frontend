import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { AuthContext } from '../contexts/AuthContext';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);

  return (
    <View style={{ padding: 20 }}>
      <Text variant="titleLarge">Cadastro</Text>
      <TextInput label="Nome" value={name} onChangeText={setName} />
      <TextInput label="Email" value={email} onChangeText={setEmail} />
      <TextInput label="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <Button mode="contained" onPress={() => register(name, email, password)}>Cadastrar</Button>
      <Button onPress={() => navigation.goBack()}>Voltar para login</Button>
    </View>
  );
}
