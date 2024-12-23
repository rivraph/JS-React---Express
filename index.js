import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

//app.use(cors({ origin: "http://localhost:5173" }));

app.get("/api/employees", (req, res) => {
	res.json({ results: [sampleEmployee] });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

fetch("http://localhost:3000/api/employees")
	.then((resp) => resp.json())
	.then((data) => console.log(data))
	.catch((err) => console.log("err"));
