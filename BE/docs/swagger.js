import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your API Docs",
      version: "1.0.0",
      description: "API documentation for your MERN project",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // where your route files are
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;