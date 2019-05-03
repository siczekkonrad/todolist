import React, {Component} from 'react'
import ToDoItem from '../../components/ToDoItem/ToDoItem'
import NewToDoForm from '../../components/NewToDoForm/NewToDoForm';

class ToDoList extends Component {

  static defaultProps = {
    myTasks: [
      { text: "Find job" },
      { done: true, text: "Update ios" },
      { done: false, text: "Shopping" }
    ],
    title: "ToDo List"
  };

  state = {
    todolist: this.props.myTasks,
    draft: ""
  };

  updateDraft = event => {
    this.setState({
      draft: event.target.value
    });
  };

  addTask = () => {
    const { todolist, draft } = this.state;
    const list = todolist;
    if (
      draft.length > 0 &&
      !(list.some(item => item.text === draft))
    ) {
      list.push({ text: draft, done: false });
      this.setState({
        todolist: list,
        draft: ""
      });
    }
  };

  removeTask = ( text ) => {
    this.setState(prevState => ({
      todolist: [...prevState.todolist].filter((x, i) => x.text !== text)
    }));
  }

  removeAll = () => {
    this.setState({
      todolist: []
    });
  };

  render() {
    const { title } = this.props;
    const { todolist, draft } = this.state;
    return (
      <>
        <div className="AppHeader">
          <h1 className="title">{title}</h1>
          <button onClick={this.removeAll}> Remove all tasks</button>
        </div>
        <ul className="ToDoTasks">
          {todolist.map(task => (
            <ToDoItem
              key={task.text}
              text={task.text}
              done={task.done}
              removeTask={this.removeTask}
            />
          ))}
        </ul>
        <>
          <NewToDoForm
            onSubmit={this.addTask}
            onChange={this.updateDraft}
            draft={draft}
          />
        </>
      </>
    );
  }
}

export default ToDoList