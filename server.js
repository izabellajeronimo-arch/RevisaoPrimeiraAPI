const express = require("express");
const cors = require("cors");

// import express from "express";
// import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

        // {
        //     "nome": "Pedro",
        //     "curso": "Desvolvimento de Sistema"
        // }

        let ALUNOS=[
            {id: 1, nome: "Alice", curso: "Desenvolvimento de Sistema"},
            {id: 1, nome: "Brenda", curso: "Redes de computadores"},
            {id: 1, nome: "Brenno", curso: "Adminidtrsção"},
            {id: 1, nome: "Carlos", curso: "Desenvolvimento de Sistema"},
        ];

        app.get("/",(requestAnimationFrame, res)=>{
            res.json({
                mensagem: "API alunos funcionando!"
            });
        })
        const PORTA = 3000;

   app.listen(PORTA, () => {
    console.log(`Servidor iniciado com sucesso!`);
    console.log(`http://localhost:${PORTA}`);
});