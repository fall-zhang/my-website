> Create by **fall** on 18 Nov 2020<br/>
> Recently revised in 27 Mar 2025

## 数据库操作

node 连接 mongodb 时，需要安装驱动，使用 `mongodb`

先从 `npm` 上安装 `mongodb`

`npm install mongodb` 安装驱动 

### 建立连接

```js
const { MongoClient } = require("mongodb");
const url = 'mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority'
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    // find code goes here
    // iterate code goes here
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
```

### 创建集合

```js
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority'
MongoClient.connect(url,(err,db)=>{
  if(err) throw err
  console.log('成功连接数据库')
  const dbTest = db.db('test') // 创建/使用 test 数据库
  const coll = db.collection("planets");
})
```

### 插入数据

插入单条数据

```js
const { MongoClient } = require('mongodb')
const url = 'mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority'
const client = new MongoClient(url)
async function run(){
  try{
    await client.connect();
    console.log('成功连接数据库')
    const dbTest = db.db('test')
    const collect = db.collection("comets");
    const addObj = { name: "fall 的笔记", url: "fallzhang.top" };
    collect.insertOne(addObj);
  }  finally {
    // 确保每次都要关闭连接
    await client.close();
  }
}
run().catch(console.dir);
```

插入多条数据

```js
const {MongoClient} = require('mongodb')
const url = 'mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority'
const client = new MongoClient(url)
async function run(){
  try {
    await client.connect();
    console.log('成功连接数据库')
    const dbTest = db.db('test')
    const addList = [
      { name: "fall 的笔记", url: "fallzhang.top" },
      { name: "fall 的 github", url: "github.com/fall-zhang" }
    ];
    const result = dbTest.collection("underWare").insertMany(addList);
    console.log(result.insertedIds)
  } finally {
    // 确保每次都要关闭连接
    await client.close();
  }
}
run().catch(console.dir);
```

### 更新数据

```js
const {MongoClient} = require('mongodb')
const url = 'mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority'
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // 使用数据库和集合
    const collect = db.db('test').collection('underWare')
    // 更新一条数据(查找到的第一条数据)
    underWare.updateOne({ type: "cn" },{$set: { "url" : "全部都清空" }})
    // 更新多条数据
    const upManyResult = underWare.updateMany({}，{ $mul: {
      radius: 1.60934
 		 }})
    // 操作的数量
    console.log('upManyResult count: ', upManyResult.modifiedCount)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
```

### 删除数据

```js
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // 使用数据库和集合
    const db = client.db("sample_guides");
    const coll = db.collection("comets");
    // 删除多个数据
    const doc = {
      orbitalPeriod: {
        $gt: 5,
        $lt: 85
      }
    };
    const result = await coll.deleteMany(doc);
    // 删除的数量
    console.log("Number of documents deleted: " + result.deletedCount);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```

### 数据查询

简单查询

- 如果不指定任何查询运算符，驱动程序将以 AND（且）方式解释您的条件。

```js
const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
     // 使用数据库和集合
    const db = client.db("sample_guides");
		const coll = db.collection("planets");
     // 查询数据
    const cursor = coll.find({ hasRings: true });
    // 对数据进行迭代
    await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

```

复杂查询

```js
const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
const client = new MongoClient(uri);
// 复杂查询
async function query() {
  try {
    await client.connect();
     // 使用数据库和集合
    const db = client.db("sample_guides");
		const coll = db.collection("planets"); 
     // 查询数据，surfaceTemperatureC.mean 小于 15
    const cursor = coll.find({ "surfaceTemperatureC.mean": { $lt: 15 } });
     // 条件查询，且。查询大于 2，小于 5
    const cursor2 = coll.find({
  		$and: [{ orderFromSun: { $gt: 2 } }, { orderFromSun: { $lt: 5 } }],
		});
    // 条件查询，大于 7 或 小于 2。
    const cursor = coll.find({
      $or: [{ orderFromSun: { $gt: 7 } }, { orderFromSun: { $lt: 2 } }],
    });
    // 对数据进行迭代
    await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
query().catch(console.dir);
```

查询单个数据
