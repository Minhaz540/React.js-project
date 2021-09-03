export default function Hall(props) {
    return (
        <div>
            <h1 className="hallColor">This is a {props.hallName} hall, located {props.locate.model}</h1>
        </div>
    );
}