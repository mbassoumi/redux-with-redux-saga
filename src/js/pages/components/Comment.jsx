import PropTypes     from 'prop-types'
import React, {memo} from 'react';

const articleStyle = {
    border : 'solid 1px black',
    margin : '10px',
    padding: '10px'
};

const Comment = ({id, name, email, body, onDelete}) => (
    <div id={id} style={articleStyle}>
        <h3>{name}</h3>
        <h4>{email}</h4>
        <p>{body}</p>
        <button onClick={onDelete.bind(this, id)}>Delete</button>
    </div>
);

export default Comment;
export const MemorizedComment = memo(Comment);

Comment.propTypes = {
    body    : PropTypes.string.isRequired,
    email   : PropTypes.string.isRequired,
    id      : PropTypes.number.isRequired,
    name    : PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}