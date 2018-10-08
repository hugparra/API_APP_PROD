const  mysql     = require ( 'mysql' ) ;

const db = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database : process.env.RDS_DB_NAME,
insecureAuth : true
});

db.connect((err) => {
  if(err){
    //console.log('Error connecting to Db');
	//console.error('Error connecting to Db');
      process.env ['msg']='conexion errada '+ err;
      console.error('Database connection failed: ' + err.stack);
      return;
  }else{
    process.env ['msg']='conexion correcta '+ process.env.RDS_HOSTNAME;
  }
    //return;
  console.log('Connection established');

});
exports.db=db;
