import React from "react";
import { List } from "react-native-paper";

export default function ChatItem({ name, isGroup, onPress }) {
  return (
    <List.Item
      title={name}
      description={isGroup ? "Grupo" : "Conversa individual"}
      left={() => <List.Icon icon={isGroup ? "account-group" : "account"} />}
      onPress={onPress}
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
    />
  );
}
