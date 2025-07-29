
let express =require('express')
let mysql2=require('mysql2')
let cors=require('cors')

 let app=express()
 let port=8000

 app.use(cors())


 let db= mysql2.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'mkce'
  });


  db.connect((err)=>{

    if(err){
        console.log('Not successfull')
    }else{
        console.log('Successfully Connected')
    }
  })


  app.get('/students',(req,res)=>{

    db.query("select * from cse",(err,result)=>{
      if(err){
       
         res.json(err)
      }else{
            
        res.json(result);

      }
    })


  })


 app.listen(port,()=>{    

    console.log('Server setup is successfull...')

 })