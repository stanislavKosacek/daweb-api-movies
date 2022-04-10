// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import movies from './movies.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id ? Number(req.query.id) : null;
  let found = false;
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (id) {
    movies.forEach((movie) => {
      if (movie.id === id) {
        res.status(200).json(movie);
        found = true;
      }
    });
  }
  if (!found) {
    res.status(404).json({ message: 'Not found' });
  }
}
