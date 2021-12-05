/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import { observer } from "mobx-react-lite"

export const WelcomeScreen = observer(
  (props: any) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
      <View testID="WelcomeScreen" style={{ flex: 1, paddingHorizontal: 30 }}>
        <View style={{ marginTop: 180 }}>
          <Text style={{ textAlign: "center", fontSize: 25, marginBottom: 20 }}>Sign In</Text>
          <TextInput placeholder="Email" value={email} onChangeText={(e) => setEmail(e)} />
          <TextInput
            placeholder="Password"
            value={password}
            style={{ marginTop: 50 }}
            onChangeText={(p) => setPassword(p)}
          />
          <Button title="Press me" onPress={() => props.navigation.navigate("demo")} />
        </View>
      </View>
    )
  },
)
