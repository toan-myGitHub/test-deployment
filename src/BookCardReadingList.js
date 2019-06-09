import React from 'react';

export default class BookCardReadingList extends React.Component {
    render() {
        const {title, 
            image, 
            author, 
            description,
            onClick, idx, buttonText} = this.props;
        return (           
            <div class='Book-card'>                
                <div class="Book-container">
                    <img src={image} alt='' class='Book-img'></img>
                    <b>{title}</b>
                    <p>by {author}</p>
                    <p>{description}</p>
                    <p><button onClick={() => onClick(idx)}>{buttonText}</button></p>
                </div>
            </div>     
        )
    }
}