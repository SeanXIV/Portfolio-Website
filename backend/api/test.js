const cors = require('cors');

const corsMiddleware = cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['GET', 'OPTIONS'],
});

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  await runMiddleware(req, res, corsMiddleware);
  
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  res.status(200).send('Backend is working!');
}