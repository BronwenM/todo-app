import PropTypes from "prop-types";

export const Todo = (props) => {
    return (
        <div>
            <p className="todo-text">{ props.text }</p>
            <p className="todo-date">{props.date}</p>
            <button className="todo-complete">Complete</button>
            <button className="todo-remove">Remove</button>
        </div>
    );
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    color: PropTypes.string,
    priority: PropTypes.bool,
    isComplete: PropTypes.bool.isRequired
}

Todo.defaultProps = {
    text: "",
    date: "",
    color: "gray",
    priority: false,
    isComplete: false
}