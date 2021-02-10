import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Feed from '../Feed/Feed';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Profile') {
                        iconName = focused
                            ? 'people'
                            : 'people';
                    } else if (route.name === 'Feed') {
                        iconName = focused ? 'chatbox' : 'chatbox';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={"#9ca9e2"} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#9ca9e2',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: '#f2f1f5',


                }
            }}>
            <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
            <Tab.Screen name="Feed" component={Feed}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default function Home() {
    return (
        <Tabs></Tabs>
    );
}