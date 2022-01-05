import logo from "./logo.svg";
import "./App.css";
import { Header } from "../src/Components/Header/Header";
import { Table } from "../src/Components/Table/Table";
function App() {
  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
}

export default App;
