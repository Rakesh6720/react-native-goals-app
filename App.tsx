import { SetStateAction, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  GestureResponderEvent,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { Goal } from "./types";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>();
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const goalInputHandler = (text: string) => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = (event: GestureResponderEvent): void => {
    setCourseGoals((courseGoals): Goal[] => [
      ...courseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
  };

  const deleteGoalHandler = (id: string): void => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                deleteGoalHandler={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  goalsContainer: {
    flex: 4,
  },
});
