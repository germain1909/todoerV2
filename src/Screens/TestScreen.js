import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import styled from "styled-components/native";
import { colors } from "../Utilities/colors";
import { TodoerAppHeader } from "../Utilities/TodoerAppHeader";
import { TodoInsert } from "../Components/TodoListComponents/TodoInsert";
import { TodoList } from "../Components/TodoListComponents/TodoList";
import { useDatabase } from "../Utilities/database/useDatabase";
import { ListOfList } from "../Components/TodoListComponents/ListOfList";
import { AddTodosScreen } from "./AddTodosScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator()


export function TestScreen() {
    return (
        <Stack.Navigator>
          {/* <Stack.Screen navigation={navigation} name="2" component={HomeScreen2} />
          <Stack.Screen navigation={navigation} name="1" component={HomeScreen1} />
          <Stack.Screen navigation={navigation} name="3" component={HomeScreen3} /> */}
          <Stack.Screen  name="2" component={HomeScreen2} />
          <Stack.Screen  name="1" component={HomeScreen1} />
          <Stack.Screen  name="3" component={HomeScreen3} />
        </Stack.Navigator>
    )
  }

  function HomeScreen2({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'blue'}}>Home Screen</Text>
        <TouchableHighlight
        onPress={() => {
          navigation.navigate('1');
        }}
      >
      <Text> This text is the target to be highlighted </Text>
      </TouchableHighlight>
      </View>
    );
  }

function HomeScreen1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('HomeScreen2');
        }}
      >
      <Text> This text is the target to be highlighted </Text>
      </TouchableHighlight>
    </View>
  );
}

function HomeScreen3() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}