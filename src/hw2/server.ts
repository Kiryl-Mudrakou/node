import * as express from 'express';
import * as cors from 'cors';
const validation = require('./validator');
const bodyParser = require('body-parser');
const validator = require('express-joi-validation').createValidator({})

interface User {
    id: number;
    login: string;
    age: number;
    password: string;
    isDeleted: boolean;
}

const app = express();
app.use(cors());

const users: User[] = require('../files/users.json');

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const idU = users.find(user => {
        return user.id === Number(req.params.id);
    });
    res.send(idU);
});

app.post('/users/add',  validator.body(validation), (req, res) => {
    let usersLength = users.length;
    usersLength++;
    const user = {
        id: Number(usersLength),
        login: req.body.login,
        age: req.body.age,
        password: req.body.password,
        isDeleted: false,
    };
    if (user) {
        users.push(user);
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.delete('/users/:id', (req, res) => {
    const deletedUser = users.find((user: User) => user.id === Number(req.params.id));
    if (deletedUser) {
        deletedUser.isDeleted = true;
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

app.get('/', (req, res) => {
    res.send('hello guest');
});

app.put('/users/change/:id',  validator.body(validation),(req, res) => {
    const userId = users.find((user: User) => user.id === Number(req.params.id));
    if (userId) {
        userId.login = req.body.login;
        userId.age = req.body.age;
        userId.password = req.body.password;
        res.send(userId);
    } else {
        res.sendStatus(400);
    }
});

app.listen(port, () => {
    console.log(`Server successfully started on ${port} port `);
});