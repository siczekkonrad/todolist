import React, {Component} from 'react'

class ToDoItem extends Component {
    static defaultProps = {
        done: false
    }
    state = {
        done: this.props.done
    }

    toggleDone = () => {
        this.setState(prevState => ({
            done: !prevState.done
        }))
    }

    componentWillUnmount = () => {
        console.log(`todo ${this.props.text} unmouted`);
    }
    render() {
        const { text } = this.props
        return (
          <li
            onClick={this.toggleDone}
            className={this.state.done ? "task doneTask" : "task"}
          >
            <span>{text}</span>
            <button
              onClick={() => this.props.removeTask(this.props.text)}
            >
              x
            </button>
          </li>
        );
    }
}

export default ToDoItem