import React from 'react'
import './signin.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Instruction from '../../components/instruction/Instruction';

function Signup() {
  return (
    <div className='signin__container signup__container'>
        <div className='internal__container p-5 d-lg-inline-flex' >
            <Card className='card__container px-4 shadow p-3 mb-5 rounded border-0'>
              <Card.Body className='form__container text-center'>
                <Card.Title>Login to your account</Card.Title>
                <Card.Text className='my-4'>
                  Already have an account? <a href="">Sign in</a> 
                </Card.Text>
                <form action="" className='form'>
                    <input className='link form-control' id="exampleInputEmail1" type="email" placeholder='Email'/>
                    <div className="Name__links d-flex justify-content-between">
                        <input className='Name__link link form-control' id="exampleInputEmail1" type="text" placeholder='First Name'/>
                        <input className='Name__link link form-control' id="exampleInputEmail1" type="text" placeholder='Last Name'/>
                    </div>
                    <input className='link form-control my-3' id="exampleInputEmail1" type="text" placeholder='User Name'/>
                    <input className='link form-control mb-4' id="exampleInputEmail1"  type="password" placeholder='Password'/>
                    <Button type='submit' className='signup__button mb-3 btn btn-primary'>Agree and Join</Button>
                </form>
                <Card.Text className='my-4'>
                  I agree to the <a href="#">privacy policy</a> and <a href="#">terms of serivice.<br />
                  </a><a href="">Already have an account?</a> 
                </Card.Text>
              </Card.Body>
            </Card>
            <Instruction />
        </div>
    </div>
  )
}

export default Signup