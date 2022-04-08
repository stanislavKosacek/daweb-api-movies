// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import movies from './movies.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const genre = req.query.genre ? String(req.query.genre) : null;
  const year = req.query.year ? Number(req.query.year) : null;
  const moviesSimplifyed: Array<any> = simplifyData(movies);

  if (genre && year) {
    const filtered = moviesSimplifyed.filter((movie) => {
      return movie.genres.includes(genre.toLowerCase()) && movie.year === year;
    });
    res.status(200).json(filtered);
  } else if (genre) {
    const filtered = moviesSimplifyed.filter((movie) => {
      return movie.genres.includes(genre.toLowerCase());
    });
    res.status(200).json(filtered);
  } else if (year) {
    const filtered = moviesSimplifyed.filter((movie) => {
      return movie.year === year;
    });
    res.status(200).json(filtered);
  } else {
    res.status(200).json(moviesSimplifyed);
  }
}

const simplifyData = (movies: Array<any>) => {
  const moviesSimplifyed: Array<any> = [];
  movies.forEach((movie: any) => {
    moviesSimplifyed.push({
      id: movie.id,
      title: movie.title,
      url: movie.url,
      posterUrl: movie.posterUrl,
      genres: movie.genres,
      year: movie.year,
    });
  });

  return moviesSimplifyed;
};
