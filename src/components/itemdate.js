import './itemdate.css';
function Datee(props){
    const day=props.day;
    const month=props.month;
    const year=props.year;
    return(
        <div className='samay'>
            <span> {day} </span>
            <span> {month}</span>
            <span> {year} </span>
        </div>
    )
}
export default Datee;