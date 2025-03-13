import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SubmitTodo from "./SubmitTodo";

const tasks = [
  { task: "Sample Task 1", discription: "Sample Task 2" },
  { task: "Sample Task 1", discription: "Sample Task 2" },
  { task: "Sample Task 1", discription: "Sample Task 2" },
]; // Static tasks

const completed = [
  { task: "Sample Task 1", discription: "Sample Task 2" },
  { task: "Sample Task 1", discription: "Sample Task 2" },
  { task: "Sample Task 1", discription: "Sample Task 2" },
]; // Static tasks

const Todo = () => {
  return (
    <View className=" bg-[#FFFFFF] h-screen text-black ">
      <Text className=" text-2xl m-3 ">Todo App </Text>
      {/* Task List */}
      <View>
        <FlatList
          className="h-[300px]"
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className=" flex-row justify-between p-3 items-center border h-[80px] border-[#E8E8E8] rounded-md m-2">
              <View className=" h-[80px] w-[8px] bg-[#80BBE6] absolute ">
                {" "}
              </View>
              <View className=" w-[300px] ml-4 ">
                <Text>{item.task}</Text>
                <Text className="text-[#8B8B8B]">{item.discription}</Text>
              </View>
              <TouchableOpacity className="">
                <Text className=" rounded-xl bg-[#F6F6F6] h-[20px] w-[21px] border border-[#C6D0D0]  "></Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View>
        <Text className=" m-3 text-black text-xl">Completed</Text>
        <View className=" h-[300px]">
          <FlatList
            data={completed}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className=" flex-row justify-between bg-[#EBEBEB] p-3 items-center border h-[80px] border-[#E8E8E8] rounded-md m-2">
                <View className=" h-[80px] w-[8px] bg-[#80BBE6] absolute ">
                  {" "}
                </View>
                <View className=" w-[300px] ml-4 ">
                  <Text>{item.task}</Text>
                  <Text className="text-[#8B8B8B]">{item.discription}</Text>
                </View>
                <TouchableOpacity>
                  <Text className=" border border-[#80BBE6] h-[20px] w-[20px] bg-[#FFFFFF] rounded-xl  ">
                    <Ionicons name="checkmark" size={20} color="#80BBE6" />
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>

      <TouchableOpacity className="bg-[#4884AE] h-[48px] py-4 rounded-lg mt-4 m-3">
        <Text className="text-[#FFFCFC] text-center font-semibold" onPress={SubmitTodo} >
          Add Tsdk
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Todo;
