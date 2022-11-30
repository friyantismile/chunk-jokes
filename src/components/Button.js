export const Button = ({ text, onClick, btnClass = null, btnSize=null, imgUrl = null, imgUrlLeft = null }) => {
    const buttonClass = btnClass ? btnClass: 'btn-primary';
    const buttonSize = btnSize ? btnSize: 'btn-md';

    return (
        <button 
            className={`btn ${buttonClass} ${buttonSize}`}
            onClick={onClick}>
            {imgUrlLeft ? (<img src={imgUrlLeft} className="img-start" />) : ''}
            {text}
            {imgUrl ? (<img src={imgUrl}  className="img-end" />) : ''}
        </button>
    );
};
