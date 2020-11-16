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
  TouchableWithoutFeedback
} from "react-native";
import styled from "styled-components/native";
import { colors } from "../../Utilities/colors";
import { TodoerAppHeader } from "../../Utilities/TodoerAppHeader";
import { TodoInsert } from "../../Components/TodoListComponents/TodoInsert";
import { TodoList } from "../../Components/TodoListComponents/TodoList";
import { useDatabase } from "../../Utilities/database/useDatabase";
import { ListOfList } from "../../Components/TodoListComponents/ListOfList";

const TodoListCardContainer = styled.View`
  backgroundcolor: ${colors.dark};
  flex: 1;
  bordertopleftradius: 10px;
  bordertoprightradius: 10px;
  marginleft: 10px;
  marginright: 10px;
  margintop: 10px;
`;

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




export function TempListScreen() {
  const [addListModalVisible, setAddListModalVisible] = useState(false);

  useDatabase();

  const handleAddList = () => {
    setAddListModalVisible(true);
  };

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
        {/* <TodoListCardContainer>
                <TodoList style={{flex: 1}}/>
        </TodoListCardContainer>  */}
        <ListOfList></ListOfList>
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={addListModalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              height: "90%",
              marginTop: "auto",
              backgroundColor: colors.dark,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              overflow: "hidden",
              padding: 10,
            }}
          >
            <View>
                <TouchableHighlight
                  onPress={() => {
                    setAddListModalVisible(!addListModalVisible);
                  }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
              <View style={{ flex: 2 }}>
                <ModalTextInputLabel>Title of List</ModalTextInputLabel>
                <KeyboardDismiss>
                <ModalTextInput/>
                </KeyboardDismiss>
              </View>
              <View style={{ flex: 2 }}>
                <ModalTextInputLabel>Purpose of List</ModalTextInputLabel>
                <ModalTextInput/>
              </View>
              <View style={{ flex: 6 }}>
                <ScrollView>
                <ModalTextInputLabel>Add your first 5 todos. Add more todos after you hit the Done Button</ModalTextInputLabel>
                  <ModalTextInputLabelAddListItem>Item 1</ModalTextInputLabelAddListItem>
                  <ModalTextInput/>
                  <ModalTextInputLabelAddListItem>Item 2</ModalTextInputLabelAddListItem>
                  <ModalTextInput/>
                  <ModalTextInputLabelAddListItem>Item 3</ModalTextInputLabelAddListItem>
                  <ModalTextInput/>
                  <ModalTextInputLabelAddListItem>Item 4</ModalTextInputLabelAddListItem>
                  <ModalTextInput/>
                  <ModalTextInputLabelAddListItem>Item 5</ModalTextInputLabelAddListItem>
                  <ModalTextInput/>
                </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
