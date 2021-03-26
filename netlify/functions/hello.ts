import { Handler } from "@netlify/functions";

const handler: Handler = async function (event, context) {
  const { name = "stranger" } = event.queryStringParameters;

  return {
    statusCode: 200,
    body: `Hello, ${name}! 👋`,
  };
};

export { handler };
