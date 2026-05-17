import { createRequestHandler } from '../dist/server/index.js';

export default async function handler(req, res) {
  const handle = createRequestHandler();
  await handle(req, res);
}
