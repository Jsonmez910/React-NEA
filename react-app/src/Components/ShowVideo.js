import React from 'react';
import './ShowRecipe.css'
import { Link } from 'react-router-dom';
import CardItem from './Carditem.js'

const ShowVideo = props => (
    
    <div className="container">
        <div className="row">

        { props.videos.map((video) => {

            return(
                <div key={video.title} className="col-md-4" style={{marginBottom:"2rem"}}>
                    <div>
                    <CardItem
                        src={video.thumbnail}
                        text={ video.title.length < 20 ? `${video.title}` : 
                        `${video.title.substring(0,25)}...`}
                        path={`/SingleVideo/${video.youTubeId}`}
                    />
                        <button className="video__buttons">
                            <Link to={{
                                pathname: `/SingleVideo/${video.youTubeId}`,
                                // state: { video: video.title}

                        
                            }}><span className="button__text">View Video</span></Link>  
                        </button>
                        
                    </div>
                </div>
                

                ) 
            } )}                    

        </div>


    </div>
)

export default ShowVideo;