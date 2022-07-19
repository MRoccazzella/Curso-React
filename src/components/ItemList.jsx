import Item from './Item'
import {Link} from 'react-router-dom';

const ItemList = ({items}) => {
    return (
       <div className="item-container">
            {items.map((item) => {
                return (
                    <Link to={`/item/${item.id}`} style={{ textDecoration: "none" , color: "black"}}>
                        <Item item={item} key={item.id}/>
                    </Link>
                    )
            })}
        </div>
    )
}
export default ItemList