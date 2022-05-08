import React from "react"
import { Form } from "react-bootstrap";
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from "reactstrap";
import { FormGroup, Input } from "reactstrap";

const ExamsCreatePage=()=> {

    return ( <div>
    <Card className="text-center">
            <CardBody>
                <Container>
                <h1>Edit Exams</h1>
                <Form>
                <FormGroup>
                    <b><label for="id">Exam id</label></b>
                    <Input 
                    type="text" 
                    placeholder="Enter id" 
                    id="id" />
                </FormGroup>
                <FormGroup>
                    <b><label for="exam">Exam name</label></b>
                    <Input 
                    type="text" 
                    placeholder="Enter exam name"  
                    id="name" />
                </FormGroup>
                </Form>    
                <Button color="success">Add exam</Button> <space/>
                <Button color="warning ml-3">Update</Button> <space/>
                <Button color="warning">Clear</Button> <space/>
                <Button color="danger">Delete</Button> 
                </Container>
            </CardBody>
        </Card>
        </div>
    );
};
export default ExamsCreatePage;