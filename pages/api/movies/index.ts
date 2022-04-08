// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import movies from './movies.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const genre = req.query.genre ? req.query.genre : null;
  const year = req.query.year ? Number(req.query.year) : null;
  simplifyData(movies);

  if (genre && year) {
    const filtered = movies.filter((movie) => {
      return movie.genres.includes(genre.toLowerCase()) && movie.year === year;
    });
    res.status(200).json(filtered);
  } else if (genre) {
    const filtered = movies.filter((movie) => {
      return movie.genres.includes(genre.toLowerCase());
    });
    res.status(200).json(filtered);
  } else if (year) {
    const filtered = movies.filter((movie) => {
      return movie.year === year;
    });
    res.status(200).json(filtered);
  } else {
    res.status(200).json(movies);
  }
}

const simplifyData = (movies) => {
  movies.forEach((movie) => {
    delete movie.description;
  });
};
