import styled from "styled-components/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./colors";
import { useFocusEffect } from "@react-navigation/core";
import * as Font from "expo-font";
import * as Svg from 'react-native-svg';

//styled header is just a view at the end of the
const StyledHeader = styled.View`
  backgroundColor: ${colors.medium};
  flexDirection: column;
  flex: 1;
  padding: 2px 2px 2px 2px;
`;

const SelectButtonButtonContainer = styled.TouchableOpacity`
  border-radius: 10px;
  flex: 2;
  alignItems: flex-start;
`;

const AddButtonButtonContainer = styled.TouchableOpacity`
  flex: 2;
  alignItems: flex-end;
`;

const CalendarsTextContainer = styled.View`
  flex: 2;
  alignItems: center;
`;

const StyledButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 16px;
`;

const AppHeaderNameText = styled.Text``;
const StyledAppHeaderImage = styled.Image`
margin-top:10px;
height:50px;
width:100px;

`;

export function TodoerAppHeader(props) {
  const { headerType, addButtonText, addButtonFunction } = props;

  return (
    <StyledHeader>
      <View style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}>
      <StyledAppHeaderImage source={require('./img/todoerPSDExport.psd')}/>
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <SelectButtonButtonContainer>
          <StyledButtonText>Select</StyledButtonText>
        </SelectButtonButtonContainer>
        <CalendarsTextContainer>
          <StyledButtonText>{headerType}(1)</StyledButtonText>
        </CalendarsTextContainer>
        <AddButtonButtonContainer onPress={() => addButtonFunction()}>
          <StyledButtonText>{addButtonText}</StyledButtonText>
        </AddButtonButtonContainer>
      </View>
    </StyledHeader>
  );
}
