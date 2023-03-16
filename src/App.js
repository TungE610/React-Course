import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import BackDrop from "./components/BackDrop";

function App() {
    return (
        <div>
            <h1>My Todos</h1>
            <Todo text="Thing 1" />
            <Todo text="Thing 2" />
            <Todo text="Thing 3" />
        </div>
    );
}

export default App;
