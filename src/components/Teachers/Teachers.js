import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [displayTeachers, setDisplayTeachers] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hasibdurjoy/my-all-json-file/main/teacher.json')
            .then(res => res.json())
            .then(data => {
                setTeachers(data)
                setDisplayTeachers(data)
            })
    }, []);

    const takeInput = (e) => {
        const searchText = e.target.value;
        const matchedTeachers = teachers.filter(teacher => teacher.initial.toLowerCase().includes(searchText.toLowerCase()) || teacher.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayTeachers(matchedTeachers);
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="ms-5 ps-5">DIU</Navbar.Brand>
                        <Form className="d-flex" className="me-5">
                            <FormControl
                                onChange={takeInput}
                                type="search"
                                placeholder="Enter teacher initial or name"
                                className="me-2 w-100"
                                aria-label="Search"
                            />
                            {/* <Button variant="outline-success">Search</Button> */}
                        </Form>
                </Container>
            </Navbar>
            <div className="container mt-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        displayTeachers.map(displayTeacher => <Teacher key={displayTeacher.contact} teacher={displayTeacher}></Teacher>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Teachers;