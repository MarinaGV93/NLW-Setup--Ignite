// // Falar o tipo q tem q ser
// type Usuario = {
//     idade: number
// }

// function mostraIdadeDoUsuario(usuario: Usuario){
//     return usuario.idade
// }

// const usuario = {
//     name: "Marina",
//     idade: 29
// }

// mostraIdadeDoUsuario(usuario)

// const usuario2 = {
//     name: "Marina"
// }

// mostraIdadeDoUsuario(usuario2)

// console.log("oi")

// API RESTful - API que provê varios recursos, varios acessos de funcionalidades de criação... atraves de rotas HTTP

import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify()

// Acessar a lista de habitos criada 
const prisma = new PrismaClient()

// Integrar o CORS
app.register(cors)

//Quais enderços do front q pode acessar o back
// origin: ['http://localhost:3000']

// Criar a rota
app.get('/', async () => {

    // Buscar todos os habitos
    // Para aguardar a chamada de dados ser finalizada antes de retornar os dados, usa o await com o async (assincrona)
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Dormir'
            }
        }
    })
    return habits
})

// Para q a aplicaçao ouça a porta
app.listen({
    port: 3333,
    // para mostrar quando o servidor estiver no ar
}).then(() => {
    console.log('HTTP Server running!')
})


