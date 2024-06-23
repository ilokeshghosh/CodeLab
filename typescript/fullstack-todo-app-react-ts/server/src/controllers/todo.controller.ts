import { Todo } from "../models/todo.model"
import { Request, Response } from "express";

const createTodo = async (req: Request, res: Response) => {

    const { title: string } = req.body;

    const response = await Todo.create({
        title: string
    })

    if (!response) {
        throw new Error('Todo not created');
    }

    return res.status(200).json(response);
}

const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title: string } = req.body

    const response = await Todo.findByIdAndUpdate(id, { title: string }, { new: true });

    if (!response) {
        throw new Error('failed to updated todo');
    }

    return res.status(200).json(response);
}

const todoList = async (req: Request, res: Response) => {
    const response = await Todo.find();
    if (!response) {
        throw new Error('Todos Not Found');
    }

    return res.status(200).json(response);
}

const getTodoById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        throw new Error('ID Not Found');
    }

    const response = await Todo.findById(id);

    if (!response) {
        throw new Error('Todo Not Found');
    }

    return res.status(200).json(response);
}

const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        throw new Error('Id Not Found');
    }

    const response = await Todo.findByIdAndDelete(id);

    if (!response) {
        throw new Error('Todo Not Found');
    }

    return res.status(200).send('Todo Deleted');
}

export { createTodo, updateTodo, todoList, getTodoById, deleteById };