import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView,Button } from 'react-native';
import styled from 'styled-components/native'
import {colors} from '../../Utilities/colors'
import {TodoInsert} from './TodoInsert'
import {database}  from '../../Utilities/database/database'
import {useDatabase} from '../../Utilities/database/useDatabase'
import { set } from 'react-native-reanimated';

export function ListOfList(props) {
    const [todos, setTodos] = useState([{text:'germaio',key:1}])
    const [value, setValue] = useState('')
    const {listOfListArray} = props;

    return (
   
        <View style={{flex:1}}>
            <ScrollView style={{flex: 1}}>
            { console.log('array',listOfListArray)}
                { console.log(listOfListArray===true)}
                    {
                    
                    
                    listOfListArray.hasOwnProperty('rows')==false?console.log('hi'):<Text>{listOfListArray.rows._array[0].listname}</Text>

                    
                    
                    }
                 {/* <Text>{listoflistArray}</Text> */}
                 {/* <Text>{listoflistArray.rows._array[0].listname}</Text> */}
                 
            </ScrollView>
        </View>
    );
  }