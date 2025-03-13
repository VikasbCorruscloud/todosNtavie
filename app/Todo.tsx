import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SubmitTodo from "./SubmitTodo";

interface Task {
  id: string;
  task: string;
  description: string;
}
const tasks: Task[] = [
  { id: "1", task: "Sample Task 1", description: "Sample Task 2" },
  { id: "2", task: "Sample Task 1", description: "Sample Task 2" },
  { id: "3", task: "Sample Task 1", description: "Sample Task 2" },
  { id: "4", task: "Sample Task 1", description: "Sample Task 2" },
  { id: "5", task: "Sample Task 1", description: "Sample Task 2" },
];

const completed: Task[] = [
  { id: "6", task: "Completed Task 1", description: "Sample Task 2" },
  { id: "7", task: "Completed Task 1", description: "Sample Task 2" },
  { id: "8", task: "Completed Task 1", description: "Sample Task 2" },
  { id: "9", task: "Completed Task 1", description: "Sample Task 2" },
  { id: "10", task: "Completed Task 1", description: "Sample Task 2" },
];

const Todo = () => {
  return (
    <View className="flex-1 bg-[#FFFFFF] p-3">
      <Text className="text-2xl mb-2">Todo App</Text>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row justify-between w-full p-3 items-center border h-[80px] border-[#E8E8E8] rounded-lg mt-2">
            <View className="h-[80px] w-[8px] bg-[#80BBE6] absolute" />
            <View className="w-[300px] ml-4">
              <Text>{item.task}</Text>
              <Text className="text-[#8B8B8B]">{item.description}</Text>
            </View>
            <TouchableOpacity>
              <Text className="rounded-xl bg-[#F6F6F6] h-[20px] w-[21px] border border-[#C6D0D0]" />
            </TouchableOpacity>
          </View>
        )}
      />
      <Text className="mt-2 text-black text-xl">Completed</Text>
      {/* Completed Tasks */}
      <FlatList
        data={completed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row justify-between w-full bg-[#EBEBEB] p-3 items-center border h-[80px] border-[#E8E8E8] rounded-lg mt-2">
            <View className="h-[80px] w-[8px] bg-[#80BBE6] absolute" />
            <View className="w-[300px] ml-4">
              <Text>{item.task}</Text>
              <Text className="text-[#8B8B8B]">{item.description}</Text>
            </View>
            <TouchableOpacity>
              <Text className="border border-[#80BBE6] h-[20px] w-[20px] bg-[#FFFFFF] rounded-xl">
                <Ionicons name="checkmark" size={20} color="#80BBE6" />
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Add Task Button */}
      <TouchableOpacity className="bg-[#4884AE] h-[48px] py-4 rounded-lg mt-4 m-3">
        <Text className="text-[#FFFCFC] text-center font-semibold">
          Add Task
        </Text>
      </TouchableOpacity>

      {/* <SubmitTodo /> */}
    </View>
  );
};

export default Todo;
