import {Link} from 'react-router-dom'

function CardDetail(props) {
    const BTNCLASS = ['bg-red', 'bg-pastel-orange','bg-pale-orange', 'bg-light-gold', 'bg-kiwi-green', 'bg-weird-green', 'bg-blue']
    
    return (
        <>
            <div className="card-detail d-flex-column">
                <div className='d-flex-row'>
                    <div className='flex-1'>
                        {props.categories.map((category, index) => (
                            <div key={category}>
                                <span className="dot dot-text"></span>
                                <span className={`badge bg ${BTNCLASS[index%6]} text-white`}>{category}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span className='text-pastel-orange text-featured'>
                            <span className='dot bg bg-pastel-orange'></span> TRENDING                        
                        </span>
                    </div>
                </div>
                <div className="card-detail-title d-flex-row">
                   <span className="d-flex-row flex-1">
                        <span>{props.title}</span>
                        <span className='line-brown'></span>
                   </span>
                   <span>
                        <span className='text-sm'> NO #1</span>
                   </span>
                </div>
                <div className="card-detail-body" style={{flex: 1}}>
                    {props.content}
                </div>
            </div>
        </>
    );
};

export default CardDetail;

