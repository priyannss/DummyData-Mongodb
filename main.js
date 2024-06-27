import express from "express";
import mongoose from "mongoose";
import Employee from "./models/company.js";

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/company", {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected"))
.catch( (err) => (console.error("MongoDB connection error:", err)) );


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/generateData", async (req, res)=> {
    try {
        // clear existing data in collection
        await Employee.deleteMany({});

        // Generate dummy data
        const dummyData = [];
        let names = ['John', 'Emily', 'Michael', 'Sophia', 'William', 'Emma', 'James', 'Olivia', 'Alexander', 'Isabella'];
        const languages = ["Java", "Python", "JavaScript"];
        const cities = ["New York", "San Francisco", "London", "Berlin", "Tokyo"];

        function getRandomElement(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        for(let i=0; i<10; i++) {
            const randomName = getRandomElement(names);
            const randomLanguage = getRandomElement(languages);
            const randomCity = getRandomElement(cities);
            const isManager = Math.random() < 0.5; // 50% chance of being a manager

            const employee = new Employee({
                name: randomName,
                salary: Math.floor(Math.random() * 100000) + 50000,
                language: randomLanguage,
                city: randomCity,
                isManager: isManager
            });

            dummyData.push(employee);
        }

        // inserting dummy data into mongodb
        await Employee.insertMany(dummyData);


        res.send("Dummy data generated and inserted successfully!");

    } catch(err) {
        console.error("Error generating dummy data : ", err);
    }
});


app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
})
  