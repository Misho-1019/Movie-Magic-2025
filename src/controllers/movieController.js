import { Router } from "express";
import movieService from "../services/movie-service.js";
import castService from "../services/cast-service.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create')
})

movieController.get('/search', async (req, res) => {
    const filter = req.query;

    const movies = await movieService.getAll(filter)

    res.render('search', { movies, filter })
})

movieController.post('/create', async (req, res) => {
    const newMovie = req.body;

    await movieService.create(newMovie);

    res.redirect('/');
    
    res.end();
})

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieService.getOne(movieId);

    res.render('movie/details', { movie })
})

movieController.get('/:movieId/attach-cast', async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieService.getOne(movieId)
    const casts = await castService.getAll();

    res.render('movie/attach-cast', { movie, casts })
})

export default movieController;