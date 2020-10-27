import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView,Button } from 'react-native';
import styled from 'styled-components/native'
import {colors} from '../../Utilities/colors'
import {TodoInsert} from './TodoInsert'
import {database}  from '../../Utilities/database/database'
import {useDatabase} from '../../Utilities/database/useDatabase'

export function TodoList() {
    const [todos, setTodos] = useState([{text:'germaio',key:1}])
    const [value, setValue] = useState('')

    // useEffect (() =>{
    //     const db = database.getConnection();
    // },[])


    const handleAddTodo = () => {
       
        database.insertList();
        database.retrieveList();
        if (value.length > 0) {
         setTodos([...todos, { text: value, key: Date.now(), checked:false}])
         setValue('')
         }
      }
    return (
   
        <View style={{flex:1}}>
            <TodoInsert 
            style={{flex: 1}}
            onChangeText={(value)=>setValue(value)}
            onHandleAddTodo = {() => handleAddTodo()}
            value = {value}
         />
            <ScrollView style={{flex: 1}}>
                <Text>First todo in the</Text>
                {todos.map((task) => (
                    <Text key={task.key}>
                        {task.text}
                    </Text>
                )) 
                }
            </ScrollView>
        </View>
    );
  }