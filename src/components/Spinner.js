import React from 'react';
import loader from '../aseets/spinner.gif'

export default function Spinner() {
  return (
    <div className='text-center my-3'>
        <img className='my-3' src={loader} alt='plz wait while the page is loading...'></img>      
    </div>
  )
}
