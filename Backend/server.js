import express from "express";

const app= express();
const port=3000;
app.use(express.json());

let users=[
    {
        id:1,
        name:"Vaibhav",
        email:"vaibhav@123.com"
    },
    {
        id:2,
        name:"Rahul",
        email:"rahul@456.com"
    }
]

app.get("/users", (req, res) => {
    return res.json(users);
});

app.post("/users", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
    };

    users.push(newUser);
    return res.status(201).json(newUser);
});

app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userExists = users.some(user => user.id === userId);

    if (!userExists) {
    return res.status(404).json({ error: "User not found" });
    }

    users = users.filter(user => user.id !== userId);
    return res.status(200).json({ message: "User deleted successfully" });
});  


app.listen(port,()=>{
    console.log("Server is running on port "+port);
})