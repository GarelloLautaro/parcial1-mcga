import './style.css';
import React from 'react';
import {Link} from 'react-router-dom';
import HomeCard from '../HomeCard';
import HomeForm from '../HomeForm';

class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {buttonName1: "Agregar", buttonName2: "Agregar contador"}
  }
  
  render(){
    return (
      <div className="home">
        <h1 className="student">Alumno</h1>
        {this.props.edit === false ?  
        <HomeCard 
          name = {this.props.name}
          year = {this.props.year}
          changeEdit={this.props.changeEdit}
          setValues={this.props.setValues}
        />:
        <HomeForm 
          name = {this.props.name}
          year = {this.props.year}
          changeEdit={this.props.changeEdit}
          setValues={this.props.setValues}
        />}
        <Link to = "/counter">
          <button className="button green">Lista de contadores</button>
        </Link>
      </div>
    )
  }
}
export default Home;

