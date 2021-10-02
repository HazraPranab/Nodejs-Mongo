const {MongoClient,ObjectId} = require('mongodb')

MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client) {
  if (err) throw err
  console.log('CONNECTED');

  var db= client.db('animals');

//#region Insert 

  db.collection('mamals').insertMany(
    
     [{
          Name : 'Snake',
          Address : 'Forest',
          timeStamp: new Date()
      },
      {
        Name : 'Monkey',
        Address : 'Forest',
        timeStamp: new Date()
    }]
      ,(err,result) => {
          if(err) {return console.log('Error')}
          else
            return console.log('Inserted Successfuly');
      }
  )
 //#endregion
 //#region Find
    // db.collection('mamals').find().toArray((err,doc) =>
    //     {
    //         if(err) throw err;
    //         //console.log(doc);
    //         console.log(doc.filter(x=> x.Address == 'Street'));
    //     });

 //#endregion

 //#region Update
// db.collection('mamals').findOneAndUpdate(
//     {
//         _id: new ObjectId('6157eb8771f79b69ca9e03df')
//     },
//     {
//         $set: 
//         {
//             isPet: false
//         }
//     },
//     (err, result) => {
//         if (err) throw err;
//         console.log("Updated the record");
//     }
// )
 //#endregion

 //#region Delete
// db.collection('mamals').findOneAndDelete(
//     {
//         Name: "Dog"
//     }
// ).then(res => console.log("Deleted")).catch(err => console.log(err));

//#endregion

})
