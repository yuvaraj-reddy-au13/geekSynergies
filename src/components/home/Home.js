import React, { useState, Fragment } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";





function Home( {data} ) {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");

    const [movie, setMovie] = useState("");
    const [year, setYear] = useState("");
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [ry, setRy] = useState('')
    

    function submitHanddler(e) {
        e.preventDefault();

        try {
            axios
                .post(
                    `https://hoblist.com/movieList?category=${first}&language=${second}&genre=${third}&sort=${fourth}`
                )
                .then((response) => {
                    console.log(response);
                });
        } catch (e) {
            alert("OOPS! Error occured");
            console.log(e);
        }
    }

    const imdbSubmitHandler = (e) => {
        e.preventDefault();


        var options = {
            method: "GET",
            url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
            params: { s: movie, page: "1", y: year, r: "json" },
            headers: {
                "x-rapidapi-key":
                    "a0e5b97273msh9ef077c7a3095c7p1468e8jsnb342c494731a",
                "x-rapidapi-host":
                    "movie-database-imdb-alternative.p.rapidapi.com",
            },
        };

        axios
            .request(options)
            .then((response) => {
                const data  = response.data.Search
                const titleName = data[0].Title
                const posterImg = data[0].Poster
                const movieYear = data[0].Year
                // setTitle(data.Search.Title.map(title) => <h1>{title}</h1>)
                
                console.log(data)
                console.log(data[0].Title);
                setTitle(titleName);
                console.log('title', title)

                setImage(posterImg)
                console.log('img', image)

                setRy(movieYear)
                console.log('year', ry)
                
                
                
    
            })
            .catch(function (error) {
                console.error(error);
            });

        console.log("submitted");

    };

    return (
        <div className=''>
        <div className='main inner'>
            <h1>fill this form </h1>
            <form onSubmit={imdbSubmitHandler}>
                <div className="form-group">
                    <label>Movie</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a Movie Name"
                        onChange={(e) => setMovie(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Year</label>
                    <input
                        
                        type="text"
                        className="form-control"
                        placeholder="Enter Movie Yaer"
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>

                <button type='submit' className='btn-large btn-primary'>Submit</button>
            </form>

            <br />
            <h6 className='container' >OR</h6>
            <hr />

            <h1>Enter the Film Details.</h1>
            <form onSubmit={submitHanddler}>
                <div className="form-group">
                    <label>Category</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="eg. movies, etc"
                        onChange={(event) => setFirst(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Language</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="eg. kannada, etc"
                        onChange={(event) => setSecond(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Genre</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="eg. all"
                        onChange={(event) => setThird(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Sort</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="eg. voting"
                        onChange={(event) => setFourth(event.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">
                    Submit
                </button>
            </form>


        


            
        </div>

        { image ? (<div classname='container' style={{display:"flex", flexDirection:'row', marginTop:'30px', background:'none', paddingTop:"20px 50px", margin:'50px', justifyContent:'center', width:'100%'}}>
            <div>
            <img src={image} alt='movie poster' />
            </div>

            <div>
                <h1>Movie : {title}</h1>
                <h1>Release Year : {ry}</h1>
            </div>

        </div>) : null}

    </div>
    );
}

export default Home;
