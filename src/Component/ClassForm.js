import React, {useState} from "react"

class ClassForm extends React.Component {
    constructor() {
        super();
        this.state = {name:"",email:"",password:""}
    }

    handleName(e) {
        this.setState ({name:e.target.value})
    }

    handleEmail(e) {
        this.setState ({email:e.target.value})
    }

    handlePassword(e) {
        this.setState ({password:e.target.value})
    }

    handleSubmit(e) {
    e.preventDefault();
    this.setState({name:"",email:"",password:""})
    console.log(this.state.name,this.state.email,this.state.password)       
    }


    render() {
        return(
        <div>
            <h3 className="one">FACEBOOK</h3>

            <form onSubmit = {(e) => this.handleSubmit(e)}>
                <input name = "name" type = "text" placeholder = "name" value = {this.state.name} onChange = {(e) => this.handleName(e)}/>
                <br/>
                <br/>
                <input name = "email" type = "text" placeholder = "email" value = {this.state.email} onChange = {(e) => this.handleEmail(e)}/>
                <br/>
                <br/>
                <input name = "password" type = "text" placeholder = "password" value = {this.state.password} onChange = {(e) => this.handlePassword(e)}/>
                <br/>
                <br/>
                <input type="submit" className="submit"/>
            </form>
        </div>
        )
    }
}

export default ClassForm;