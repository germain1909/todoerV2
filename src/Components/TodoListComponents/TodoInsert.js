import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView,Button } from 'react-native';
import styled from 'styled-components/native'
import {colors} from '../../Utilities/colors'

const TodoListInput = styled(TextInput)`
    padding: 20px;
    borderBottomColor: ${colors.light};
    borderBottomWidth: 1px;
    fontSize: 22px;
    marginLeft: 20px;
    color: ${colors.text};
`;

const TodoListAddButton = styled(Button)`
    marginTop: 100px;
`;
const AddButton = styled.TouchableOpacity`
    flex:2;
    alignItems:flex-end;
    paddingTop:20px;
    paddingLeft: 30px;
    paddingRight: 30px;
`;

const StyledButtonText = styled.Text`
  color: ${colors.text};
  text-align:center;
  font-size:20px;
`;

export function TodoInsert(props) {
    const {onChangeText, onHandleAddTodo, value} = props;
    return (
   
        <View style={{flexDirection: 'row', height: 80 }}>
            <View style={{flex: 8}} >
                <TodoListInput
                placeholder="Type your todo here!"
                placeholderTextColor={colors.text}
                autoCorrect={false}
                onChangeText = {onChangeText}
                value = {value}
                />
            </View>
            <View style={{flex: 4}}>
                <AddButton onPress={() => onHandleAddTodo()} ><StyledButtonText>Add To List</StyledButtonText></AddButton>
            </View>
        </View>
    );
  }