//database configuration file
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vivacityDB',
  password: 'nyqcelerity!21Foxglove',
  port: 5432,
});
