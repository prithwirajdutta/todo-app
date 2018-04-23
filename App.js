import React from'react';
class Simpletodo extends React.Component {
	constructor(props){
  super(props);
  }
  render(){
  	return(
    	<div>
    	  <li key = {this.props.id}>{this.props.todo}<button onClick={this.props.delete}>x</button></li>
    	</div>
    );
  }
}

class App extends React.Component {
	constructor(props){
  	super(props);
    this.state={
    	todos:[],
      ctodo:''
    }
  }
  handleChange = (e) => {
  	this.setState({
    	ctodo:e.target.value
    })
  }
  handleClick = () => {
  	let c = this.state.todos.slice();
    c.push(this.state.ctodo);
    this.setState({
    	todos:c,
      ctodo:''
    });
  }
  deletetodo = (i) => {
  	let m = this.state.todos.slice();
    m.splice(i,1);
    this.setState({
    	todos:m,
      ctodo:''
    });
  }
  render(){
  let b = this.state.todos.map((e,i) => {
  	return(
   // <li key = {i}>{e}<button onClick={() => this.deletetodo(i)}>x</button></li>
   <Simpletodo id={i} todo={e} delete={() => this.deletetodo(i)}/>
    )
  });
  	return(
    	<div>
    	  <input type="text" value={this.state.ctodo} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        <h2>{this.state.todos.length == 0 ? "no todos yet" : <ul>{b}</ul>}</h2>
    	</div>
    );
  }

}
ReactDOM.render(<App/>,document.getElementById('mountNode'));
