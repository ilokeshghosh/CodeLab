import express from 'express';
import { createTodo, updateTodo, todoList, getTodoById, deleteById } from './controllers/todo.controller';
// import bodyParse from 'body-parser';
const app = express();

app.use(express.json({ limit: '16kb' }));

// app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// app.use(express.static("public"))
// app.use(cookieParser())

// app.use(bodyParse.json());

app.get('/', (req, res) => {
    return res.json('everything working fine');
})

// app.post('/todo',createTodo)
app.route('/todo').post(createTodo).get(todoList);
app.route('/todo/:id').patch(updateTodo).get(getTodoById).delete(deleteById);

// app.listen(8000, () => {
//     console.log('server is running on : http://localhost:8000');
// })

export { app }