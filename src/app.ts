import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3000;

//enable cors
app.use(cors());

//API endpoint
app.get("/awesome/applicant", (req: Request, res: Response) =>  {
    const funInfo = {
        name: "Subin Kim",
        hobbies: ["Reading Space Operas", "Redesigning room", "Listening to hip hop"],
        favoriteCoffee: "Iced Vanilla Latte",
    };
    res.json(funInfo);
});

//Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});