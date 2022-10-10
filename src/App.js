import React from "react";
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./views/UserList";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="UserList" component={UserList}/>
                <Stack.Screen name="UserForm" component={UserForm}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}