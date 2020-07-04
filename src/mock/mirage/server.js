import {Factory, Model, Server} from 'miragejs'
import faker from "faker"
import Vue from "vue"

//https://miragejs.com/docs/main-concepts/factories/
export function createServer({environment = "development"} = {}) {
    Vue.$log.info("Create Mock Server")
    let server = new Server({
        environment,

        models: {
            user: Model
        },

        seeds(server) {
            server.createList("user", 5)
        },

        factories: {
            user: Factory.extend({
                name() {
                    return faker.name.findName()
                },
                username() {
                    return this.name.replace(" ", "").toLowerCase()
                }
            })
        },

        routes() {

            this.namespace = "api"

            this.get("/users", (schema) => {
                return schema.users.all()
            })

            this.post("/users", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)

                return schema.users.create(attrs)
            })

            this.delete("/users/:id", (schema, request) => {
                let id = request.params.id

                return schema.users.find(id).destroy()
            })
        },

    })

    return server
}