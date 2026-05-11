const swaggerJsdoc =
require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Your API Docs",
      version: "1.0.0",
      description:
        "API documentation for your MERN project",
    },

    servers: [
      {
        url:
          process.env.NODE_ENV
            === "production"
            ? "https://secondbrain-wrez.onrender.com"
            : "http://localhost:3009",
      },
    ],
  },

  apis: ["./routes/*.js"],
};

const swaggerSpec =
  swaggerJsdoc(options);

module.exports =
  swaggerSpec;