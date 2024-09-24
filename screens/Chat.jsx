import {
  View,
  Text,
  Button,
  Image,
  SafeAreaViewComponent,
  ScrollView,
  styles,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView className=" h-screen p-3">
      <View>
        {/* <View>
          <Button
            title="FundFlow"
            onPress={() => navigation.navigate("Welcome")}
          />
        </View> */}

        {/* first main view */}
        <View className="flex-row gap-48">
          {/* Fisrt child */}
          <View className=" flex-col gap-1  ">
            <Text className="text-gray-200 text-lg">Hello,</Text>
            <Text className="text-lg font-semibold">Hi James</Text>
          </View>

          {/* second child */}
          <View>
            <Image
              borderRadius={6}
              borderstyle="border-black"
              source={{
                uri: "https://images.pexels.com/photos/20842232/pexels-photo-20842232/free-photo-of-apple-tree-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              }}
              className="rounded-full  "
              height={75}
              width={75}
            />
          </View>
        </View>

        {/* Second Main View */}

        <View className="bg-blue-400 h-40 mt-3 p-3 rounded-lg ">
          {/* First Child */}
          <View className="flex-row  pt-2">
            <View className="flex-row gap-5 ">
              <Image
                borderRadius={6}
                borderstyle="border-black"
                source={{
                  uri: "https://images.pexels.com/photos/4270363/pexels-photo-4270363.jpeg?auto=compress&cs=tinysrgb&w=400",
                }}
                className="rounded-full  "
                height={70}
                width={70}
              />

              <View className="flex-col   ">
                <Text className="text-white text-lg font-semibold ">
                  Dr. Imran Syahir
                </Text>
                <Text className="text-white top-2 font-extralight text-base">
                  General Doctor
                </Text>
              </View>
            </View>

            <View className="left-16 top-3">
              <SimpleLineIcons name="arrow-right" size={24} color="white" />
            </View>
          </View>

          <View>
            <Text> </Text>
          </View>

          {/* Second child */}

          <View className="flex-row gap-14">
            <View className="flex-row ">
              <View>
                <MaterialCommunityIcons
                  name="calendar-range-outline"
                  size={24}
                  color="white"
                />
              </View>
              <View>
                <Text className="text-white font-light top-1 left-1">
                  Sunday, 12 June
                </Text>
              </View>
            </View>

            <View className="flex-row">
              <View>
                <MaterialCommunityIcons
                  name="clock-time-four-outline"
                  size={24}
                  color="white"
                />
              </View>
              <View>
                <Text className="text-white font-light top-1 left-1">
                  11:00 - 12:00 AM
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Third Main View */}

        <View className="h-16 rounded-lg bg-slate-100 mt-3   ">
          {/* child one */}
          <View className="flex-row gap-8 top-4 left-7">
            <View>
              <Octicons name="search" size={24} color="black" />
            </View>

            {/* child two */}
            <View>
              <Text className="text-gray-400 text-base font-extralightlight">
                Search Doctor or health issue
              </Text>
            </View>
          </View>
        </View>

        {/* Fourth Main View */}
        <View className="top-3 flex-row ">
          <ScrollView className="gap-2" horizontal={true}>
            {/* Child One */}
            <View className="flex-col gap-2">
              <View className="bg-slate-300 h-20 w-20 rounded-full p-6">
                <MaterialIcons name="coronavirus" size={34} color="blue" />
              </View>

              <View className="left-3">
                <Text>Covid 19</Text>
              </View>
            </View>

            {/* Child Two */}
            <View className="flex-col gap-2">
              <View className="bg-slate-300 h-20 w-20 rounded-full p-7">
                <Fontisto name="doctor" size={24} color="black" />
              </View>

              <View className="left-5">
                <Text>Doctor</Text>
              </View>
            </View>

            {/* Child Three */}
            <View className="flex-col gap-2">
              <View className="bg-slate-300 h-20 w-20 rounded-full p-7">
                <MaterialCommunityIcons name="pill" size={24} color="black" />
              </View>

              <View className="left-3">
                <Text>Medicine</Text>
              </View>
            </View>

            {/* Child Four */}
            <View className="flex-col gap-2">
              <View className="bg-slate-300 h-20 w-20 rounded-full pl-8 pt-7">
                <FontAwesome name="hospital-o" size={24} color="black" />
              </View>

              <View className="left-3">
                <Text>Hospital </Text>
              </View>
            </View>

            {/* Child Five */}

            <View className="flex-col gap-2">
              <View className="bg-slate-300 h-20 w-20 rounded-full pl-8 pt-7">
                <Fontisto name="nurse" size={24} color="black" />
              </View>

              <View className="left-5">
                <Text>Nurse</Text>
              </View>
            </View>

            {/* Child Six */}
            <View className="flex-col gap-2">
              <View className="bg-slate-300 h-20 w-20 rounded-full pl-7 pt-7">
                <FontAwesome5 name="ambulance" size={24} color="black" />
              </View>

              <View className="left-3">
                <Text>Ambulance</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Fifth Main View */}
        <View className="top-7">
          <Text className="text-base font-semibold">Near Doctor</Text>
        </View>

        {/* Sixth Main View */}
        <View className="mt-12 h-32 bg-white rounded-lg ">
          {/* Fisrt Child */}
          <View className="flex-row top-2 gap-4 left-3">
            <View>
              <Image
                borderRadius={6}
                borderstyle="border-black"
                source={{
                  uri: "https://images.pexels.com/photos/4270363/pexels-photo-4270363.jpeg?auto=compress&cs=tinysrgb&w=400",
                }}
                className="rounded-full  "
                height={60}
                width={60}
              />
            </View>

            <View className="flex-col space-y-1">
              <Text className="text-base font-bold">Dr. Joseph Brostito</Text>
              <Text className="text-base font-light text-gray-300">
                Dental Speacialist
              </Text>
            </View>

            <View className="flex-row top-3 space-x-2 space-y-1">
              <View>
                <SimpleLineIcons name="location-pin" size={24} color="black" />
              </View>
              <Text>1.2 KM</Text>
            </View>
          </View>

          {/* Second Child */}
          <View className="flex-row space-x-4 top-8 left-4">
            <View className="flex-row space-x-2 space-y-1">
              <View>
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={26}
                  color="orange"
                />
              </View>
              <Text className="text-orange-400">4.8 (120 Reviews)</Text>
            </View>

            <View className="flex-row space-x-2 space-y-1">
              <View className="blue-400">
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={26}
                  color="black"
                />
              </View>
              <Text className="text-blue-400">Open at 17:00</Text>
            </View>
          </View>

          {/* End */}
        </View>

        {/* Seventh Main View */}
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
