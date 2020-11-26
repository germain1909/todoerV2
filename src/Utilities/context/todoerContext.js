// force the state to clear with fast refresh in Expo
// @refresh reset

import React, { useEffect, createContext, useState } from 'react';
import {database} from '../components/database'

export const TodoerContext = createContext({});

export const TodoerContextProvider = props => {
  // Initial values are obtained from the props
  const {
    users: initialUsers,
    children
  } = props;

  // Use State to store the values
  const [allList, setAllList] = useState({});

  useEffect(() => {
    refreshList(setAllList);
  }, [] )

  const addNewList = () => {
    return database.insertList();
  };

  const refreshList = (setAllList) =>  {
    return database.retrieveList(setAllList);
  }

  // Make the context object:
  const todoerContext = {
    allList,
    setAllList
  };

  // pass the value in provider and return
  return <TodoerContext.Provider value={todoerContext}>{children}</TodoerContext.Provider>;
};