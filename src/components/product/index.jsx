import './style.css';

const Product = (props) => {
    return ( 
        <div className="bookCard">
            <div className="cover"><img src="https://cdn.litres.ru/pub/c/cover_415/71339845.webp" alt="" /></div>
            <div className="description">
                <div className="bookName">{props.name}</div>
                <div className="authorBook"><span>автор</span> Вадим Зеланд</div>
                <div className="annotation">
                    <p><strong>О книге</strong></p>
                    <p></p>
                </div>
            </div>
        </div>
     );
}
 
export default Product;