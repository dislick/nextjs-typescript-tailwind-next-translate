import { NextApiRequest, NextApiResponse } from 'next';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  return res.json({ hello: 'world!' });
};
export default handler;
