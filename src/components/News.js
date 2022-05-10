import React, { Component } from 'react'
import localData from './news.json'
import NewsItem from './NewsItem'
import Loader from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

    articles =[];

    static defaultProps = {
        country : "in",
        pageSize : 8,
        category :'general',
        clg : false
    }

    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,
        clg : PropTypes.bool
    }

    constructor(){
        super();
            this.state ={
                articles : this.articles,
                loading : false,
                page : 1,
                totalArticles : 1 
            }
        }
    

    async componentDidMount(){
        this.setState({
            loading:true
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cf58d1009d3b4184945241e533716e0a&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        // let clgNews = localData.json();

        this.props.clg ? 
        this.setState({articles: localData.articles}) :  this.setState({articles: parsedData.articles})

        this.setState({
            articles: this.props.clg ? localData.articles:parsedData.articles, 
            totalArticles :this.props.clg ? localData.totalResults: parsedData.totalResults,
            loading:false
        })
    }


    previousHandler = async () => {
        this.setState({
            loading :true
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cf58d1009d3b4184945241e533716e0a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        
        this.setState({articles: parsedData.articles})
        
        this.setState({
            page : this.state.page - 1,
            loading:false
        })
    }
    
    nextHandler = async () => {
        if(!(this.state.page > Math.ceil(this.state.totalArticles/this.props.pageSize))){  
            this.setState({
                loading :true
            })    
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cf58d1009d3b4184945241e533716e0a&page=${this.state.page  + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({articles: parsedData.articles})

            this.setState({
                page : this.state.page + 1,
                loading : false
            })
        }
    }

        
    render() {
        return (
            <div className="container">
                <h2 className="text-center my-5">Gyan Ganga News App - {this.props.category.toUpperCase()}</h2>

                {this.state.loading && <Loader/>}

                <div className="row">
                
                {this.state.loading?<div/> : this.state.articles.map((element)=>{

                    if(element.category === this.props.category){
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title = {element.title?element.title:""} description = {element.description?element.description:"Desciption"} imageUrl={element.urlToImage?element.urlToImage:"https://cdn.vox-cdn.com/thumbor/BnG9WCJSDvN5drVI3i6JTS-R1vM=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10125279/acastro_180130_1777_0008.jpg"} newsUrl={element.url} source = {element.source.name} time = {element.publishedAt} author={element.author?element.author:"Unknown"}/> 
                        </div>
                    }else if (!element.category){
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title = {element.title?element.title:""} description = {element.description?element.description:"Desciption"} imageUrl={element.urlToImage?element.urlToImage:"https://cdn.vox-cdn.com/thumbor/BnG9WCJSDvN5drVI3i6JTS-R1vM=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10125279/acastro_180130_1777_0008.jpg"} newsUrl={element.url} source = {element.source.name} time = {element.publishedAt} author={element.author?element.author:"Unknown"}/> 
                        </div>
                    }
                })}
                    
                </div>

                <div className="container   d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-success my-5" onClick={this.previousHandler}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page +1 > this.state.totalArticles/18 } className="btn btn-success my-5" onClick={this.nextHandler}>Next &rarr;</button>
                </div>
                  
            </div>
        )
    }
}

export default News;
