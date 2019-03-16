const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    let dbOp;
    console.log('trying to save user');
    // if (this._id) {
    //   //update user
    //   dbOp = db
    //     .collection('users')
    //     .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
    // } else {
    //   // insert new user
    dbOp = db.collection('users').insertOne(this);
    // }
    return dbOp
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) }) // mongodb saves _id fields as an ObjectId in BSON format, not string
      .then(user => {
        // console.log(user);
        return user;
      })
      .catch(err => console.log(err));
  }
}

module.exports = User;
