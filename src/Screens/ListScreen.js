import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView } from 'react-native';
import styled from 'styled-components/native'
import {colors} from '../Utilities/colors'
import {TodoerAppHeader} from '../Utilities/TodoerAppHeader'
import {TodoInsert} from '../Components/TodoListComponents/TodoInsert'
import {TodoList} from '../Components/TodoListComponents/TodoList'
import {useDatabase} from '../Utilities/database/useDatabase'



const TodoListCardContainer = styled.View`
    backgroundColor: ${colors.dark};
    flex: 1;
    borderTopLeftRadius: 10px;
    borderTopRightRadius: 10px;
    marginLeft: 10px;
    marginRight: 10px;
    marginTop: 10px;
`;

export function ListScreen() {

    useDatabase();

    return (
      <SafeAreaView style={{
        flex: 1,
        flexDirection: 'column', //column is the default
        justifyContent: 'flex-start',
        width:"100%",
        height:"100%",
        backgroundColor:colors.light
    }}>
        <View style={{flex: 1}}>
            <TodoerAppHeader></TodoerAppHeader>
        </View>

  {/* A note thhat you can also use flex her instead of height and width in the out row view just use flex:1 in both spots */}
    <View style={{flex: 4, justifyContent: 'flex-start',flexDirection: 'column'}}>
        <TodoListCardContainer>
                <TodoList style={{flex: 1}}/>
        </TodoListCardContainer>
    </View>
  
    </SafeAreaView>
    );
  }
  