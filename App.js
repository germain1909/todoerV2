import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native'
import {CalendarScreen} from './src/Screens/CalendarsScreen.js'
import {FlexScreen} from './src/Screens/FlexScreen.js'



export const StyledText = styled.Text`
  background: blue;
  border-radius: 3px;
  border: none;
  color: white;
`;

export const StyledButtonText = styled.Text`
  color: white;
  text-align:center;
`;

export const ButtonContainer = styled.TouchableOpacity`
	width: 100px;
	height: 40px
	padding: 12px;
	border-radius: 10px;	
  background-color: blue;
  color:white;
`;
function EventsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events</Text>
      <StyledText>Text</StyledText>
      <ButtonContainer><StyledButtonText>Text</StyledButtonText></ButtonContainer>
    </View>
  );
}

function ListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Lists</Text>
    </View>
  );
}





/* <View style={styles.container}>
        <Text>Get money G  Dont quit Get paid</Text>
        <StatusBar style="auto" />
      </View> */

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calendars" component={FlexScreen} />
        <Tab.Screen name="All Events" component={EventsScreen} />
        <Tab.Screen name="Lists" component={ListScreen} />
        {/* <Tab.Screen name="Calendars" component={CalendarScreen} />
        <Tab.Screen name="All Events" component={EventsScreen} />
        <Tab.Screen name="Lists" component={FlexScreen} /> */}
        
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
