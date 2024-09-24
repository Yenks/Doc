import * as React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import SignUp from "./screens/Chat";
import Schedule from "./screens/Schedule";

const Stack = createNativeStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <View>
      <SafeAreaView className=" bg-slate-50 h-screen p-3">
        <View className="pt-3 pl-5 pr-5">
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
                  uri: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400",
                }}
                className="rounded-full  right-4 "
                height={75}
                width={75}
              />
            </View>
          </View>

          {/* Second Main View */}

          <View className="bg-blue-400 h-40 mt-7 p-3 rounded-lg ">
            {/* First Child */}
            <View className="flex-row  pt-2">
              <View className="flex-row gap-5 ">
                <Image
                  borderRadius={6}
                  borderstyle="border-black"
                  source={{
                    uri: "https://images.pexels.com/photos/5888144/pexels-photo-5888144.jpeg?auto=compress&cs=tinysrgb&w=400",
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

              <View className="left-14 top-4">
                <SimpleLineIcons name="arrow-right" size={21} color="white" />
              </View>
            </View>

            <View>
              <Text> </Text>
            </View>

            {/* Second child */}

            <View className="flex-row gap-8 top-3">
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

          <View className="h-16 rounded-lg  mt-3 bg-slate-100">
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
          <View className="top-3 flex-row space-x-4 ">
            {/* Child One */}
            <View className="flex-col gap-2">
              <View className=" bg-slate-100 h-16 w-16 rounded-full pt-4 pl-4">
                <MaterialIcons name="coronavirus" size={34} color="#60A5FA" />
              </View>

              <View className="left-1 ">
                <Text className="text-gray-400">Covid 19</Text>
              </View>
            </View>

            {/* Child Two */}
            <View className="flex-col gap-2">
              <View className="bg-slate-100 h-16 w-16 rounded-full pt-5 pl-6">
                <Fontisto name="doctor" size={24} color="#60A5FA" />
              </View>

              <View className="left-3">
                <Text className="text-gray-400">Doctor</Text>
              </View>
            </View>

            {/* Child Three */}
            <View className="flex-col gap-2">
              <View className="bg-slate-100 h-16 w-16 rounded-full pt-5 pl-5">
                <MaterialCommunityIcons name="pill" size={24} color="#60A5FA" />
              </View>

              <View className="left-2">
                <Text className="text-gray-400">Medicine</Text>
              </View>
            </View>

            {/* Child Four */}
            <View className="flex-col gap-2">
              <View className="bg-slate-100 h-16 w-16 rounded-full pt-5 pl-6">
                <FontAwesome name="hospital-o" size={24} color="#60A5FA" />
              </View>

              <View className="left-3">
                <Text className="text-gray-400">Hospital </Text>
              </View>
            </View>
          </View>

          {/* Fifth Main View */}
          <View className="top-10">
            <Text className="text-base font-semibold">Near Doctor</Text>
          </View>

          {/* Sixth Main View */}
          <View className="mt-16 h-36 bg-white rounded-lg ">
            {/* Fisrt Child */}
            <View className="flex-row top-2 gap-4 left-1">
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
                  <SimpleLineIcons
                    name="location-pin"
                    size={24}
                    color="black"
                  />
                </View>
                <Text>1.2 KM</Text>
              </View>
            </View>

            {/* HR */}

            <View className="bg-gray-200 w-72 top-6 left-5 h-px"></View>
            {/* Second Child */}
            <View className="flex-row space-x-4 top-10 left-4">
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
                    color="#60A5FA"
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
    </View>
  );
}

function WelcomeScreen({ navigation }) {
  return (
    <View>
      <SafeAreaView className=" bg-white h-screen p-3 ">
        {/* First Main View */}
        <View className="m-2">
          <ScrollView className="" horizontal={true}>
            <View className="flex-row gap-4">
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ backgroundColor: "#ebf8ff", borderRadius: 24 }}
              >
                <View className="bg-zinc-100 h-16 rounded-3xl w-52">
                  <Text className="text-lg top-4 left-4 text-gray-500">
                    Upcoming schedule
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{ backgroundColor: "#ebf8ff", borderRadius: 24 }}
              >
                <View className="bg-zinc-100 h-16 rounded-3xl w-52">
                  <Text className="text-lg top-4 left-4 text-gray-500">
                    Upcoming schedule
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{ backgroundColor: "#ebf8ff", borderRadius: 24 }}
              >
                <View className="bg-zinc-100 h-16 rounded-3xl w-52">
                  <Text className="text-lg top-4 left-4 text-gray-500">
                    Upcoming schedule
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Second Main View */}
        <View>
          <ScrollView className="" vertical={true}>
            <View className=" flex-col gap-2">
              {/* Parent 1 */}
              <View className="h-48 bg-slate-100 ">
                {/* Child one */}
                <View className=" flex-row gap-4 top-1 p-2">
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
                    <Text className="text-lg font-bold">
                      Dr. Joseph Brostito
                    </Text>
                    <Text className="text-base font-light text-gray-300">
                      Dental Speacialist
                    </Text>
                  </View>
                </View>

                {/* Child two */}
                <View>
                  <View className="flex-row gap-14 left-2">
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
                {/* Child three */}
                <View>
                  <View className="bg-blue-100 h-12  rounded-3xl w-72 left-12 top-9">
                    <Text className="text-lg pt-2 pl-28 text-blue-400">
                      Detail
                    </Text>
                  </View>
                </View>
              </View>

              {/* End */}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Hide the top navigation header
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Define icons for each tab
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Calendar") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "Chat") {
              iconName = focused ? "chatbox" : "chatbox-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarLabelPosition: "beside-icon", // Show label beside icon when touched
        })}
      >
        {/* Define Tab Screens */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={Schedule} />
        <Tab.Screen name="Chat" component={SignUp} />
        <Tab.Screen name="Profile" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
