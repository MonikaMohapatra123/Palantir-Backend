// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import pageRoutes from "./routes/pageRoutes.js";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// app.use("/api/pages", pageRoutes);

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });




import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import pageRoutes from "./routes/pageRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Palantir Backend API is Live 🚀");
});

app.use("/api/pages", pageRoutes);

// ❌ DO NOT use app.listen()
// export app instead
export default app;
