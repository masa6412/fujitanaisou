const express = require('express');
const app = express();
const dbPath = "app/db/database.sqlite3"
const path = require('path')

const sqlite3 = require('sqlite3')

app.use(express.urlencoded({extended: true}))
app.use(express.json()) 

app.use(express.static(path.join(__dirname, 'public')))

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, access_token'
    )

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
      res.send(200)
    } else {
      next()
    }
  }
  app.use(allowCrossDomain)

// get all users
app.get('/api/v1/users', (req, res) => {
    const db = new sqlite3.Database(dbPath)
    res.set('Access-Control-Allow-Origin', '*' )
    
    db.all('SELECT * FROM users', (err, rows) => {
        res.json(rows)
    })
    db.close()
})

// get a user
app.get('/api/v1/users/:id', (req, res) => {
    const db = new sqlite3.Database(dbPath)
    const id = req.params.id
    res.set('Access-Control-Allow-Origin', '*' )
    
    db.get(`SELECT * FROM users WHERE id = ${id}`, (err, row) => {
        if (!row) {
            res.status(404).send({message: "指定したユーザーは存在しません"})
        } else {
            res.status(200).json(row)
        }

    })
    db.close()
})

// search user
app.get('/api/v1/search', (req, res) => {
    const db = new sqlite3.Database(dbPath)
    const keyword = req.query.q
    // const keyword = document.getElementById('search').value
    
    db.get(`SELECT * FROM users WHERE kana LIKE "%${keyword}%"`, (err, rows) => {
        res.json(rows)
    })
    db.close()
})


// SQL実行関数
const run = async (sql, db, res, message) => {
    return new Promise((resolve, reject) => {
        db.run(sql, (err) => {
            if (err) {
                res.status(500).send(err)
                return reject()
                } else {
                res.json({message: message})
                return resolve()
            }
        })
    })
}

//create a user
app.post('/api/v1/users', async (req, res) => {
    const db = new sqlite3.Database(dbPath)

    const name = req.body.name
    const kana = req.body.kana
    const addess = req.body.address
    const company = req.body.company ? req.body.company : ""
    const department = req.body.department ? req.body.department : ""
    const phoneNumber = req.body.phoneNumber
    const post = req.body.post ? req.body.post : ""
    const post2 = req.body.post2 ? req.body.post2 : ""
    const contents = req.body.contents

    await run (`INSERT INTO users (name, kana, addess, company, department, phoneNumber, post, post2, contents) VALUES 
        ("${name}", "${kana}", "${addess}", "${company}", "${department}", "${phoneNumber}", "${post}", "${post2}", "${contents}")`,
        db,
        res,
        "送信しました！"
        )
    db.close()
})

// update user
app.put('/api/v1/users/:id', async (req, res) => {
    const db = new sqlite3.Database(dbPath)
    const id = req.params.id
    res.set('Access-Control-Allow-Origin', '*' )

    // 現在のユーザー情報を取得する
    db.get(`SELECT * FROM users WHERE id = ${id}`, async (err, row) => {
        const name = req.body.name ? req.body.name : row.name
        const kana = req.body.kana ? req.body.kana : row.kana
        const addess = req.body.address ? req.body.addess : row.addess
        const company = req.body.company ? req.body.company : row.company
        const department = req.body.department ? req.body.department : row.department
        const phoneNumber = req.body.phoneNumber ? req.body.phoneNumber : row.phoneNumber
        const post = req.body.post ? req.body.post : row.post
        const post2 = req.body.post2 ? req.body.post2 : row.post2
        const infomation = req.body.infomation ? req.body.infomation : row.infomation
        
        await run (`UPDATE users SET name="${name}", kana="${kana}", addess="${addess}", company="${company}", department="${department}", phoneNumber="${phoneNumber}", post="${post}", post2="${post2}", infomation="${infomation}" WHERE id = ${id}`,
        db,
        res,
        "ユーザー情報を更新しました！"
        )
    })
    db.close()
})

app.delete('/api/v1/users/:id', async (req, res) => {
    const db = new sqlite3.Database(dbPath)
    const id = req.params.id
    res.set('Access-Control-Allow-Origin', '*' )

    // 現在のユーザー情報を取得する
        await run (`DELETE FROM users WHERE id = ${id}`,
        db,
        res,
        "ユーザーを削除しました！"
    )
    db.close()
})

const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listen on port: " + port)