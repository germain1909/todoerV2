import styled from 'styled-components/native'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {colors} from "./colors";


const StyledHeader = styled.View`
backgroundColor: ${colors.medium};
width:100%;
height:30%;
bottom:0%;
`;

const Button = styled.Button`
  color: palevioletred;
  position:relative;
  left:25%;
  textAlign:left;
`;


export const StyledText = styled.Text`
  background: blue;
  border-radius: 3px;
  border: none;
  color: white;
  position:absolute;
`;



const ButtonContainer = styled.TouchableOpacity`
	width: 100px;
	height: 40px
	padding: 12px;
	border-radius: 10px;	
  background-color: blue;
  color:white;
  right:5%;
`;

export const StyledButtonText = styled.Text`
  color: white;
  text-align:center;
`;


export function TodoerHeader(){

    return(
    <StyledHeader>
        <Button id="editCalendarsButton" title="Edit" color="palevioletred">Button</Button>
        <ButtonContainer><StyledButtonText>Text</StyledButtonText></ButtonContainer>
    </StyledHeader> 
    )
}