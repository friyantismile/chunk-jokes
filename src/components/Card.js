import {Link} from 'react-router-dom'

function Card(props) {
    return (
        <>
            <div className="card d-flex-column">
                <div className="card-title">
                    <img src="/assets/green-light-copy.png" className='card-icon'/> {props.title}
                </div>
                <div className="card-body" style={{flex: 1}}>
                    {props.content}
                </div>
                <div className="card-footer">
                    <Link to={`/joke/${props.category}/${props.id}`} className='links'>
                        See All <img src="/assets/path.png"/>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Card;

