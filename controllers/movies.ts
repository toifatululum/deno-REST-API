import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Movie } from '../types.ts'

let movies: Movie[] = [
    {  id: "1",
      name: "Harry Potter",
      description: "This is movie one",
      price: 40000,
    },
    {
      id: "2",
      name: "Beauty and The Beast",
      description: "This is movie two",
      price: 32000,
    },
    {
      id: "3",
      name: "Cinderella",
      description: "This is movie three",
      price: 30000,
    },
  ];

//show all movies
  export const getMovies = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: movies
    }
}

//show movie by id
export const getMovie = ({ 
  params, 
  response 
}: { 
  params: { id: string }, 
  response: any 
}) => {
  const movie = movies.filter((movie) => movie.id === params.id)

  if (movie) {
    response.status = 200
    response.body = {data:movie}
    
  }else{
    response.status = 404
  response.body = { msg: `Cannot find movie ${params.id}` }

  }
}
//add movie
export const addMovie = async ({
  request,
  response,
}: {
  request: any
  response: any
}) => {
  const body = await request.body()
  const movie: Movie = body.value
  movies.push(movie)

  response.body = { msg: 'OK' }
  response.status = 200
}
//update movie
export const updateMovie = async({ params, request, response }: { params: { id: string }, request: any, response: any }) => {
  const movie: Movie | undefined = movies.find(p => p.id === params.id)

  if (movie) {
      const body = await request.body()

      const updateData: { name?: string; description?: string; price?: number } = body.value

      movies = movies.map(p => p.id === params.id ? { ...p, ...updateData } : p)

      response.status = 200
      response.body = {
          success: true,
          data: movies
      }
  } else {
      response.status = 404
      response.body = {
          success: false,
          msg: 'No product found'
      }
  }
}
//delete movie
export const deleteMovie = ({ params, response }: { params: { id: string }, response: any }) => {
  movies = movies.filter(p => p.id !== params.id)
  response.body = { 
      success: true,
      msg: 'Movies removed'
  }
}
