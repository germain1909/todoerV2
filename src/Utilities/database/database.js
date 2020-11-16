import React from 'react';
import * as SQLite from 'expo-sqlite';
import moment from 'moment'

const db = SQLite.openDatabase('db.todoer');

    // we are only going to drop the tables on dev we wont use this function on prod 
    const dropTables  = () => {
        return new Promise((resolve,reject) => {
            const drop_table_query = 'drop table lists';

            db.transaction(tx =>{
                tx.executeSql(drop_table_query);
            },  error => 
                { 
                    console.log(error) 
                    reject(error)  
            
                },
                () => 
                {
                    console.log('successfully dropped database tables ')
                    resolve('successfully dropped database tables ');
                }

            )
        })
    };


//whichever one of these resolve or reject that comes out of here will be returned
    const createTables  = () => {
        return new Promise((resolve,reject) => {
            const create_table_query = `CREATE TABLE IF NOT EXISTS lists(listid INTEGER PRIMARY KEY AUTOINCREMENT,
                listname TEXT,
                createdby TEXT,
                reason TEXT,
                createddate INTEGER,
                updateddate INTEGER
                 )`;

            db.transaction(tx =>{
                tx.executeSql(create_table_query);
            },  error => 
                { 
                    console.log(error) 
                    reject(error)  
            
                },
                () => 
                {
                    console.log('successfully created database tables ')
                    resolve('successfully created database tables ');
                }

            )
        })
    };

    const insertList = () => {
        const insert_query = `INSERT INTO lists (listname, createdby,reason, createddate, updateddate) values (?, ?, ?, ?, ?)`;

        const createdDate = new moment().format('YYYY-MM-DD HH:MM');
        const updatedDate = new moment().format('YYYY-MM-DD HH:MM');

        db.transaction(tx =>{
            tx.executeSql(insert_query,['listname','germain','Whats your purpose',createdDate,updatedDate]);
        },  error => 
            {
                console.log("db error inserting list");
                console.log(error);

            },
            () => 
            {
                console.log('successfully inserted into database ')
            }
        )
    }

    const retrieveList = (setListOfList) => {
        const get_query = `SELECT * FROM lists`;
        let results = {};

        db.transaction(tx =>{
            tx.executeSql(get_query,[],(txobj,resultset) =>{console.log(resultset); setListOfList(resultset)} , (txobj,error) =>{console.log(error);});
        },  error => 
            {
            console.log("db error retrieving from database");
            console.log(error);

            },
            () => 
            {
            console.log('successfully retrieved from database ')
            console.log(results)
            return results;
            }
        )

    }


    export const database = {
        dropTables,
        createTables,
        insertList,
        retrieveList,
      }

