import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const axios = require('axios');
require('dotenv').config();
// const PORT = process.env.PORT
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allDigimons: []
    }
  }

  componentDidMount = async () => {
    const allData = await axios.get(`https://digimon-api.vercel.app/api/digimon`);
    this.setState({
      allDigimons: allData.data
    })

    console.log(this.props.auth0);
  }
  handelAdd = async (digimon) => {
    console.log(digimon);
    const reqBody = {
      name: digimon.name,
      url: digimon.img,
      level: digimon.level,
      email: this.props.auth0.user.email
    }
    console.log(reqBody);
    const resData = await axios.post(`${process.env.REACT_APP_URL_PORT}/favs`, reqBody);
    console.log(resData)

  }

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <div>
        {
          this.state.allDigimons.map(digimon => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={digimon.Img} />
                <Card.Body>
                  <Card.Title>{digimon.name}</Card.Title>
                  <Card.Text>
                    {digimon.level}
                  </Card.Text>
                  <Button onClick={() => { this.handelAdd(digimon) }}>Add to Fav</Button>
                </Card.Body>
              </Card>
            )
          })
        }

      </div>
    )
  }
}

export default withAuth0(BestBooks);
