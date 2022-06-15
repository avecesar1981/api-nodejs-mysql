const {createConnection} = require('mysql');


 const connection = createConnection({
        host: 'localhost',
        user: 'root',
        password:'',
        database: 'tareas'
    })
    connection.connect(function(err) {
        if (err) {
          console.error('error connecting database: ' + err.stack);
          return;
        }
       
        console.log('connected to bd as id ' + connection.threadId);
      });


module.exports = connection;




