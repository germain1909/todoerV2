// force the state to clear with fast refresh in Expo
// @refresh reset
import React, {useEffect} from 'react';

import {database} from './database'

export function useDatabase() {
  const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false);

  useEffect(() => {
    async function loadDataAsync() {
      try {
        await database.dropTables()  //clear tables only on dev
        await database.createTables() // create tables
        // await database.insertList()    // insert into tables 

        setDBLoadingComplete(true);
      } catch (e) {
        console.warn(e);
      }
    }

    loadDataAsync();
  }, []);

  return isDBLoadingComplete;
}