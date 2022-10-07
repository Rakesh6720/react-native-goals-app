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
    <Pressable onPress={deleteGoalHandler.bind(this, itemData.item.id)}>
      <View key={itemData.item.id} style={styles.goalItemContainer}>
        <Text style={styles.goalItem}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalItem: {
    color: "white",
  },
});
