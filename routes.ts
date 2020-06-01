import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getMovies, getMovie, addMovie,updateMovie, deleteMovie } from './controllers/movies.ts'
const router = new Router()


router
.get('/movies', getMovies)
.get('/movies/:id', getMovie)
.post('/movies', addMovie)
.put('/movies/:id', updateMovie)
.delete('/movies/:id', deleteMovie)
    
    

export default router