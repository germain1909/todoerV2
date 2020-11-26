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
  Button
} from "react-native";
import styled from "styled-components/native";
import { colors } from "../Utilities/colors";
import { TodoerAppHeader } from "../Utilities/TodoerAppHeader";
import { TodoInsert } from "../Components/TodoListComponents/TodoInsert";
import { TodoList } from "../Components/TodoListComponents/TodoList";
import { useDatabase } from "../Utilities/database/useDatabase";
import { ListOfList } from "../Components/TodoListComponents/ListOfList";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import {database} from '../Utilities/database/database'



const ModalTextInputLabel = styled.Text`
  color: ${colors.text};
  fontSize: 30px;
`;

const ModalTextInputLabelAddListItem = styled.Text`
  color: ${colors.text};
  fontSize: 30px;
`;

const ModalTextInput = styled.TextInput`
  height: 50px;
  borderColor: gray;
  borderWidth: 1px;
  backgroundColor: ${colors.light};
  borderRadius: 20px;
  fontSize: 10px;
`;

const KeyboardDismiss = styled.TouchableWithoutFeedback`
  backgroundColor: ${colors.light};
  height: 100px;
  width: 500px;
`;

const RootStack = createStackNavigator()


export function ListComponent({ navigation }) {
  const [addListModalVisible, setAddListModalVisible] = useState(false);
  const [listOfListArray,setListOfList] = useState({});

  const handleAddList = () => {
    // setAddListModalVisible(true);
    navigation.navigate('MyModal');
  };

  const submitCreateNewList = () => {
    console.log('inserted')
    database.insertList();
    database.retrieveList(setListOfList);
  }

  useEffect(()=>{  
    database.insertList();
    database.retrieveList(setListOfList)
  },[])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column", //column is the default
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        backgroundColor: colors.light,
      }}
    >
      <View style={{ flex: 1 }}>
        <TodoerAppHeader
          headerType="Lists"
          addButtonText="Add Lists"
          addButtonFunction={() => {
            handleAddList();
          }}
        ></TodoerAppHeader>
      </View>
      {/* A note thhat you can also use flex her instead of height and width in the out row view just use flex:1 in both spots */}
      <View
        style={{
          flex: 4,
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        
        <ListOfList listOfListArray={listOfListArray}></ListOfList>
      </View>
    </SafeAreaView>
  );
}

export function ListScreen() {
  return (
    <RootStack.Navigator mode="modal" screenOptions={{
      // headerShown: false,
      // cardStyle: { backgroundColor: 'transparent' }
    }} >
      <RootStack.Screen name="MyList" component={ListComponent} options={{
          headerShown: false,
        }}  />
      <RootStack.Screen name="MyModal" component={ModalScreen} options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' }
        }}/>
      <RootStack.Screen name="Home" component={DetailsScreen} />
    </RootStack.Navigator>
  );
}

function ModalScreen({ navigation }) {

  const goToDetails = () =>{
    navigation.navigate('Home')
  };

  return (
    <View
    style={{
      height: "88%",
      marginTop: "auto",
      backgroundColor: colors.dark,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: "hidden",
      padding: 10,
    }}
    >
      { console.log('HI')}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        {/* <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}
      </View>
      {/* <DetailsScreen/> */}
      <TouchableOpacity onPress={() => {goToDetails()} }>< Text style={{fontSize:40}} >Hey</Text></TouchableOpacity>
      <View style={{ flex: 2 }}>
        <ModalTextInputLabel>Title of List</ModalTextInputLabel>
        <KeyboardDismiss>
          <ModalTextInput />
        </KeyboardDismiss>
      </View>
      <View style={{ flex: 2 }}>
        <ModalTextInputLabel>Purpose of List</ModalTextInputLabel>
        <ModalTextInput />
      </View>
      <View style={{ flex: 6 }}>
      <TouchableOpacity onPress={() => {goToDetails()} }>< Text style={{fontSize:40}} >Hey</Text></TouchableOpacity>
        <ScrollView>
          <ModalTextInputLabel>
            Add your first 5 todos. Add more todos after you hit the Done Button
          </ModalTextInputLabel>
        </ScrollView>
      </View>
    </View>
  );
}



function DetailsScreen({navigation}) {

  return (
    <View
    style={{
      height: "88%",
      marginTop: "auto",
      backgroundColor: colors.dark,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: "hidden",
      padding: 10,
    }}
    >
      <Text>Details</Text>
    </View>
  );
}




