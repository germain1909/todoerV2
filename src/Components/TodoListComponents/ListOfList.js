import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView,Button } from 'react-native';
import styled from 'styled-components/native'
import {colors} from '../../Utilities/colors'
import {TodoInsert} from './TodoInsert'
import {database}  from '../../Utilities/database/database'
import {useDatabase} from '../../Utilities/database/useDatabase'
import { set } from 'react-native-reanimated';

export function ListOfList() {
    const [todos, setTodos] = useState([{text:'germaio',key:1}])
    const [value, setValue] = useState('')
    const [listoflistArray,setListOfList] = useState({});

    useEffect (() =>{
        console.log('inserted')
        database.insertList();
        database.retrieveList(setListOfList);
    },[])

    return (
   
        <View style={{flex:1}}>
            <ScrollView style={{flex: 1}}>
                    {/* {console.log('G',listoflistArray.rows._array[0].listname)} */}
                 {/* <Text>{listoflistArray}</Text> */}
                 {/* <Text>{listoflistArray.rows._array[0].listname}</Text> */}
            </ScrollView>
        </View>
    );
  }