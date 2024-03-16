import React from 'react'
import './instruction.css'
import Button from 'react-bootstrap/Button';

function Instruction() {
  return (
    <div>
        <div className='instruction__container ms-4'>
            <span>About</span>
            <h2>Evangadi Networks Q&A</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem voluptate officiis beatae nobis pariatur omnis facere accusamus laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum quisquam! Molestias, ut commodi!</p>
            <p>No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.!</p>
            <p>Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>
            <Button className='px-5 py-2 mx-2 mt-3'>HOW IT WORKS</Button>
        </div>
    </div>
  )
}

export default Instruction