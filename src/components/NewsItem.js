import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {title,desc,imgurl,author,date,url,source} = this.props;

    let d = new Date(date);
    let fd = d.toDateString().slice(0,3)+", "+d.toDateString().slice(4);

    return (
      <div>
        <div className="card my-4 mx-2 rounded-lg" >
            <span className=' absolute px-2 py-1 z-1 text-white text-xs bg-red-600 rounded-tl-lg '>{source}</span>
            <img src={imgurl}  alt="..."  className='relative rounded-t-lg h-[200px] '/>
            
            <div className="card-body">
                <h5 className="card-title text-[1.3rem] font-bold">{title}....</h5>
                <p className="card-text mt-2 text-[1rem] font-semibold ">By {author}<br></br> on {fd}</p>
                <p className="card-text mt-2 mb-3 text-sm">{desc}....</p>
                <a href={url} className="text-white bg-black px-2 py-2 rounded-lg" >Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
