import React, {Component} from 'react'
import '../../App.css'
import Form from '../VidForm.js'
import ShowVideo from '../ShowVideo.js'
import Navbar from '../Navbar'

const apiKey = "91fa3c67b78147fb96c2b8da1463aab2";


class Videos extends Component {

    state = {
        videos: [],
    };


    getVideo = async(e) => {
        const videoName = e.target.elements.videoName.value;
        const exclude = e.target.elements.exclude.value;
        const include = e.target.elements.include.value;
        const cuisine = e.target.elements.cuisine.value
        const mealType = e.target.elements.type.value;
        const diet = e.target.elements.diet.value

        e.preventDefault();

        if(!videoName) {
            //see if tags are working in the random search




            let apiCall = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=15&tags=${mealType},${cuisine},${diet}`);
            const data = await apiCall.json();
            this.setState({ videos: data.videos});
            
            console.log(this.state)
        } else {
            let apiCall = await fetch(`https://api.spoonacular.com/food/videos/search?&apiKey=${apiKey}&query=${videoName}&type=${mealType}&excludeIngredients=${exclude}&includeIngredients=${include}&cuisine=${cuisine}&diet=${diet}&sort=random&number=12`);
            
            const data = await apiCall.json();

            this.setState({ videos: data.videos});
            console.log(this.state)
        }
        
        

    
        
        };


    componentDidMount = () => {
        const json = localStorage.getItem("videos");
        const videos = JSON.parse(json);
        this.setState({videos:videos});
    };

    componentDidUpdate =() => {
        const videos = JSON.stringify(this.state.videos)
        localStorage.setItem("videos",videos);
    }


    render() {
        return (
        <div className="Recipes">
            <Navbar/>
            <Form getRecipe={this.getVideo}/>
            <ShowVideo videos={this.state.videos}/>

        </div>

    );
    }
    
};

export default Videos;