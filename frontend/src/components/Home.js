
import React, { useState } from 'react';

const Home = () => {
    const [genre, setGenre] = useState('');
    const [likedMovies, setLikedMovies] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission
        console.log({ genre, likedMovies });
    };

    return (
        <div>
            <h1>Movie Recommendation System</h1>
            <p>Enter your favorite genres and movies to get personalized recommendations!</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Favorite Genre" 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Movies You Like (comma separated)" 
                    value={likedMovies} 
                    onChange={(e) => setLikedMovies(e.target.value)} 
                    required 
                />
                <button type="submit">Get Recommendations</button>
            </form>
        </div>
    );
};

export default Home;
