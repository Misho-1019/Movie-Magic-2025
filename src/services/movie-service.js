import movies from "../movies.js";
import { v4 as uuid } from "uuid";

export default {
    getAll(filter = {}) {
        let results = movies;
        
        if (filter.search) {
            results = results.filter(movie => movie.title.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()))
        }

        if (filter.genre) {
            results = results.filter(movie => movie.genre.toLocaleLowerCase() === filter.genre.toLocaleLowerCase())
        }

        if (filter.year) {
            results = results.filter(movie => movie.year == filter.year)
        }

        return results;
    },
    findOne(movieId) {
        const result = movies.find(movie => movie.id === movieId)

        return result;
    },
    create(movieData) {
        const newId = uuid();

        movies.push({
            id: newId,
            rating: Number(movieData.rating),
            ...movieData,
        })
    }
}