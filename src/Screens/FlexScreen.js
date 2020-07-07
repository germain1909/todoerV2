import styled from 'styled-components/native'
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {colors} from '../Utilities/colors'
import {TodoerHeader} from '../Utilities/Header'
import {TodoerAppHeader} from '../Utilities/TodoerAppHeader'


function BasicFlexColumnViewComponent(){
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor:'white'  }}>

            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center',backgroundColor:'red'  }}>
                <Text>Flex</Text>
            </View>

            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center',backgroundColor:'orange'  }}>
                <Text>Flex</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'green'  }}>
                <Text>Flex</Text>
            </View>
        </SafeAreaView>

    );
}

//flex direction options are row,column,row-reverse,column-reverse
//setting the flexDirection of a view changes its main axis
//by default in react native the main axis is vertical
function BasicFlexRowComponent(){

    return(
        <SafeAreaView>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        </SafeAreaView>

    )

}


// Justify children content along the main flex axis of your container component 
//Justify content options are flex-start, flex-end,center, space-between, space-around, space-evenly
function JustifyContentBasicComponent(){

    return (
        // Try setting `justifyContent` to `center`.
        // Try setting `flexDirection` to `row`.

            <SafeAreaView style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </SafeAreaView>
      );

}


function FlexMultipleRows(){

    return(

        <SafeAreaView style={{
            flex: 1,
            flexDirection: 'column', //column is the default
            justifyContent: 'space-around',
        }}>

                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{ flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
        
        </SafeAreaView>

    )
}


function FlexMultipleRowsWithoutWidthAndHeight(){

    return(

        <SafeAreaView style={{
            flex: 1,
            flexDirection: 'column', //column is the default
            justifyContent: 'flex-start',
            alignItems: 'baseline'
        }}>

                <View style={{flexDirection: 'row'}}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'green'  }}>
                    <Text>Flex</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1, backgroundColor: 'powderblue'}} />
                    <View style={{ flex:1, width: "50%" , height: 100, backgroundColor: 'skyblue'}} />
                    <View style={{flex:1, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{ flexDirection: 'row'}}>
                    <View style={{backgroundColor: 'powderblue'}}><Text>Germain</Text></View>
                    <View style={{backgroundColor: 'skyblue'}} />
                    <View style={{backgroundColor: 'steelblue'}} />
                </View>
        
        </SafeAreaView>

    )
}

function FlexMultipleRowsWithPercentages () {
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
                <View style={{flexDirection: 'row',flex: 1, width:"100%",height:"50%"}}>
                    <View style={{flex:1, backgroundColor: 'powderblue'}} />
                    <View style={{ flex:1, width: "50%" , height: "50%", backgroundColor: 'skyblue'}} />
                    <View style={{flex:1, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{flexDirection: 'row', flex:1, width:"100%",height:"50%"}}>
                    <View style={{flex:1, backgroundColor: 'powderblue'}} />
                    <View style={{ flex:1, width: "50%" , height: "50%", backgroundColor: 'skyblue'}} />
                    <View style={{flex:1, backgroundColor: 'steelblue'}} />
                </View>
        

        </SafeAreaView>
    )
}


function FlexMultipleRowsTodoerHeader () {
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

                <View style={{flexDirection: 'row',flex: 1}}>
                  <TodoerAppHeader></TodoerAppHeader>
                </View>

                <View style={{flexDirection: 'row',flex: 1}}>
                    <View style={{flex:1, backgroundColor: 'powderblue'}} />
                    <View style={{ flex:1, width: "50%" , height: "50%", backgroundColor: 'skyblue'}} />
                    <View style={{flex:1, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{flexDirection: 'row', flex:1}}>
                    <View style={{flex:1, backgroundColor: 'powderblue'}} />
                    <View style={{ flex:1, width: "50%" , height: "50%", backgroundColor: 'skyblue'}} />
                    <View style={{flex:1, backgroundColor: 'steelblue'}} />
                </View>
        

        </SafeAreaView>
    )
}



export function FlexScreen(){

    return(
        //<BasicFlexColumnViewComponent></BasicFlexColumnViewComponent>
        // <BasicFlexRowComponent></BasicFlexRowComponent>
        //<JustifyContentBasicComponent></JustifyContentBasicComponent>
        //<FlexMultipleRows></FlexMultipleRows>
        //<FlexMultipleRowsWithoutWidthAndHeight></FlexMultipleRowsWithoutWidthAndHeight>
        //<FlexMultipleRowsWithPercentages></FlexMultipleRowsWithPercentages>
        <FlexMultipleRowsTodoerHeader></FlexMultipleRowsTodoerHeader>
    );
   
}