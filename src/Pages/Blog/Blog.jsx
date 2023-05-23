import useTitle from "../../TitleHook/useTitle";

/* eslint-disable react/no-unescaped-entities */
const Blog = () => {
  useTitle('BLog')
  return (
    <div className="mx-10 my-10">
      <h1 className="text-2xl mb-5">
        What is an access token and refresh token? How do they work and where should we store
        them on the client-side?
      </h1>
      <p>
        An access token and a refresh token are commonly used in authentication and
        authorization systems. Let me explain what they are and how they work: <br />
        1.Access Token: An access token is a credential that is used to access protected
        resources, such as APIs or web services. It is typically issued by an authorization
        server after a user successfully authenticates and authorizes an application. The
        access token contains information about the user and their permissions and has a
        limited lifespan. It is presented with each request to the protected resource to prove
        the user's identity and permissions. <br />
        2. Refresh Token: A refresh token is a long-lived credential that is used to obtain a
        new access token when the current one expires. It is issued alongside the access token
        by the authorization server and is typically saved securely on the client-side. When
        the access token expires, the client can use the refresh token to request a new access
        token without requiring the user to re-authenticate. Refresh tokens have a longer
        lifespan than access tokens and are often used to maintain a user's session across
        multiple authentication sessions.
      </p>

      <h1 className="text-2xl mb-5">Compare SQL and NoSQL databases?</h1>
      <p>
        SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of
        database management systems with distinct characteristics. Here's a comparison of SQL
        and NoSQL databases: <br />
        1.Data Model: SQL: SQL databases use a structured data model based on tables with
        predefined schemas. Data is organized into rows and columns, and relationships between
        tables are defined using foreign keys. <br />
        2. Scalability: SQL: SQL databases generally provide vertical scalability, meaning they
        can handle increased load by upgrading the hardware resources (e.g., CPU, RAM) of a
        single server. Horizontal scalability (scaling across multiple servers) is possible but
        may require additional effort. NoSQL: NoSQL databases are designed to scale
        horizontally by distributing data across multiple servers. They are built to handle
        large amounts of data and high traffic loads efficiently. <br />
        3.Schema: SQL: SQL databases require a predefined schema that determines the structure
        of the data. Changes to the schema often involve altering the table structure, which
        can be a complex and time-consuming process. NoSQL: NoSQL databases offer more
        flexibility with schema-less or dynamic schemas. They allow developers to add or modify
        fields in documents or records without the need for a predefined schema.
      </p>

      <h1 className="text-2xl mb-5">What is express js? What is Nest JS ?</h1>

      <p>
        Express.js is a popular and minimalist web application framework for Node.js. It
        provides a set of features and utilities that simplify the process of building web
        applications and APIs. Express.js is known for its simplicity, flexibility, and ease of
        use. It allows developers to handle HTTP requests and responses, define routes, handle
        middleware, and interact with databases and other external services. Express.js
        provides a lightweight and unopinionated framework, which means it doesn't impose
        strict conventions or predefined structures on developers. This flexibility allows
        developers to choose the tools and libraries they prefer and build applications
        according to their specific requirements. Express.js also has a large and active
        community, which contributes to its ecosystem with numerous middleware, plugins, and
        extensions.
      </p>

      <h1 className="text-2xl mb-5">What is MongoDB aggregate and how does it work ?</h1>

      <p className="mb-10">
        In MongoDB, the aggregate function is a powerful tool used to perform advanced data
        aggregation operations on collections. It allows you to process and analyze data by
        applying a sequence of operations or stages to transform and manipulate the documents
        in the collection. The aggregate operation works by taking an array of stages as input,
        where each stage represents a specific operation to be applied to the data. These
        stages are processed sequentially, passing the resulting data from one stage to the
        next. The output of the last stage is the aggregated result.
      </p>
    </div>
  );
};

export default Blog;
