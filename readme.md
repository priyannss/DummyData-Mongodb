# Generate a dummy data in this format in a collection called employees in a db called company

{
    name: String,
    salary: Number,
    language: {
        type: String,
        enum: ["Java", "Python", "JavaScript"],
        required: true
    },
    city: String,
    isManager: Boolean
}


# Generate 10 such records when a button called generate data is clicked 
# Create an express app with mongoose to achieve it
# everytime a button is clicked you should clear the collection# DummyData-Mongodb
