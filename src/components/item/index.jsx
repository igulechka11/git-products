import './style.css';
import { useState } from 'react';
import bookList from './../../data.js';
//import TextTruncate from 'react-text-truncate';


const Item = () => {
	
	const [isFavor, setFavorite] = useState(bookList);
	const [showFavorites, setShowFavorites] = useState(false);
	
	const toggleFavorite = (id)=>{
		setFavorite((current)=>{
			return current.map((book)=>{
				return id === book.id ? {...book, isFavorite : !book.isFavorite} : book
			})
		})
		
	};

	const deletBook = (id)=>{
		setFavorite((current)=>{
			return current.filter((itm)=> itm.id !== id)
		})
		
	}
	
	const filtered = showFavorites ? isFavor.filter((b) => b.isFavorite) : isFavor;

    return (
		<>
        <button onClick={()=> setShowFavorites(!showFavorites)}>{showFavorites ? 'all' : 'favorites'}</button>
		  
        {filtered.map((books)=>
         
			<div className="item" key={books.id}>
				<div className="cover"><img src={books.cover} alt="" /></div>
				<div className="author">{books.author}</div>
				<div className="name">
				  {/* <TextTruncate
					line={1}
					element="span"
					truncateText="…"
					text={books.name}
				
				/>   */}
				</div>
				<div className='icon_wrap'>
					<span onClick={()=> toggleFavorite(books.id)}>{books.isFavorite ? '♥' : '♡'}</span>
					<span onClick={()=>{deletBook(books.id)}}>X</span>
				</div>
			</div>
        )} 
    </>
    );
  };
 
export default Item;