import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Movie } from '../types.ts'

let movies: Movie[] = [
    {  id: "1",
      name: "Product One",
      description: "This is moviss one",
      price: 99.99,
    },
    {
      id: "2",
      name: "Product Two",
      description: "This is product two",
      price: 150.99,
    },
    {
      id: "3",
      name: "Product Three",
      description: "This is product three",
      price: 199.99,
    },
  ];

  export const getMovies = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: movies
    }
}