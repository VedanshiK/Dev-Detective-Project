import './item.css'

function Item(props){
    const item_name=props.name;
    return (
        <p className="nirma">{item_name}</p>
    )
}
export default Item;