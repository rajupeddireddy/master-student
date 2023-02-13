

import React, {Component} from 'react';

import {Navigate} from 'react-router-dom'

import "./index.css"



function evaluateExpression(expression) {
  

  function times(num) {
    return function(x) {
      return num * x;
    };
  }

  
  function plus(num) {
    return function(x) {
      return num + x;
    };
  }

  function minus(num) {
    return function(x) {
      return num - x;
    };
  }

  function dividedBy(num) {
    return function(x) {
      return Math.floor(num / x);
    };
  }

  function one(func) {
    return func(1);
  }

  function two(func) {
    return func(2);
  }

  function three(func) {
    return func(3);
  }


  function four(func) {
    return func(4);
  }

  function five(func) {
    return func(5);
  }

  function six(func) {
    return func(6);
  }
  
  function seven(func) {
    return func(7);
  }
  

  function eight(func) {
    return func(8);
  }

  function nine(func) {
    return func(9);
  }

  return eval(expression);
}


class MasterView extends Component{
  state = {leftOperand: "", rightOperand: "", operand: "", taskList: [], id: 1, status: false}
  handleSubmit = (e) => {
    e.preventDefault();
    let {operand, leftOperand, rightOperand, id} = this.state 
    let data = leftOperand + "(" + operand + "(" + rightOperand + "()))";
    let value = evaluateExpression(data)
    console.log(value)
    let newTask = {uniqueNo: id, task: data};
    this.setState(prevState => ({taskList: [...prevState.taskList, newTask], id: prevState.id + 1, status: true}))
  
  };

  setLeftOperand = (e) => {
    this.setState({leftOperand: e.target.value})
  }

  setRightOperand = (e) => {
    this.setState({rightOperand: e.target.value})
  }

  setOperand = (e) => {
    this.setState({operand: e.target.value})
  }
  
  saveTaskDone = () => {
    const {taskList} = this.state
    localStorage.setItem('taskList', JSON.stringify(taskList))
    console.log(taskList)
  }

  tasksDone = () => {
    const {taskList} = this.state
    return(<div className='botton-section'>
      <h1 className='list-of-tasks'>List of Tasks</h1>
    <ol className='ol-list'>{taskList.map(each => <li key = {each.uniqueNo} className = "list-item">{`${each.task} =`}</li>)}
      </ol>
      <button type = 'button' onClick = {this.saveTaskDone} className = 'save-btn'>Save</button>
      </div>)
  }

  masterLogout = () => <Navigate to = "/" replace={true} />
  render(){
    const{ leftOperand, rightOperand, operand, status} = this.state
  return (
    <div className='m-v-container'>
      <nav className='nav-setions'>
        <h1 className='master-page'>Master Activies</h1>
        <button className='logout-btn' onClick = {this.masterLogout}>Log out</button></nav>
      <div className='cal-section'>
      <form onSubmit={this.handleSubmit} className = "mv-form">
    
        <label htmlFor="leftOperand" className='label-left-operand'>Left Operand:</label>
        <select id="leftOperand" className='select-ele' onChange = {this.setLeftOperand} value = {leftOperand}>
          <option value="">Select a number</option>
          <option value="zero">Zero</option>
          <option value="one">One</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
          <option value="five">five</option>
          <option value="six">six</option>
          <option value="seven">seven</option>
          <option value="eight">eight</option>
          <option value="nine">nine</option>
        </select>
        <br />
        <label htmlFor="operation" className='label-left-operand'>Operation:</label>
        <select id="operation" className='select-ele'  onChange = {this.setOperand} value = {operand}>
          <option value="">Select an operation</option>
          <option value="plus">Plus</option>
          <option value="minus">Minus</option>
          <option value="times">Times</option>
          <option value="dividedBy">Divided By</option>
        </select>
        <br />
        <label htmlFor="rightOperand" className='label-left-operand'>Right Operand:</label>
        <select id="rightOperand" className='select-ele' onChange = {this.setRightOperand} value = {rightOperand}>
          <option value="">Select a number</option>
          <option value="zero">Zero</option>
          <option value="one">One</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
          <option value="five">five</option>
          <option value="six">six</option>
          <option value="seven">seven</option>
          <option value="eight">eight</option>
          <option value="nine">nine</option>
        </select>
        <br />
        <button type="submit" className='submit-btn'>Calculate</button> 
    </form>
    {status && this.tasksDone()}
    </div>
 </div>
    ) }
}
export default MasterView;