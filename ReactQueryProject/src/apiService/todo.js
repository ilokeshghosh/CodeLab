import axios from "axios";

class Todo {
    async getTodoList() {
        try {
            const response = await axios.get('http://localhost:3500/todos')
            return response.data;
        } catch (error) {
            console.log('Error while getting todo list')
        }

    }

    async addTodo(data) {
        try {
            const response = await axios.post('http://localhost:3500/todos', {
                id: data.id,
                title: data.title,
                description: data.description,
                due_data: data.dueDate,
                priority: data.priority,
                completed: false
            })
            return response.data;
        } catch (error) {
            console.log('Error while adding todo');
        }
    }

    async getTodoById(id) {
        try {
            const response = await axios.get(`http://localhost:3500/todos?id=${id}`)
            return response.data;
        } catch (error) {
            console.log('Error while getting todo by ID');
        }
    }

    async updateTodo(id, data) {
        try {
            const response = await axios.patch(`http://localhost:3500/todos/${id}`, data)
            return response.data
        } catch (error) {
            console.log('Error while updating todo')
        }
    }

    async deleteTodo(id) {
        try {
            const response = await axios.delete(`http://localhost:3500/todos/${id}`)
            return response.data
        } catch (error) {
            console.log("Error while deleting todo");
        }
    }
}

export default new Todo;