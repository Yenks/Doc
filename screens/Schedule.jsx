import {
  View,
  Text,
  Button,
  Image,
  SafeAreaViewComponent,
  ScrollView,
  styles,
  TouchableOpacity,
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
    <View >
      
   <SafeAreaView className=" bg-slate-50 h-screen p-3 ">

    {/* First Main View */}
    <View className="m-2">
    <ScrollView className=" " horizontal={true} showsHorizontalScrollIndicator={false}>
  <View className="flex-row gap-4">
    
  <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: '#ebf8ff', borderRadius: 24 }}>
      <View className="bg-zinc-100 h-16 rounded-3xl w-52">
        <Text className="text-lg top-4 left-4 text-gray-500">
          Upcoming schedule
        </Text>
      </View>
    </TouchableOpacity>
    
    <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: '#ebf8ff', borderRadius: 24 }}>
      <View className="bg-zinc-100 h-16 rounded-3xl w-52">
        <Text className="text-lg top-4 left-4 text-gray-500">
          Upcoming schedule
        </Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: '#ebf8ff', borderRadius: 24 }}>
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
      <ScrollView className="mb-7" showsVerticalScrollIndicator={false}> 
      <View className=" flex-col gap-4 mb-24">

      {/* Parent 1 */}
      <View className="h-48 bg-white rounded-lg">
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
              <Text className="text-lg font-bold">Dr. Joseph Brostito</Text>
              <Text className="text-base font-light text-gray-300">Dental Speacialist</Text>
            </View>
        </View>

{/* HR */}

<View className="bg-gray-200 w-80 top-2 left-4 h-px"></View>

        {/* Child two */}
        <View>
          
        <View className="flex-row gap-10 top-5 left-4">
            <View className="flex-row ">
              <View>
                <MaterialCommunityIcons
                  name="calendar-range-outline"
                  size={24}
                  color="gray"
                />
              </View>
              <View>
                <Text className="text-gray-500 font-light top-1 left-1">
                  Sunday, 12 June
                </Text>
              </View>
            </View>

            <View className="flex-row">
              <View>
                <MaterialCommunityIcons
                  name="clock-time-four-outline"
                  size={24}
                  color="gray"
                />
              </View>
              <View>
                <Text className="text-gray-500 font-light top-1 left-1">
                  11:00 - 12:00 AM
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Child three */}
        <View>
        <View className="bg-blue-100 h-12  rounded-3xl w-72 left-9 top-9">
        <Text className="text-lg pt-2 pl-28 text-blue-400">
         Detail
        </Text>
      </View>
        </View>

      </View>

                
             
             
      

      {/* End */}

       {/* Parent 2 */}
       <View className="h-48 bg-white rounded-lg">
        {/* Child one */}
        <View className=" flex-row gap-4 top-1 p-2">
          <View>
          <Image
                borderRadius={6}
                borderstyle="border-black"
                source={{
                  uri: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600v",
                }}
                className="rounded-full  "
                height={60}
                width={60}
              />
            
          </View>
       
          <View className="flex-col space-y-1">
              <Text className="text-lg font-bold">Dr. Josephine Biden</Text>
              <Text className="text-base font-light text-gray-300">Cardiologist</Text>
            </View>
        </View>

{/* HR */}

<View className="bg-gray-200 w-80 top-2 left-4 h-px"></View>

        {/* Child two */}
        <View>
          
        <View className="flex-row gap-14 top-5 left-2">
            <View className="flex-row ">
              <View>
                <MaterialCommunityIcons
                  name="calendar-range-outline"
                  size={24}
                  color="gray"
                />
              </View>
              <View>
                <Text className="text-gray-500 font-light top-1 left-1">
                  Sunday, 12 June
                </Text>
              </View>
            </View>

            <View className="flex-row">
              <View>
                <MaterialCommunityIcons
                  name="clock-time-four-outline"
                  size={24}
                  color="gray"
                />
              </View>
              <View>
                <Text className="text-gray-500 font-light top-1 left-1">
                  11:00 - 12:00 AM
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Child three */}
        <View>
        <View className="bg-blue-100 h-12  rounded-3xl w-72 left-9 top-9">
        <Text className="text-lg pt-2 pl-28 text-blue-400">
         Detail
        </Text>
      </View>
        </View>

      </View>

                
             
             
      

      {/* End */}
 {/* Parent 1 */}
 <View className="h-48 bg-white rounded-lg">
        {/* Child one */}
        <View className=" flex-row gap-4 top-1 p-2">
          <View>
          <Image
                borderRadius={6}
                borderstyle="border-black"
                source={{
                  uri: "https://images.pexels.com/photos/5452198/pexels-photo-5452198.jpeg?auto=compress&cs=tinysrgb&w=600",
                }}
                className="rounded-full  "
                height={60}
                width={60}
              />
            
          </View>
       
          <View className="flex-col space-y-1">
              <Text className="text-lg font-bold">Dr. Michael Thompson</Text>
              <Text className="text-base font-light text-gray-300">Dental Speacialist</Text>
            </View>
        </View>

{/* HR */}

<View className="bg-gray-200 w-80 top-2 left-4 h-px"></View>

        {/* Child two */}
        <View>
          
        <View className="flex-row gap-14 top-5 left-2">
            <View className="flex-row ">
              <View>
                <MaterialCommunityIcons
                  name="calendar-range-outline"
                  size={24}
                  color="gray"
                />
              </View>
              <View>
                <Text className="text-gray-500 font-light top-1 left-1">
                  Sunday, 12 June
                </Text>
              </View>
            </View>

            <View className="flex-row">
              <View>
                <MaterialCommunityIcons
                  name="clock-time-four-outline"
                  size={24}
                  color="gray"
                />
              </View>
              <View>
                <Text className="text-gray-500 font-light top-1 left-1">
                  11:00 - 12:00 AM
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Child three */}
        <View>
        <View className="bg-blue-100 h-12  rounded-3xl w-72 left-9 top-9">
        <Text className="text-lg pt-2 pl-28 text-blue-400">
         Detail
        </Text>
      </View>
        </View>

      </View>

                
             
             
      

      {/* End */}
 {/* Parent 1 */}
 <View className="h-48 bg-white rounded-lg">
        {/* Child one */}
        <View className=" flex-row gap-4 top-1 p-2">
          <View>
          <Image
                borderRadius={6}
                borderstyle="border-black"
                source={{
                  uri: "https://images.pexels.com/photos/5407217/pexels-photo-5407217.jpeg?auto=compress&cs=tinysrgb&w=600",
                }}
                className="rounded-full  "
                height={60}
                width={60}
              />
            
          </View>
       
          <View className="flex-col space-y-1">
              <Text className="text-lg font-bold">Dr. Amina Farouk</Text>
              <Text className="text-base font-light text-gray-300">Pediatrician</Text>
            </View>
        </View>

{/* HR */}

<View className="bg-gray-200 w-80 top-2 left-4 h-px"></View>

        {/* Child two */}
        <View>
          
        <View className="flex-row gap-14 top-5 left-2">
            <View className="flex-row ">
              <View>
                <MaterialCommunityIcons
                  name="calendar-range-outline"
                  size={24}
                  color="gray"
                />
              </View>
              <View>
                <Text className="text-gray-500 font-light top-1 left-1">
                  Sunday, 12 June
                </Text>
              </View>
            </View>

            <View className="flex-row">
              <View>
                <MaterialCommunityIcons
                  name="clock-time-four-outline"
                  size={24}
                  color="gray"
                />
              </View>
              <View>
                <Text className="text-gray-500 font-light top-1 left-1">
                  11:00 - 12:00 AM
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Child three */}
        <View>
        <View className="bg-blue-100 h-12  rounded-3xl w-72 left-9 top-9">
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
};

export default SignUp;
