import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field } from "formik";
import { FormGroup,FormLabel} from "react-bootstrap";
// import '../modal.css'
export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = useState({
    email: "",
    nam:"",
    role: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };


  return (
    <>
     
      <button type="button" class="btn btn-default btn-sm"  onClick={handleShow}>
                            <span class="glyphicon glyphicon-edit"></span>
                            </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>hi {state.nam}  Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="App">
        {/* <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          &nbsp;
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Name</label> 
          &nbsp;
          <input
            type="text"
            name="nam"
            value={state.nam}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Role</label>
          &nbsp;
          <input
            type="text"
            name="role"
            value={state.role}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <Button variant="primary" >
            Submit
          </Button>
        </div>
      </form>
    </div> */}
    <div className="form-wrapper">
        <Formik >
        <Form className='myform'    >
		<FormGroup>
        <FormLabel>Name</FormLabel>
			<Field name="nam"
            value={state.nam}
            onChange={handleInputChange} type="text"
				className="form-control" />
		</FormGroup>
		<FormGroup>
        <FormLabel>Role</FormLabel>
			<Field type="text"
            name="role"
            value={state.role}
            onChange={handleInputChange}
				className="form-control" />
		</FormGroup>
		<FormGroup>
        <FormLabel>email</FormLabel>
			<Field  type="email"
				className="form-control" 
                name="email"
                value={state.email}
                onChange={handleInputChange}/>
		</FormGroup>
    <br></br>
    <Button  type="submit" variant="primary" onClick={handleClose} >
            submit
          </Button>
		</Form>
        </Formik>
        </div>
        </div>
    

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

