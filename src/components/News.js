import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Dropdown from './Dropdown';
import Spinner from './Spinner';




export class News extends Component {

    


    countrycode = (data)=>{
        this.setState(
            { ccode: data,loading:true },
            () => {
                this.setState(
                    { url: `https://newsapi.org/v2/top-headlines?country=${this.state.ccode}&category=${this.props.category}&page=${this.props.page}&pageSize=${this.props.pageSize}&apiKey=cd4082af32f74dcbb8b90446a17b1418`, },
                    () => {
                        this.fetchData();
                    }
                );
            }
        );
    }

    fetchData = async () => {
        this.props.setProgress(0);
        this.props.setProgress(50);
        let data = await fetch(this.state.url);
        this.props.setProgress(100);
        let parsedData = await data.json();
        setTimeout(()=>{
            this.setState({ articles: parsedData.articles, loading : false, totalnewscount:parsedData.totalResults , pageSize:parsedData.totalResults })
            console.log(this.state.pageSize)
        },1000)

    };


    constructor(props){
        super(props);
        this.state = {
            articles : [],
            ccode : "us",
            loading : true,
            url : `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&page=${this.props.page}&pageSize=${this.props.pageSize}&apiKey=cd4082af32f74dcbb8b90446a17b1418`,
            totalnewscount : 0,
            page:1,
            pageSize : this.props.pageSize
            
        }
        
        
    }

    async componentDidMount(){
       this.fetchData()
    }


  render() {
    return (
      <div className='container pb-3 pt-[72px] self-center px-2 sm:px-5 md:pt-[72px]    lg:pt-14 lg:px-20 '>
        <div className="container flex flex-col justify-center items-center sm:justify-between sm:flex-row sm:px-5 md:px-20 py-3 fixed z-20 bg-white" >
            <h1 className='text-xl font-bold sm:text-2xl lg:text-3xl mb-2'>{this.props.category === "general" ? "FoxNews" : this.props.category.slice(0,1).toUpperCase()+this.props.category.slice(1)} - TopHeadlines</h1>
            <div className='flex'>
                <h1 className=' self-center font-semibold mx-2'>Select Country </h1>
                <Dropdown  datasend={this.countrycode}/>
            </div>
        </div>
        {/* {this.state.loading && <Spinner/> } */}

 
        <div className="row flex justify-center items-center pt-24 overflow-hidden md:pt-16">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
                {
                !this.state.loading && Array.isArray(this.state.articles) && this.state.articles!=null && this.state.articles.map((element) => {
                    // if(element.urlToImage!=null)
                    // {
                    return (
                        <div key={element.url}>
                            {/* <p>{element.title}</p> */}
                            <NewsItem 
                                title={element.title.length > 35 ? element.title.slice(0, 35) : element.title}
                                desc={element.description ? element.description.slice(0, 55) : "No Description Found \n Click on Read More"}
                                imgurl={element.urlToImage ? element.urlToImage : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"}
                                author={element.author?element.author:"Unknown"}
                                date={element.publishedAt ? element.publishedAt.slice(0,10):"No Date Found"}
                                url={element.url}
                                source={element.source.name}
                            />
                        </div>
                    );
                // }
                })} 
            </div>
        </div>
        

      </div>
    )
  }
}

export default News
