/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from "react"
import { View, Text } from "react-native"
import { observer } from "mobx-react-lite"

export const ProfileScreen = observer((props: any) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 30 }}>
      <View style={{ marginTop: 180 }}>
        <Text style={{ textAlign: "center", fontSize: 25, marginBottom: 20 }}>Profile</Text>
      </View>
    </View>
  )
})
