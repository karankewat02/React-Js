import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl,newsUrl,source,time,author} = this.props;
        return (
            <div>
            
                <div className ="card my-2 mx-5">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
                    <span class="visually-hidden">unread messages</span>
                </span>
  <img src={imageUrl} className ="card-img-top" alt="" />
                    <div className ="card-body">
                        <h5 className ="card-title">{title.slice(0,45)}...</h5>
                        <p className ="card-text">{description.slice(0,88)}...</p>
                        <a target="_blank" rel="noreferrer" href={newsUrl} className ="btn btn-success btn-sm my-4">Read More</a>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{author}</cite>
                            <div className="text-end">
                                <small >{new Date(time).toGMTString()}</small>                        
                            </div>
                        </footer>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
