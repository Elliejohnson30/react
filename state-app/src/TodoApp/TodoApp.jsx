import { useState } from "react";
// const App = () => {}
// const App = function (props){}
export default function TodoApp() {
    // state are variables that update UI
    // const text = "";
    // left side name, right side changes; set
    // const text ="";
    const [text, setText] = useState("");
    //  const task =[]
    const [task, setTask] = useState([]);

    const changeHandler = (event) => {
        const input = event.target.value;
        setText(input);

    }
    const addTaskHandler = () => {
        // '!' means not
        if (text !== "") {
            const newItem = {
                id: Math.random(),
                text: text,
                complete: false,
                createdAt: Date.now()
            };

            const newTask = [newItem, ...task];
            // create a new array with text
            setTask(newTask);
            setText("");
        }
    }
    const deleteHandler = (id) => {
        // [{id:0, text: chair},
        // {id:1, text: bus},
        // {id:2, text: car},
        // {id:3, text: car},
        // ]
        //  new array =[ 
        // {id:0, text: chair},
        // {id:1, text: bus},
        // {id:2, text: car},
        // ]

        const newArray = task.filter((object) => {
            return object.id !== id
        });

        setTask(newArray);
    }

    const handleCheckBox = (id) => {
        // const newState = task.map()
        // const newState = task.map(obj => )
        const newState = task.map(obj =>
            obj.id === id ? { ...obj, complete: !obj.complete } : obj
        );

        setTask(newState);
    }

    const numOfItems = task.length;
    const numOfCompleted = task.filter(t => t.complete).length
    return (
        <div>
            <h3>To-Do App</h3>
            {numOfItems === 0 ? null : <p>you have {numOfItems} items</p>}
            {numOfItems === 0 ? null :
                <p>{numOfCompleted} tasks completed</p>
            }


            <div>
                <input
                    value={text}
                    // onChange {() => {code here}}
                    onChange={changeHandler}
                />
                <button onClick={addTaskHandler}>Add Task</button>
            </div>
            <ul>
                {/* render list(display on UI) List */}
                {task.map(
                    (object) => <TaskItem
                        key={object.id}
                        object={object}
                        handleCheckBox={handleCheckBox}
                        deleteHandler={deleteHandler}
                    />

                )}
            </ul>
        </div>
    )

}
function TaskItem(props) {
    return (
        // key: unique id for HTML
        <div key={props.object.id}>
            <input
                type="checkbox"
                checked={props.object.complete}
                onChange={
                    () => props.handleCheckBox(props.object.id)

                }

            />
            <li
                style={{
                    textDecoration: props.object.complete ?
                        "line-through" : null,
                }}
            > {props.object.text}</li>


            <button onClick={
                () => props.deleteHandler(props.object.id)
            }>delete</button>
        </div>
    )

}