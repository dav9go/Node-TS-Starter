//Express
import express, { Request, Response } from "express";
//Config
import config from "../config/index";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
//Routes
import interiorRoutes from "./routes/interiors";

const app = express();
const port = config.PORT || 3000;

app.use(
  cors({
    origin: "http://your-frontend-url.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // limita a 100 solicitudes por IP por "windowMs"
    message: "Too many requests from this IP, please try again later",
  })
);
app.use(express.json());

app.use("/interiors", interiorRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hi");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
