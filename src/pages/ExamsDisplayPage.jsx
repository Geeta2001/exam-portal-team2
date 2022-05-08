import {React, useState} from "react";
import {Card,CardBody, CardTitle, CardSubtitle,CardText,CardFooter,Button,Container,} from "reactstrap";

const ExamsDisplayPage=()=> {
    
    return (
        <div className="text-center">
            <Card className="my-2 bg-secondary">
            <CardBody>
            <Container>
            <h1 className="text-light text-center my-2">My Exams</h1>
            <p className="text-light text-center my-2">List of exams</p>
            <button className='form-input-btn'>Start</button>
            </Container>
            </CardBody>
            </Card>
            <Card>
            <CardBody>
            <b><CardSubtitle>Exam 1</CardSubtitle> </b>
            <CardText>First Exam</CardText>
            </CardBody>
            </Card>
        </div>
    );
};
export default ExamsDisplayPage;