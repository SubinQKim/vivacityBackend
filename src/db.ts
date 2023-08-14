//database configuration file
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vivacityDB',
  password: 'nyqcelerity!21Foxglove',
  port: 5432,
});

type FunInfo = {
  name: string;
  hobbies: string[];
  favoriteFood: string;
};

async function insertFunInfo(info: FunInfo) {
  const query = `INSERT INTO fun_info (name, hobbies, favorite_food) VALUES ($1, $2, $3)`;
  const values = [info.name, info.hobbies, info.favoriteFood];

  try{
    await pool.query(query, values);
    console.log('Inserted info into the db')
  } catch (error) {
    console.error('Error inserting fun info:', error);
  }
}

export {pool, insertFunInfo}