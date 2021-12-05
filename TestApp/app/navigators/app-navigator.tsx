import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FeedScreen } from "../screens/bottom-tab-screens/feed-screen"
import { ProfileScreen } from "../screens/bottom-tab-screens/profile-screen"
import { NavigationContainer } from "@react-navigation/native"
import { SetGoalScreen } from "../screens/bottom-tab-screens/set-goal-screen"


export const AppStack = () => {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
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
            tabBarLabel: "",
            tabBarLabelStyle: {color: 'black'},
            // eslint-disable-next-line react/display-name
            tabBarIcon: ({ focused }: any) => (
                <MaterialCommunityIcons
                  name="format-list-bulleted"
                  size={30}
                  color={focused === true ? "gold" : "grey"} />
            ),
          }}
      />
       <Tab.Screen
        name="SetGoalScreen"
        component={SetGoalScreen}
        options={{
          tabBarLabel: "",
          tabBarLabelStyle: {color: 'black'},
            // eslint-disable-next-line react/display-name
            tabBarIcon: ({ focused }: any) => (
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={35}
                  color={focused === true ? "green" : "grey"} />
            ),
          }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarLabelStyle: {color: 'black'},
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ focused }: any) => (
              <MaterialCommunityIcons
                name="account"
                size={35}
                color={focused === true ? "blue" : "grey"} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

