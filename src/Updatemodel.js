import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
export class Updatemodel extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showUpdateModel} onHide={this.props.handelUpdateDisplayModel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.props.handelUpDateSubmit} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Digimon Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Digimon Name" name="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Digimon Imge</Form.Label>
                            <Form.Control type="text" placeholder="Enter url Imge" name="img" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Digimon Level</Form.Label>
                            <Form.Control type="text" placeholder="Enter Level" name="level" />
                        </Form.Group>
                        <Button type='submit'>
                            Update
                        </Button>
                    </Form>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Updatemodel
