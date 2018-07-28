
// react: show data, and change data
// - components
// -JSX (html combined with JS)
// - STATE
// - events

// taking the website and its functions and divide it to diffferent compnents where each compnenent does a diff task
// break the website down intot eh diff componenets before deciding how to use react



// first line in react componenet: tell js file to use react

import React from "react"

// (creating a component called App)
class App extends React.Component {
    state = {
        todos: [
            {
                description: 'buy apples',
                isDone: false
            },
            {
                description: 'buy oranges',
                isDone: true
            }
        ]
    }

    handleTodoClick = (currentTodo) => {
        if (currentTodo.isDone) {
            currentTodo.isDone = false;
        } else {
            currentTodo.isDone = true;
        }

        const updatedState = {
            todos: this.state.todos
        };

        this.setState(updatedState);
        // (tells the function that something has changed)
    };

    render() {
        return (<div>
            <h1>My to-do list</h1>
            <ul>
                {this.state.todos.map((a) => {
                    let completeClass = "";

                    if (a.isDone) {
                        completeClass = "complete";
                    }

                    return (
                        <li className={completeClass}
                            onClick={() => this.handleTodoClick(a)} >
                            {a.description}</li>
                    )
                })}
            </ul>
        </div>)
    }

    // (render is whatever is displayed on the site): all info has to be included into'render'
    // alt, shift, f to reformat code and include indetntations
    // (exporting the app)
    // curly braces refers to JS
    // event: interaction of user on the website
    // alert: displays messgae to user
}
    export default App

// tell react to add the strikethrough once action is coomplieete. if action is not complete dont add the strikethrouhg

