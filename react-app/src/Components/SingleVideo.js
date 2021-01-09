import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './SingleVideo.css'

const apiKey = "91fa3c67b78147fb96c2b8da1463aab2";


class ShowSingleVideo extends React.Component {

    state = {
        videoId: [],

    };

    componentDidMount = async () => {
        const getVideoId = this.props.match.params.youTubeId

        console.log(getVideoId)

        this.setState({ videoId: getVideoId })
    };


    render() {


        const videoId = this.state.videoId;


        return (
            <div>
                <Navbar></Navbar>

                <div className="videoPage">

                    <div className="video-container">
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="go-back-button">
                        <button className="active-recipe__button" >
                            <Link to='/Videos' >Go Back</Link>
                        </button>
                    </div>

                </div>
            </div>

        );
    }
};

export default ShowSingleVideo;