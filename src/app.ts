import express, { Request, Response } from "express";
import { pool, insertFunInfo } from './db';
import cors from "cors";

const app = express();
const port = 3001;

//enable cors to allow reqs from diff origins
// app.use(cors());

// Parse incoming json reqs
app.use(express.json());


app.post("/fun/info", async (req: Request, res: Response) => {
    console.log("Received a POST request to /fun/info");

    const { name, hobbies, favoriteFood } = req.body;

    const funInfo = {
        name,
        hobbies,
        favoriteFood,
    };

    try {
        await insertFunInfo(funInfo);
        res.json({ message: 'Fun information inserted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
});

//API endpoint (old, before stretch activity)
// app.get("/awesome/applicant", (req: Request, res: Response) =>  {
//     const funInfo = {
//         name: "Subin Kim",
//         hobbies: ["Reading Space Operas", "Redesigning room", "Listening to hip hop"],
//         favoriteCoffee: "Iced Vanilla Latte",
//     };
//     res.json(funInfo);
// });

//Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});



// below is the create table query used in PG Admin 4
// CREATE TABLE fun_info (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     hobbies TEXT[],
//     favorite_food VARCHAR(255) NOT NULL
// );
