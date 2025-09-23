// api/[...all].mjs and api/index.mjs
import app from '../backend/index.js';
export default (req, res) => app(req, res);