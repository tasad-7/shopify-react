/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from "react"
import { View, Text, Button } from "react-native"
import { observer } from "mobx-react-lite"

export const DemoScreen = observer(
  (props: any) => {
   

    return (
      <View testID="DemoScreen" style={{ flex: 1, paddingHorizontal: 30 }}>
        <View style={{ marginTop: 180 }}>
          <Text style={{ textAlign: "center", fontSize: 25, marginBottom: 20 }}>Demo</Text>
          
          <Button title="Press me" onPress={() => props.navigation.navigate("demo")} />
        </View>
      </View>
    )
  },
)
