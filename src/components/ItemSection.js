import {useEffect, useState, useRef} from "react";
import CategoryService from "../api/service/Category";
import JokeService from "../api/service/Joke";
import { Button } from './Button';
import Card from './Card';

function ItemSection() {
    const [categories, setCategories] = useState([]);  
    const [jokes, setJokes] = useState([]);  
    const [category, setCategory] = useState(null);  
    const [categoryIndex, setCategoryIndex] = useState(0);  
    const [paginatedJokes, setPaginatedJokes] = useState([]);  
    const [pageNumber, setPageNumber] = useState(1);  
    const [pageSize, setPageSize] = useState(6);  
    const BTNCLASS = ['bg-red', 'bg-pastel-orange','bg-pale-orange', 'bg-light-gold', 'bg-kiwi-green', 'bg-weird-green', 'bg-blue']
    const bottomContainer = useRef(null);

    useEffect(() => {
        CategoryService.getCategories()
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    function paginateJokes(array = [], page_number= null) {
        array = array.length <= 0 ? jokes: array;
        page_number = page_number ? page_number : pageNumber + 1;
        let data = array.slice((page_number - 1) * pageSize, page_number * pageSize);
        setPaginatedJokes(page_number > 1 ? paginatedJokes.concat(data) : data);
        setPageNumber(page_number);
    }

    function getJokes (value, index){
        setCategory(value);
        setCategoryIndex(index);
        JokeService.getJokes(value)
            .then((res) => {
                console.log(res.data);
                let data = res.data.result;
                setJokes(data);
                paginateJokes(data, 1);
                scrollToBottom();
            })
            .catch((err) => {
                console.log(err)
            });
    };

    const scrollToBottom = () => {
        bottomContainer.current.scroll({ top: bottomContainer.current.scrollHeight, behavior: 'smooth' });
    };

    return (
        <div className="section">
            <div className="section-item d-grid">
                {categories.map((category, index) => (
                    <Button className="btn" btnClass={`bg ${BTNCLASS[index%7]} text-white`} btnSize='btn-md' text={category} key={category} onClick={() => {getJokes(category, index)}}></Button>
                ))}
                <Button 
                    className="btn" 
                    btnClass='btn-outline' 
                    btnSize='btn-md' 
                    text='View All' 
                    imgUrl='/assets/path-copy-7.png'>
                </Button>
            </div>
            <div className="section-item">
                <hr className="bg bg-white" style={{borderStyle: "ridge", marginBottom: '20px'}}></hr>
                <span className={`badge bg ${BTNCLASS[categoryIndex%7]} text-white`}>{category}</span>
                <div className="d-flex-row">
                    {paginatedJokes.map((joke, index) => (
                        <Card 
                            key={joke.id+'-'+index}
                            title={joke.value.substr(0, 10)+'...'}
                            id={joke.id}
                            content={joke.value}
                            category={category}
                        />
                    ))}
                </div>
            </div>
            <div className="section-item text-center">
                <Button className="btn" btnClass='btn-outline' btnSize='btn-lg' text='View More' imgUrl='/assets/path-copy-7.png' onClick={() => {paginateJokes()}}></Button>
            </div>
            <div ref={bottomContainer}></div>
        </div>
    );
}

export default ItemSection;
