import axios from 'axios';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Updatemodel from './Updatemodel';
import { withAuth0 } from "@auth0/auth0-react";




export class Myfav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myFavData: [],
            showUpdateModel: false,
            selectedOject: {}
        }
    }
    componentDidMount = async () => {
        const responseData = await axios.get(`${process.env.REACT_APP_URL_PORT}/favs?email=${this.props.auth0.user.email}`)
        console.log(responseData.data);
        this.setState({
            myFavData: responseData.data
        })
    }
    handelDelete = async (digimon) => {
        console.log(digimon._id);
        const deleteRes = await axios.delete(`${process.env.REACT_APP_URL_PORT}/favs/${digimon._id}`);
        if (deleteRes.data.deletedCount) {            
            const newArr = this.state.myFavData.filter(elem => elem._id !== digimon._id)
            this.setState({
                myFavData: newArr
            })
        }
    }
    handelUpdateDisplayModel = (digimon) => {
        this.setState({
            selectedOject:digimon,
            showUpdateModel:!this.state.showUpdateModel
        })
    }
    handelUpDateSubmit= async(e)=>{
        e.preventDefault()
        const reqBody = {
            name: e.target.name.value,
            url: e.target.img.value,
            level: e.target.level.value,
            email: this.props.auth0.user.email
          }
          console.log(reqBody);
          console.log(this.state.selectedOject._id);
          const resUpdate = await axios.put(`${process.env.REACT_APP_URL_PORT}/favs/${this.state.selectedOject._id}`,reqBody)
          console.log(resUpdate.data);
          const newArr = this.state.myFavData.map(elem =>{
              if (resUpdate.data._id === elem._id) {
                  elem = resUpdate.data;
                  return elem
                  
              }
              return elem;
          })
          console.log(newArr);
          this.setState({
            myFavData:newArr,
            showUpdateModel:!this.state.showUpdateModel,
            selectedOject: {}
          })
    }

    render() {
        return (
            <div>
                {
                    this.state.myFavData.map(digimon => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={digimon.url} />
                                <Card.Body>
                                    <Card.Title>{digimon.name}</Card.Title>
                                    <Card.Text>
                                        {digimon.level}
                                    </Card.Text>
                                    <Button onClick={() => { this.handelDelete(digimon) }}>Delete</Button>
                                    <Button onClick={() => { this.handelUpdateDisplayModel(digimon) }}>Update</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                {this.state.showUpdateModel && 
                <Updatemodel
                showUpdateModel={this.state.showUpdateModel}
                handelUpDateSubmit={this.handelUpDateSubmit}
                handelUpdateDisplayModel={this.handelUpdateDisplayModel}

                />}
            </div>
        )
    }
}

export default withAuth0(Myfav)
