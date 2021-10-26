import React from 'react';
import './Teacher.css';
const Teacher = ({ teacher }) => {
    // console.log(teacher);
    return (
        <div class="col">
            <div class="card shadow h-100  teacher">
                <img src={teacher.image} class="card-img-top" alt="..."  height="250" />
                <div class="card-body">
                    <h5 class="card-title">Initial : {teacher.initial}</h5>
                    <h5 class="card-title">{teacher.name}</h5>
                    <h5 class="card-title">{teacher.designation}</h5>
                    <h5 class="card-title">{teacher.department}</h5>
                    <p class="card-title">{teacher.email}</p>
                    <h5 class="card-title">{teacher.contact}</h5>
                </div>
            </div>
        </div>
    );
};

export default Teacher;