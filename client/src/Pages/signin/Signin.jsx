import React from 'react'
import './signin.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Instruction from '../../components/instruction/Instruction';

function Signin() {
  return (
    <div className='signin__container'>
        <div className='internal__container p-5 d-lg-inline-flex' >
            <Card className='card__container px-4 shadow p-3 mb-5 rounded border-0'>
              <Card.Body className='form__container text-center'>
                <Card.Title>Login to your account</Card.Title>
                <Card.Text className='my-4'>
                  Don't have an account?<a href="#">Create a new account</a> 
                </Card.Text>
                <form action="" className='form'>
                    <input className='link form-control my-3' id="exampleInputEmail1" type="email" placeholder='Your Email'/>
                    <input className='link form-control mb-4' id="exampleInputEmail1"  type="password" placeholder='Your Password'/>
                    <Button type='submit' className='mb-3'>Login</Button>
                </form>
                <Card.Link href="#">Create a new account</Card.Link>
              </Card.Body>
            </Card>
            <Instruction />
        </div>
    </div>
  )
}

export default Signin