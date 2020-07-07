import styled from 'styled-components/native'
import React,{ useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {colors} from "./colors";
import { useFocusEffect } from '@react-navigation/core';
import * as Font from 'expo-font';

//styled header is just a view at the end of the
const StyledHeader = styled.View`
backgroundColor: ${colors.medium};
flexDirection: column;
flex:1;
padding: 21px 7px 7px 7px;
`;

const SelectButtonButtonContainer = styled.TouchableOpacity`
	border-radius: 10px;	
    color:white;
    flex:2;
    alignItems:flex-start;
`;

const AddButtonButtonContainer = styled.TouchableOpacity`
    color:white;
    flex:2;
    alignItems:flex-end;
`;

const CalendarsTextContainer = styled.View`
    alignItems:center;
`;

const StyledButtonText = styled.Text`
  color: white;
  text-align:center;
  font-size:16px;
`;

const AppHeaderNameText = styled.Text`

`;


export function TodoerAppHeader(){

    const [loaded] = Font.useFonts({
        'bangersFont': require('../../assets/fonts/bangers_regular.ttf'),
      });

    return(
    <StyledHeader >
        <View style={{flexDirection: 'row',flex: 1          ,justifyContent:"center"}}>
                <AppHeaderNameText style={{fontFamily:"bangersFont", fontSize:35, color:"white"}}>TODOER</AppHeaderNameText>
        </View>
        <View style={{flexDirection: 'row',flex: 5}} >
            <SelectButtonButtonContainer><StyledButtonText>Select</StyledButtonText></SelectButtonButtonContainer>
            <CalendarsTextContainer><StyledButtonText>Calendars(0)</StyledButtonText></CalendarsTextContainer>
            <AddButtonButtonContainer><StyledButtonText>Add Calendar</StyledButtonText></AddButtonButtonContainer>
        </View>
    </StyledHeader> 
    )
}