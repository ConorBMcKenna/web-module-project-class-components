import React from 'react'



class Todo extends React.Component{
  render(){
    return (<li>{this.props.todo.task} { this.props.todo.completed ? <span> completed </span> : <span></span>}</li>)
  };
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state= {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286, 
          completed: true
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        },
        {
          task: 'Go to Gym',
          id: 1528817084358,
          completed: true
        },
      ]
    }
  }
  render() {
    const { todos } = this.state
    return (
      <div>
        <h1>TODOS</h1>
        <ul>
          {
            todos.map(todo=> {
              return (<Todo todo={todo} />)
            })
          }
          
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Clear</button>

      </div>
    )
  }
}
