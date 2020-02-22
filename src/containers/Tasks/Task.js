import React, { Component } from 'react';
import axios from 'axios';
import Cards from '../../components/Cards/Cards';

class Task extends Component {
    state = {
        tasksData: []

    };

    componentDidMount(){
        axios.get("http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks", 
            {headers: {'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzNzg1NTEsImV4cCI6MTU4Mjk4MzM1MX0.DO0VJoUJk0mcPgxW3veivINR7hMYdZvPIrJ1t_o5g3c"}})
            .then(res => {
                this.setState({
                    tasksData:res.data.results
                })
                //console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }


    render(){
        const cardsView = this.state.tasksData.length ? 
            <Cards data={this.state.tasksData}></Cards>
            :
            null

        return(
            <div>
                {cardsView}
            </div>
        )
    }
}

export default Task;