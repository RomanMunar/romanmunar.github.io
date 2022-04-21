---
title: Working with GraphQL in 2022
publishedAt: 2022-04-12
description: Things to consider before deciding to use GraphQL
image: /images/dist/blog_working-with-graphql-2022.webp
tags:
  - GraphQL
  - API Schema

layout: ../../components/Pages/WritingsPage/WritingContentLayout.astro
---

This is not an introductory resource for GraphQL. If you are new to GraphQL then I recommend you read through the official introduction to GraphQL [here](https://graphql.org/learn/) before continuing through the article.

Let's take a look at REST and figure out how we got here.

### REST

REST provides a simple and lightweight convention for creating APIs. Providing you with 5 components:

- An endpoint (ex. /notes)
- A CRUD method (ex. POST)
- An optional body (ex. `{ "title": "protect bojji" }`)
- Headers for authentication and identifying content types (ex. X-auth-token: Bearer eyjA2th...)
- Status codes
  - 200 for a success, 300 is still a success but it means that the endpoint was moved or aliased.
  - 400 for errors made by the client
  - 500 for internal server errors

Combining the examples above on each components It's easy to know what the request will do. At the endpoint of `notes` make a `POST`(create) request with the body of `{ "title": "protect bojji" }`. We respond with a status code of `200` if it's succesful and `400` If say the title `protect bojji` has already been taken and an optional body of `{ error: "Title has already been taken" }` to tell the client why the request failed.

<p class="lead">A simple `Request, and Response` model.</p>

This convention allowed developers to build intuitive, high-security, and performant APIs abstracting away an endpoint's implementation from its clients. This created a `clear boundary` between clients and servers. But as we'll learn later on this simplicity has its own issues.

### What changed

**Data requirements** became more strict and well-defined.

**Performance** is becoming more and more crucial as more users are using their mobile phones as their primary device a market share of 65.34% and a demand for performant applications. A short article from a Google study titled [Speed Matters](https://ai.googleblog.com/2009/06/speed-matters.html). I also have an article about [web performance](/writings/web-performance-optimizations) that covered the topic of performance in more depth.

- Large response payloads
- Network request chaining where requests only happens one after the other.
- Differing data needs for each clients
  A client might want a button to display a profile, its accounts, and its history of transactinos. This will warrant 3 roundtrips to your server. But it can be solved by responding all of those data within a single endpoint
  - How are going to name the endpoint?
  - Documentation, Testing, Caching, Security etc.
  - Not only that but say another client needs to display more things than the previous client. This would warrant another endpoint, name, documentation, testing, etc.

**Documenting and versioning** an api is still hard to implement and tedious to maintain.

A growing need for a _single source of truth_ for data where clients, servers, third-party APIs and external datasources can reliably communicate to each other.

_Arbitrary rules_ and specifications are not enough. Even a seemingly safe change can break things in production even in a well-tested codebase. Changes that could've probably prevented by a compiler that ensures data requirements before reaching production.

### GraphQL

The biggest difference GraphQL has over REST is that it allows clients to know ahead what data it can get, let the client pick what it needs, and respond with those data. It acts as a querying language for APIs.

- Strictly defines the schema of your data which acts as the single source of truth for your applications.
- A proxy for servers, clients, third party APIs, and external datasources.

- N+1 queries, pagination, lack of packages on languages other than `NodeJS` and `Go`.
  - This issues deserves an article on their own but to keep the brevity we'll just keep it here.
  - I would like to mention `Prisma` somewhere in this article but it seems to fit in here the best. Prisma is an ORM unlike any other out there. It has its own migration tool, auto type-generation, an intuitive SDL to define tables,

### Should you use GraphQL?

- Steep learning curve.
  This is an often underestimated disadvantage of using GraphQL which is why I don't see GraphQL as an off-the-shelf solution and only recommend it for projects where data requirements are strict eg. Accounting software, Ecommerce, and B2b apps.
- Requires a collaborative culture within the team. Common issues I watch out to avoid dead-communication.
  1. Timezone
  2. work hour difference
  3. language barrier.

Most developers associate themselves as being a frontend or a backend. In practice, GraphQL makes this separation blurry. A Frontend-centered API thins out the backend's responsibility. Mostly by splitting the work on the API by 50/50. It is advised for Frontends to be able to work on the language of choice in the Backend as this will save a lot of time for iterating in development.

### Solutions

- Realtime
  - Subscriptions
  - Live queries (really good and easy to implement)
- Caching
  - Hard regardless of api specification.
  - But tools offers it out of the box.
  - Normalized caching on the frontend can be a pain to deal with.
- Security
  - Query complexity
  - Rate limiting
- Documentation
  - Easier than rest but tricky to do as it's usually obvious what the operation does based on its name or is it? An common approach is to write it for someone new in the team.
  - Critical for all codebases so be mindful as this can easily be neglected.
- Testing
  - Easier if the schema is well-designed.
- Error handling
  - GraphQL allows you to have granular level of control on how you implement your handling of errors. GraphQL does not use status codes for handling errors, _controversial_ because it's a convention used for decades.
  - Can be hard to design and complexity can grow rapidly. I've linked an excellent article below covering how to design-about this.

### Designing a Schema

#### Schema-first vs Code-first

As mentioned above that when working with designing a GraphQL schema a collaboration within the team is required. In that case, Schema-first approach should always be the goto — well not quite. While it's possible to build a schema using a schema-first approach only. Sooner as your schema grows you'll find that it becomes increasingly hard to navigate and update something without causing an issue. I find the schema-first approach to be useful as a mocking tool for a quick proof-of-concept, and prototypes then use code-first to better organize resolvers and types making it easier to navigate and edit. I'd advise using a statically-typed language because errors help cut down time spent in debugging and allows developers to refactor confidently with a reasonable amount of time. Ofcourse some requirements doesn't look what they are on the surface and sometimes requires coding a requirement before seeing the problem. This is unavoidable but communication is the key here.

#### Things that can be done client-side

I know how tempting it is to do the validations and data formatting in the client-side to avoid requesting to the backend for something that can be done in the client-side. There are 3 problem with this:

- Other clients will not know about those validations.
- Changing data requirements would mean that you'd have to refactor them multiple places.
- There's no longer a source of truth.

A common practice I see for this issue is to place the validations and data formatting only in the server and only do common validations in the client-side such as the data type (number/text), required, etc.

#### Code-first schema builders

I reach out for these schema builders when starting a project with NodeJS. All of them are type-safe with great Typescript support. You can't go wrong with any of these but I've made a small section about because they're a big part in working with GraphQL and has their own nice and not-so-great things.

- Nexus
  - Has an integration with `Prisma`.
  - Favored more by the community.
- PothosQL
  - Has an integration with `Prisma`.
  - Has useful plugins. e.g Auth, Validation, Errors, and Directive plugins.
  - More maintained than nexus.
- Type-graphql
  - Uses a `Class` for defining data types in the schema.
  - Integrates well with `TypeORM` by allowing you to annotate data types for both the GraphQL Schema and Database Schema within a single class.

#### Errors

A great thing with GraphQL is that you can model everything including `errors`. An article by _Marc-Andre Giroux_ titled [A Guide to GraphQL Errors](https://productionreadygraphql.com/2020-08-01-guide-to-graphql-errors/) establishes ways to think and reason about errors in GraphQL compared to REST and also covered ways on how to customize/structure errors with their distinct advantages and disadvantages. I always read this article whenever I'm working on errors with GraphQL.

### GraphQL generators

I personally don't reach for these solutions. I much prefer to write resolvers myself for better control and to create a separation from the GraphQL schema and database schema. If you're chasing to save time in writing everything from scratch these are the tools that are out there. You'll also get some performance benefits from using them as they are written in performant languages and are optimized by default.

- [Postgraphile](https://www.graphile.org/postgraphile/)
  - Steep learning curve.
  - To have better control of the output it's favored to write everything with raw sql.
- Hasura (Haskell — but can integrate with an external server through actions)
- Graph-jin (Golang)
- App sync (AWS)
- WunderGraph. I just watched a youtube video from `Jack Herrington` I can tell that this tool can get a huge backing from the community because of its unique

### Development Tools

- [Apollo](https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm) or [Urql](https://chrome.google.com/webstore/detail/urql-devtools/mcfphkbpmkbeofnkjehahlmidmceblmm) chrome extension for inspecting responses and cache.
- [Graphql VScode extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
- [Altair](https://altair.sirmuel.design/)
- GraphQL Codegen, Envelop, and lots more from [The Guild.dev](https://www.the-guild.dev)
