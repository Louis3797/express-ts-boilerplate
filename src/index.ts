import * as dotenv from 'dotenv';
import app from './app';
import logger from './utils/logger';

dotenv.config();

app.listen(parseInt(process.env.PORT), () => {
  logger.log('info', `Server is running on Port: ${process.env.PORT}`);
});
