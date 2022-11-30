import { useState} from "react";
import {Link} from 'react-router-dom'
import JokeService from '../api/service/Joke';

function Banner() {
    const [result, setResult] = useState([]); 
    
    function searchJokes(value) {
        JokeService.getJokes(value)
        .then((res) => { 
            setResult(res.data.result);
        })
        .catch((err) => {
            console.log(err)
        });
    }
    return (
        <div className="banner d-flex-column">
            <h1 className="text-brown text-heading">The Joke Bible</h1>
            <h3 className="text-white text-subheading">Daily Laughs for you and yours</h3>
            <div className="section">
                <div className="search-section">
                    <input className="search" type="search" placeholder="How can we make you laugh today?"
                    onKeyPress={(ev) => { searchJokes(ev.target.value) }} />
                    <img src="/assets/search-copy.png" />
                    <div className="search-result-wrapper">
                        <div className="search-result">
                            <ul className="text-gray">
                            {result.map((jk, index) => (
                                <li key={jk.id}>
                                    <Link to={`/joke/${jk.categories.length > 0 ? jk.categories[0] : 'uncategorized'}/${jk.id}`} className='text-gray'>
                                    <img src="/assets/green-light-copy.png" className='icon'/> {jk.value.substr(0, 20)+'...'}
                                    </Link> 
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
