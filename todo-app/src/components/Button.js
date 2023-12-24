import PropTypes from 'prop-types';

function Button({ color, text, onClick }) {
    return <button
        className='btn'
        style={{ backgroundColor: color }}
        onClick={onClick}
    >
        {text}
    </button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propsTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button;