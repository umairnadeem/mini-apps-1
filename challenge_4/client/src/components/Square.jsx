const Square = (props) => (
    <td data-x={props.x} data-y={props.y}>{props.x}, {props.y}</td>
);

export default Square;