import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Input } from 'reactstrap';
const QuestionsPage=()=> {
    return (
        <div>
            <Form>
            <FormGroup>
                <b><label for="question">Question</label></b>
                <Input type="textarea" placeholder='Enter question here' id='question'/>
                <div> <br/>
                <b>
                <input type="radio" name="option 1"/>option 1<br/>
                <input type="radio" name="option 1"/>option 2<br/>
                <input type="radio" name="option 1"/>option 3<br/>
                <input type="radio" name="option 1"/>option 4<br/>
                </b> <br/>
                <b><label for="answer">Answer</label></b>
                <input type="text"/> <space/>
                <input type="button" value="Submit"/>
                   
                </div>
            </FormGroup>
            </Form>
        </div>
    );
};
export default QuestionsPage;