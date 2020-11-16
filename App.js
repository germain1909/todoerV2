import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native'
// import {CalendarScreen} from './src/Screens/CalendarsScreen.js'
import {FlexScreen} from './src/Screens/FlexScreen.js'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {colors} from './src/Utilities/colors';
import {ListScreen} from './src/Screens/ListScreen';
import {TodoerAppHeader} from './src/Utilities/TodoerAppHeader';
import {TestScreen} from './src/Screens/TestScreen'



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
    <SafeAreaView style={{
      flex: 1,
      flexDirection: 'column', //column is the default
      justifyContent: 'flex-start',
      alignItems: 'baseline',
      width:"100%",
      height:"100%",
      backgroundColor:colors.light
  }}>

    <View style={{flexDirection: 'row',flex: 1}}>
      <TodoerAppHeader headerType='Calendars' addButtonText='Add Calendar'/>
    </View>

    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
      <CalendarList/>
    </View>

    </SafeAreaView>
  );
}

// function ListScreen() {
//   return (
//     <SafeAreaView style={{
//       flex: 1,
//       flexDirection: 'column', //column is the default
//       justifyContent: 'flex-start',
//       width:"100%",
//       height:"100%",
//       backgroundColor:colors.light
//   }}>
// {/* A note thhat you can also use flex her instead of height and width in the out row view just use flex:1 in both spots */}
//       <View style={styles.card}>
//               <TextInput style={styles.input} placeholder="Add an item!" />
//       </View>

//   </SafeAreaView>
//   );
// }





/* <View style={styles.container}>
        <Text>Get money G  Dont quit Get paid</Text>
        <StatusBar style="auto" />
      </View> */

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calendars" component={EventsScreen} />
        <Tab.Screen name="All Events" component={FlexScreen} />
        <Tab.Screen name="Lists" component={ListScreen} />
        <Tab.Screen name="Test" component={TestScreen} />
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
