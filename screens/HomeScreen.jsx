import { View, Text, Button} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
    <View>
      {/* <Text className=" text-lg p-10 ">FundFlow</Text> */}
      <View className="top-72  ">
      <Button className=""
        title="Doc Appointment"
        onPress={() => navigation.navigate('sign')}
      />
      </View>
    
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen