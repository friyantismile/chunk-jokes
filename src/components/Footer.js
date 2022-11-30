import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='section footer-section'>
      <div className='section-item'>
        <h4 className='text-white'>GOT JOKES? GET PAID
        <br />
        FOR SUBMITTING</h4>
        <Link to="/" className='links'>
            Submit Joke <img src="/assets/path.png"/>
        </Link>
      </div>
    </div>
  )
}

export default Footer