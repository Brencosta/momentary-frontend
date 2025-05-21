import React from "react";
import { FlatList, View } from "react-native";
import { Appbar, FAB } from "react-native-paper";
import ChatItem from "./components/ChatItem";

const chats = [
  { id: "1", name: "Maria", isGroup: false },
  { id: "2", name: "Grupo da Família", isGroup: true },
];

export default function ChatListScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Conversas" />
        <Appbar.Action
          icon="account-circle"
          onPress={() => navigation.navigate("Perfil")}
        />
      </Appbar.Header>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem
            name={item.name}
            isGroup={item.isGroup}
            onPress={() => navigation.navigate("Chat", { name: item.name })}
          />
        )}
      />

      <FAB
        icon="plus"
        style={{ position: "absolute", right: 16, bottom: 16 }}
        onPress={() => alert("Função de novo chat")}
      />
    </View>
  );
}
