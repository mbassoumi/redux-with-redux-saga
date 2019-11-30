import PropTypes     from 'prop-types'
import React, {memo} from 'react';

const articleStyle = {
    border : 'solid 1px black',
    margin : '10px',
    padding: '10px'
};

const Article = ({id, title, body, onDelete}) => (
    <div id={id} style={articleStyle}>
        <h3>{title}</h3>
        <p>{body}</p>
        <button onClick={onDelete.bind(this, id)}>Delete</button>
    </div>
);

export default Article;
export const MemorizedArticle = memo(Article);

Article.propTypes = {
    body    : PropTypes.string.isRequired,
    id      : PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    title   : PropTypes.string.isRequired
};