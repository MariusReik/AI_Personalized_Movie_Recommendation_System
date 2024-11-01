import React, { useState } from 'react';

const Home = () => {
    const [genre, setGenre] = useState([]);
    const [likedMovies, setLikedMovies] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    const handleGenreChange = (e) => {
        const { options } = e.target;
        const selectedGenres = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);
        setGenre(selectedGenres);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate getting recommendations (you'll replace this with your actual logic)
        const recommendedMovies = getRecommendations(genre, likedMovies);
        setRecommendations(recommendedMovies);
    };

    // Dummy function to simulate movie recommendations based on genre and liked movies
    const getRecommendations = (genres, likedMovies) => {
        // Replace this with your actual recommendation logic
        const dummyMovies = [
            { title: "Movie A", genres: ["Action", "Adventure"], year: 2021 },
            { title: "Movie B", genres: ["Comedy", "Romance"], year: 2020 },
            { title: "Movie C", genres: ["Drama", "Thriller"], year: 2022 },
            { title: "Movie D", genres: ["Sci-Fi", "Action"], year: 2019 },
            { title: "Movie E", genres: ["Fantasy", "Adventure"], year: 2023 },
            { title: "Movie F", genres: ["Horror", "Mystery"], year: 2022 },
        ];

        // Filter movies based on selected genres (this is just an example)
        return dummyMovies.filter(movie => 
            genres.some(genre => movie.genres.includes(genre))
        ).slice(0, 3); // Return the top 3 recommendations
    };

    return (
        <div>
            <h1>Movie Recommendation System</h1>
            <p>Enter your favorite genres and movies to get personalized recommendations!</p>
            <form onSubmit={handleSubmit}>
                <select 
                    multiple 
                    value={genre} 
                    onChange={handleGenreChange} 
                    required 
                >
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Animation">Animation</option>
                    <option value="Children's">Children's</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Crime">Crime</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Film-Noir">Film-Noir</option>
                    <option value="Horror">Horror</option>
                    <option value="Musical">Musical</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Thriller">Thriller</option>
                    <option value="War">War</option>
                    <option value="Western">Western</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Movies You Like (comma separated)" 
                    value={likedMovies} 
                    onChange={(e) => setLikedMovies(e.target.value)} 
                    required 
                />
                <button type="submit">Get Recommendations</button>
            </form>

            {/* Display Recommendations */}
            <div className="recommendations">
                <h3>Recommended Movies:</h3>
                <ul>
                    {recommendations.length > 0 ? (
                        recommendations.map((movie, index) => (
                            <li key={index}>
                                {movie.title} ({movie.year}) - Genres: {movie.genres.join(', ')}
                            </li>
                        ))
                    ) : (
                        <li>No recommendations found.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Home;
