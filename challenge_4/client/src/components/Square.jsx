const Square = (props) => (
    <td data-x={props.x} data-y={props.y} onClick={props.handleClick}></td>
);

export default Square;