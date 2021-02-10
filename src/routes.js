import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native'
const Stack = createStackNavigator();

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import { ceil } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons'



export default function Router() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="Login" component={Login}
                    options={{
                        title: "Bem vindo",
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        }
                    }}>

                </Stack.Screen>
                <Stack.Screen name="Profile"
                    component={Profile}
                    options={{
                        title: "Home",
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold',
                        },

                    }}
                >
                </Stack.Screen>
                <Stack.Screen name="Home" component={Home} options={{
                    title: "Meu Perfil",
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold',
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <AntDesign name='setting' size={30}></AntDesign>
                        </TouchableOpacity>
                    )
                }} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

