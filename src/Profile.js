import { Component } from "react";
import Card from 'react-bootstrap/Card';
import { withAuth0 } from "@auth0/auth0-react";

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.auth0.user.picture} />
          <Card.Body>
            <Card.Title>{this.props.auth0.user.name}</Card.Title>
            <Card.Text>
              {this.props.auth0.user.email}
            </Card.Text>
            
          </Card.Body>
        </Card>
      </div>
    )
  }
};

export default withAuth0(Profile);
