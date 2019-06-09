import React from 'react';

export default class BookCardNonfiction extends React.Component {
    render() {
        const {title, 
            image, 
            author, 
            list_name,
            onClick, idx, buttonText} = this.props;
        return (           
            <div class='Book-card-Nonfiction'>                
                <div class="Book-container">
                    <img src={image} alt='' class='Book-img'></img>
                    <b>{title}</b>
                    <p>by {author}</p>
                   
                    <br />
                    <br /><button onClick={() => onClick(idx)}>{buttonText}</button>
                </div>
            </div>     
        )
    }
}