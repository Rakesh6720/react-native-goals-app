import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  ListRenderItemInfo,
} from "react-native";
import { Goal } from "../types";

interface GoalItemProps {
  itemData: ListRenderItemInfo<Goal>;
  deleteGoalHandler: (id: string) => void;
}

export default function GoalItem({
  itemData,
  deleteGoalHandler,
}: GoalItemProps) {
  return (
    <View key={itemData.item.id} style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteGoalHandler.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItem: {
    color: "white",
    padding: 8,
  },
});
