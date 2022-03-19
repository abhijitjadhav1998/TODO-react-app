import { Component } from "react";

class TodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: "1", description: "Learn React", done: false, targetDate: new Date() },
                { id: "2", description: "Lear Java", done: false, targetDate: new Date() },
                { id: "3", description: "Become SDE 1", done: false, targetDate: new Date() }
            ]
        }
    }
    render() {
        return (
            <div className="Todos">
                <h1>List Todos</h1>
                <table className="table table-striped table-fixed">
                    <thead>
                        <tr>
                            <th> description</th>
                            <th> is Completed </th>
                            <th> Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TodosComponent