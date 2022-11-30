import {useEffect, useState} from "react";
import JokeService from "../api/service/Joke";
import {Link} from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "./Button";
import CardDetail from "./CardDetail";

function ItemDetailSection() { 
    const [joke, setJoke] = useState(null); 
    const [topJokes, setTopJoke] = useState([]); 
    const params = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        JokeService.getJoke(params.id)
            .then((res) => {
                setJoke(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
        JokeService.getJokes(params.category)
            .then((res) => {
                setTopJoke(res.data.result.slice(0, 10));
            })
            .catch((err) => {
                console.log(err)
            });
    }, [params]);

    function nextJoke() {
        JokeService.getJokes(params.category)
        .then((res) => { 
            let joke = res.data.result.filter(x => x.id != params.id);
            if (joke.length > 0) {
                navigate(`/joke/${params.category}/${joke[0].id}`);
            }
        })
        .catch((err) => {
            console.log(err)
        });
    }

    return (
        <div className="section">
            <div className="section-item">
                <div className="w-80" style={{marginBottom: '25px'}}>
                    <a className="bg bg-gray-200 btn-rounded" href="/"><img src="/assets/arrow-left.png" /></a>
                </div>
                <div className="d-flex-row">
                    <div className="section-left flex-1">
                        {
                            !joke ? 'Loading ..' :
                            <CardDetail 
                                categories={['ddd', 'dddddd']}
                                title={joke.value.substr(0, 10)+'...'}
                                content={joke.value}></CardDetail> 
                        }
                        <div className="status-wrapper">
                            <div className="status">
                                <img src="/assets/hand.png" className="bg bg-weird-green" />
                                <br></br>
                                <span className="text-weird-green">123</span>
                            </div>
                            <div className="status">
                                <img src="/assets/hand-copy.png" className="bg bg-red" />
                                <br></br>
                                <span className="text-red">905</span>
                            </div>
                        </div>
                        <div className="pagination">
                            <Button imgUrlLeft='/assets/arrow-left.png' className="btn" btnClass='btn-white btn-fixed' btnSize='btn-md' text='Previous' onClick={() => { window.history.back(); }}></Button>
                            <Button imgUrl='/assets/arrow-left-copy.png' className="btn" btnClass='btn-white btn-fixed' btnSize='btn-md' text='Next' onClick={() => {nextJoke()}}></Button>
                        </div>
                    </div>
                    <div className="section-top">
                        <h4 className="section-title">The Top 10 Jokes</h4>
                        <ul>
                            {topJokes.map((jk, index) => (
                                <li key={jk.id}>
                                <Link to={`/joke/${jk.categories.length > 0 ? jk.categories[0] : 'uncategorized'}/${jk.id}`} className='text-gray'>
                                    {jk.value.substr(0, 20)+'...'}
                                </Link> 
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailSection;
