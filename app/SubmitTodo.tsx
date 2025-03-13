import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

const SubmitTodo = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View className="">
      {/* Add Task Button */}
      <TouchableOpacity
        onPress={() => setShowForm(true)}
        className="bg-[#4884AE] h-[48px] rounded-lg mx-4 my-3 flex items-center justify-center"
      >
        <Text className="text-[#FFFCFC] font-semibold">Add Task</Text>
      </TouchableOpacity>

      {/* Task Form */}
      {showForm && (
        <View className="  ">
          <View className="absolute bottom-0 left-0 right-0">
            <View className="bg-white p-6 rounded-t-xl w-full h-[400px]">
              {/* Header */}
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-xl font-semibold">New Task</Text>
                <TouchableOpacity
                  onPress={() => {
                    setShowForm(false);
                    setTitle("");
                    setDescription("");
                  }}
                  className="bg-[#DBDBDB] rounded-full w-[30px] h-[30px] flex items-center justify-center"
                >
                  <Text className="text-black font-bold h-[16px]">X</Text>
                </TouchableOpacity>
              </View>

              {/* Inputs */}
              <View className="gap-4">
                {/* Title Input */}
                <View>
                  <Text className="text-lg font-medium mb-2">Title</Text>
                  <TextInput
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Enter the title of your task"
                    className="border border-[#D7D7D7] p-3 rounded-md h-[48px]"
                  />
                </View>

                {/* Description Input */}
                <View>
                  <Text className="text-lg font-medium mb-2">Description</Text>
                  <TextInput
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Enter the description of your task"
                    className="border border-[#D7D7D7]  p-3 rounded-md"
                    multiline
                    style={{ height: 100, textAlignVertical: "top" }} // Ensures 4-line space
                  />
                </View>

                {/* Submit Button */}
                <TouchableOpacity className=" mt-6 bg-[#4884AE] h-[48px] rounded-lg flex items-center justify-center">
                  <Text className="text-[#FFFCFC] font-semibold">Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default SubmitTodo;
