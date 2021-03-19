import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const FirstParagraph = () => {
    return (
        <div>
            <p>Hello world</p>
        </div>
    )
}

ReactDOM.render(<FirstParagraph />, document.getElementById("app"))