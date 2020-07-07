import styled from 'styled-components/native'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {colors}  from '../Utilities/colors'
import {TodoerHeader} from '../Utilities/Header'



export function CalendarScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:colors.dark  }}>
        <TodoerHeader></TodoerHeader>
        <Text>Calendar</Text>
      </View>
    );
  
  }
