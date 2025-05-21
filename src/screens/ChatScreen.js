import React from "react";
import { View, Text } from "react-native";

export default function ChatScreen({ route }) {
  const { name } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Conversando com {name}</Text>
    </View>
  );
}
