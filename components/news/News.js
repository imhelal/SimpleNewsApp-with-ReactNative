import React,{useState,useEffect} from 'react'
import {Text, ScrollView} from 'react-native'
import Newsitem from './Newsitem'
function News({category}) {

    const [news,setNews] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        const getNews =async ()=>{
           await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=29c88ab8b2854471ae26ecb645140e48`)
            .then(response => response.json())
            .then(data => {
                setNews(data.articles) 
                setIsLoading(false)
            });
            }
        getNews()
        
    }, [])
    if(isLoading){
        return <Text>Loading...</Text>  
    }
    return (
        <>
           <ScrollView>
           {news.map((item,index)=>{
               return(
                <Newsitem news={item} key={index} />
               )
           })} 
           </ScrollView>
                
        </>
    )
}

export default News
