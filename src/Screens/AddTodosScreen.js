import React from 'react';
import { View, SafeAreaView,Text } from 'react-native';
import {TodoInsert} from '../Components/TodoListComponents/TodoInsert';
import {TodoList} from '../Components/TodoListComponents/TodoList'
import { colors } from "../Utilities/colors";

export function AddTodosScreen () {
    return(
        <SafeAreaView style={{
            flex: 1,
            flexDirection: 'column', //column is the default
            justifyContent: 'flex-start',
            alignItems: 'baseline',
            width:"100%",
            height:"100%",
            backgroundColor:colors.light
        }}>
{/* A note thhat you can also use flex her instead of height and width in the out row view just use flex:1 in both spots */}

                {/* <View style={{flex: 2}}>
                    <TodoInsert/>
                </View>

                <View style={{ flex:2}}>
                    <TodoList/>
                </View> */}
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>

        </SafeAreaView>
    )
}