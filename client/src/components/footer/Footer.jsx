import React from 'react';
import './footer.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
    <MDBContainer className='pt-4'>
      <section className='mb-4'>

        <a
          className='btn btn-link btn-floating btn-lg text-dark m-1 '
          href='https://open.spotify.com/user/1283286273?si=c6b932fb41ee4478'
          role='button'
          data-mdb-ripple-color='dark'
        >
          <MDBIcon fab className='fa-spotify fa-3x ' />
        </a>

        <a
          className='btn btn-link btn-floating btn-lg text-dark m-1'
          href='https://www.linkedin.com/in/rolandom31'
          role='button'
          data-mdb-ripple-color='dark'
        >
          <MDBIcon fab className='fa-linkedin fa-3x ' />
        </a>

        <a
          className='btn btn-link btn-floating btn-lg text-dark m-1'
          href='https://instagram.com/rolaquils'
          role='button'
          data-mdb-ripple-color='dark'
        >
          <MDBIcon fab className='fa-instagram fa-3x' />
        </a>

        <a
          className='btn btn-link btn-floating btn-lg text-dark m-1'
          href='https://github.com/rolandom31'
          role='button'
          data-mdb-ripple-color='dark'
        >
          <MDBIcon fab className='fa-github fa-3x' />
        </a>
      </section>
    </MDBContainer>

    <div className='text-center  p-3 lowBar' >
      © 2022 Copyright: 
      <a className='nameBar' href='https://rmata.dev'>
         Rola
      </a>
    </div>
  </MDBFooter>
  );
}
