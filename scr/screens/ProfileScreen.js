import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { AuthContext } from '../contexts/AuthContext';

export default function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || '');
  const [password, setPassword] = useState('');

  const saveChanges = () => {
    alert('Perfil atualizado (simulação)');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text variant="titleLarge">Perfil</Text>
      <TextInput label="Nome" value={name} onChangeText={setName} />
      <TextInput label="Nova Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <Button mode="contained" onPress={saveChanges}>Salvar</Button>
      <Button mode="outlined" onPress={logout} style={{ marginTop: 10 }}>Sair</Button>
    </View>
  );
}
