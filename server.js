import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();

app.use(express.json());
const PORT = 3000;

app.get("/users", async function (req, res) {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
});

app.post("/users", async function (req, res) {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name,
        },
    });
    res.status(201).json(user);
});

app.put("/users/:id", async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id,
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name,
        },
    });
    res.status(200).json(user);
});

app.delete("/users/:id", async (req, res) => {
    const user = await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json(user)
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}...🚀`));

//banco de dados Mongo DB
//roberiouol => ususario
//Senha => QWMthiwGfxbvFPdx
