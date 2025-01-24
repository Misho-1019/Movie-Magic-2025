import Movie from "../models/Movie.js";
import { v4 as uuid } from "uuid";

export default {
    getAll(filter = {}) {
        let query = Movie.find({});
        
        if (filter.search) {
            query = query.where({title: filter.search})
        }

        if (filter.genre) {
            query = query.where({genre: filter.genre})
        }

        if (filter.year) {
            query = query.where({year: Number(filter.year)})
        }

        return query;
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