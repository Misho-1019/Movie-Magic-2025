import movies from "../movies.js";
import { v4 as uuid } from "uuid";

export default {
    getAll(filter = {}) {
        let results = movies;
        if (filter.search) {
            results = movies.filter(movie => movie.title.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()))
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