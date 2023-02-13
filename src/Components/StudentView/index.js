import { Component } from "react";

import {useNavigate} from "react-router-dom"

import "./index.css"





class StudentView extends Component{

    onDeleteActivities = () => {
        localStorage.removeItem("taskList")
        this.setState({result: []})
    }

    onStudentLogout = () => {
        const navigate = useNavigate();
        navigate("/")
    };


     
    getTheData(){
        let data = localStorage.getItem("taskList")
        let taskList = JSON.parse(data);
        return taskList
    }

    emptyView = () => <p className="no-activity">----No Acivities done ----</p>;

    render(){
        const result = this.getTheData();
    return (
        <div className="st-view-page">
     
            <nav className="nav-bar">
                <h1 className="st-heading">Student Activities</h1>
                <button className="lg-btn" onClick = {this.onStudentLogout}>Log out</button>
            </nav>
            <button className="delete-btn" onClick={this.onDeleteActivities}>Delete All</button>
            <div className="st-bottom-section">
                <h1 className="history">List of calculations sought by the Master</h1>
                 {result === null ? this.emptyView() : <ol className="list-container">
                         {result.map(each => <li key = {each.uniqueNo} className = "st-list-item">{each.task}</li>)}
                </ol>}
            </div>
        </div>
    )
}
}


export default StudentView