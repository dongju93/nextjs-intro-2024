"use client";

import { useState, useEffect } from "react";

export default function Page() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {
        const response = await fetch(
            "https://nomad-movies.nomadcoders.workers.dev/movies"
        );
        const json_data = await response.json();
        setMovies(json_data);
        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <h1>Hello</h1>
            {isLoading ? "Loading..." : JSON.stringify(movies)}
        </div>
    );
}
