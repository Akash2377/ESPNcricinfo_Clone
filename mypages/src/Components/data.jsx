import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './data.css'

function GetData() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [error , setError] =useState(false)
    const API_KEY = "pub_109711025d2f392ba357f851f88ba1b9c20dc"

    useEffect(() => {
        getNews()
       
    }, []);
    const getNews = () => {
    const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=cricket`
    
    fetch(url)
        .then((res) => res.json())
        .then((res)=>setNews(res.results))
            .catch((err) => setError(false))
        .finally(()=> setLoading(false))
    };
    console.log("News",news);

    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <h3>Something Wrong</h3>
        ) : (
          <div className="page">
            <div className="upbox">
              <h1>Latest News</h1>
              {news.map((el) => (
                <div className="downbox">
                  <div className="pic">
                    <img
                      className="img"
                      src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/345600/345630.6.jpg"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <h5>{el.title}</h5>
                    <p>{el.description}</p>
                    <hr />
                  </div>
                  {/* <hr /> */}
                </div>
                
              ))}
                  
                
            </div>
            <div className="sideBox">
              <h5>Most Read</h5>
              {news.map((el) => (
                <aside className="sidedownbox">
                  <div className="sidepic">
                    <img
                      className="sideimg"
                      src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/345600/345627.6.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sidedetails">
                    <p>
                      <b>{el.title}</b>
                    </p>
                    {/* <p>{el.description}</p> */}
                  </div>
                </aside>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}
export default GetData;