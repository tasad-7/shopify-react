import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FeedScreen } from "../screens/bottom-tab-screens/feed-screen"
import { ProfileScreen } from "../screens/bottom-tab-screens/profile-screen"


export const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator()
  return (
      <Tab.Navigator
      initialRouteName="FeedScreen"
      // tabBarOptions={{
      //   activeTintColor: "yellow",
      //   inactiveTintColor: "grey",
      // }}
      >
      <Tab.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
            tabBarLabel: "Feed",
            // eslint-disable-next-line react/display-name
            tabBarIcon: ({ focused }: any) => (
                <MaterialCommunityIcons
                  name="account"
                  size={25}
                  color={focused === true ? "yellow" : "grey"} />
            ),
          }}
      />
        <Tab.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
            tabBarLabel: "Feed",
            // eslint-disable-next-line react/display-name
            tabBarIcon: ({ focused }: any) => (
                <MaterialCommunityIcons
                  name="account"
                  size={25}
                  color={focused === true ? "yellow" : "grey"} />
            ),
          }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ focused }: any) => (
              <MaterialCommunityIcons
                name="account"
                size={25}
                color={focused === true ? "yellow" : "grey"} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
