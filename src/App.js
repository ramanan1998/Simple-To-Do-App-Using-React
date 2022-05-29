import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      arr: [],
      item: "",
    }
  }

  addThisItem(val){
    if(val !== ""){
      const obj = {
        id: Date.now(),
        item: val,
        isDone: false
      }

      const lis = [...this.state.arr];
      lis.push(obj);

      this.setState({
        arr: lis,
        item: ""
      });
    }
  }

  deleteItem(it){
    const arr = [...this.state.arr];
    const fire = arr.filter(i => i.id !== it);

    this.setState({
      arr: fire,
    });
  }

  input(inp){
    this.setState({
      item: inp
    });
  }

  render(){
    return(
      <div className="container">
        <h1>Hi Ramanan</h1>
        <img src={logo} className="image" alt="imageLogo"/>
        <h1>Your TO DO's Today</h1>
        <div className="to-do-container">
          <input type="text" className="todo" placeholder="Add your To Do here" value={this.state.item} onChange={(i) => {this.input(i.target.value)}}/>
          <button className="add-todo" disabled={this.state.item === ""} onClick={()=> {this.addThisItem(this.state.item)}}>Add ToDo</button>
          <div className="task-container">
          <ul>
            {
              this.state.arr.map(i => {
                return <li><input type="checkbox" className="box"/><div className="title-div" onChange={() => {i.isDone = true}}><h2>{i.item}</h2></div><button className="delete-button" onClick={() => {this.deleteItem(i.id)}}>Delete</button></li>
              })
            }
          <li><input type="checkbox" className="box"/><div className="title-div"><h2>Begin with Bootsrap</h2></div><button className="delete-button">Delete</button></li>
          </ul>
        </div>
        </div>
        
      </div>
    );
  }

}

export default App;
