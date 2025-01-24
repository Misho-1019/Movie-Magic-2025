import Movie from "../models/Movie.js";
import { v4 as uuid } from "uuid";

export default {
    getAll(filter = {}) {
        let results = Movie.find({});
        
        // if (filter.search) {
        //     results = results.filter(movie => movie.title.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()))
        // }

        // if (filter.genre) {
        //     results = results.filter(movie => movie.genre.toLocaleLowerCase() === filter.genre.toLocaleLowerCase())
        // }

        // if (filter.year) {
        //     results = results.filter(movie => movie.year == filter.year)
        // }

        return results;
    },
    getOne(movieId) {
        const result = Movie.findById(movieId)

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