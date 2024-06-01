import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import React from "react";

const TabIcon = ({ icon, color, name, focused }) => {
  return <View></View>;
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <TabIcon />,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
