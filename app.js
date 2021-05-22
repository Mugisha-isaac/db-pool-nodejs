const express = require('express');
const app = express();
const db = require('./config');

app.get('/',(req,res)=>{
   // db.query("select * from users",(err,rows)=>{
   //    if(err){
   //       throw err;
   //    }
   //    else{
   //       console.log('data: ',rows);
   //       db.end();
   //    }
   // })

   db.getConnection((err,connection)=>{
      if(err) throw err;
      console.log('connected as id: ' + connection.threadId);
      connection.query('select * from users',(err,rows)=>{
         // returning thread to pool
         connection.release();
         if(err) console.log('Error occured: ',err);
         console.log('Data from users are: \n',rows);
      });
   })
})

app.listen(3000,()=>{
   console.log('app is running');
})