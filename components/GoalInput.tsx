import {
  View,
  TextInput,
  Button,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

interface GoalInputProps {
  goalInputHandler: (text: string) => void;
  addGoalHandler: (event: GestureResponderEvent) => void;
}

export default function GoalInput({
  goalInputHandler,
  addGoalHandler,
}: GoalInputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});