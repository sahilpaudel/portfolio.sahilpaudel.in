export const project = [
  {
    name: "Thyrocare Lab System Migration & Automation",
    stack: ["Java", "Spring Boot", "Kafka", "Redis", "MySQL", "AWS"],
    logo: "pharmeasy.png",
    contribution: "I led the migration of the legacy Thyrocare Lab System to a modular Spring Boot application with event-driven architecture using Kafka.",
    description: "Developed a modular Spring Boot application (lims-layer) to migrate the legacy lab system, improving sample import API P95 by ~83% (handling 80-90k samples/day). Built an automation pipeline to process analyzer results via Kafka, enabling auto-release for 33% of workloads (~2.3M parameters/week) and significantly reducing manual intervention.",
    year: 2025
  },
  {
    name: "Analyzer PDF Report Automation",
    stack: ["Java", "Spring Boot", "AWS S3"],
    logo: "pharmeasy.png",
    contribution: "I built an automation service to monitor analyzer-generated PDF reports and push them to AWS S3.",
    description: "Developed a nationwide-deployed Java application to automatically monitor, process, and upload analyzer-generated PDF reports to S3. Enabled the business team to create a premium SKU using analyzer graph reports, generating an additional revenue with zero added processing cost.",
    year: 2025
  },
  {
    name: "Result Release API Optimization",
    stack: ["Java", "Spring Boot", "Redis", "MySQL"],
    logo: "pharmeasy.png",
    contribution: "I optimized the result release process by replacing a stored procedure with a modern Spring Boot API and in-memory caching.",
    description: "Re-engineered the result release API by migrating from stored procedures to a Spring Boot-based implementation. Cached static tables in-memory to reduce P95 latency by ~69%, increasing the release limit from 300 to 700 parameters per call, with throughput of 115k per day.",
    year: 2024
  },
  {
    name: "Product Display API & Catalog Redesign",
    stack: ["NodeJS", "Koa", "Redis", "Kafka", "MySQL"],
    logo: "pharmeasy.png",
    contribution: "I was part of the Catalog Redesign team and led the migration of the Product Display API to a modular Node.js architecture.",
    description: "Developed modular Node.js Koa APIs with efficient cache fallback handling to improve Catalog API P95 response time by ~63%. Significantly improved diagnostic page load times and reduced downstream service dependencies.",
    year: 2022
  },
  {
    name: "Omnicron (Elasticsearch Cron)",
    stack: ["Python", "Kafka", "NodeJS", "Redis"],
    logo: "pharmeasy.png",
    contribution: "I was responsible for building the consumer end and process, encrich and push the data to the Elasticsearch index and sync the live table once the data is ingested.",
    description: "The idea was to push the MySQL DB data into Elasticsearch to reduce the DB queries and search feasibility from the web application. We had 2 components in this project, the producer which pulls all the items from an API that needs to processed and pushed into the queue and the consumer which I was responsible to build, it gets the item is and type, and it will a certain API which we have created that queries the database and return the response, the response is cached in redis to improve response time and reduce db hits. Once the consumer gets the item details, it transforms the data as required in this case create ES documents based on pincode serviceability. The process earlier use to take 8-9 hours, now it gets completed in ~ 1.5 hours and also we have update individual item details in the ES which was not available earlier.",
    year: 2022
  },
  {
    name: "Oracle (Q/A)",
    stack: ["Go", "Kafka", "React", "Ant Design"],
    logo: "pharmeasy.png",
    description: "Oracle is a service that handles all the customer queries about any product that is listed in the PharmEasy website",
    contribution: "I was responsible for building the backend in Go where I wrote CRUD APIs for question and answer. Also wrote integrated various other clients for enhance the current product such as SMS api to send message when the question is answered, used Kafka to process answer queues etc. I built the admin dashboard where the doctors can view the list of questions and answer them accordingly, I mentored a fellow intern during this project.",
    year: 2021
  },
  {
    name: "Cull - A/B Testing UI Dashboard",
    stack: ["Go", "MongoDB", "React", "Material-UI"],
    logo: "pharmeasy.png",
    description: "Cull is an A/B testing platform for identifying non deterministic features that are best suited for a given set of audience.",
    contribution: "Worked on the dashboard creation for Cull using ReactJS with few contribution towards backend using Go. I was completely responsible for building the UI dashboard from scratch. Used Material-UI for react as the css design framework and gained fair bit of knowledge on how to create a responsive UI using it.",
    year: 2020
  },
  {
    name: "Cyborg - Data Spec Validation Tool",
    stack: ["Spring Booot", "MongoDB", "ReactJS", "Material-UI"],
    logo: "yodlee.png",
    description: "Cyborg is a validation application backend built in Spring Boot with MongoDB for data persistance and ReactJS for the visual dashboard. It has the capability to validate whether the response from a financial institution is compliant with the Open Banking standard or not. As Open Banking standard has various version viz. v3.0, v3.1.2 or v3.1.2 and so on, and all financial institute must send there data response in the format specified by Open Banking Standard corresponding to these versions. So, we as a financial aggregator we built a layer that would validate the response before we persist the data. MongoDB is used to store the version mapping and format specs for each version. Dashboard is used for manual validation. Also Cyborg can provide analysis and compare the fields that we were getting from the webpage with that of the data we are getting in the response.",
    contribution: "To build the whole data spec validation tool (Cyborg) both frontend as well as the backend as an individual contributor.",
    year: 2019
  },
  {
    name: "Page As Response (PAR)",
    stack: ["Core Java", "Vanilla JavaScript", "Selenium"],
    logo: "yodlee.png",
    description: "Page As Response is a technique where we don't fetch whole web content such as css, js and other media files while scrapping a webpage. We analyze the websites behavior and pick network call(s) that sends the required web data and make that request using JavaScriptExecutor in Selenium to mimick the request and fetch the response as a text instead of whole webpage, that we get while loading a web url using selenium and chrome driver.",
    contribution: "I alongwith my team lead sort of invented this technique when we observed huge number of failures while scrapping web data due to page load issues and page load timeouts. Earlier we were facing an long running issue for a bank site where the bank page was not loading even after numerous wait and timeouts, also increasing the latency of the script to 200-220 secs per request where complete data was fetched. But with this PAR technique we were able to reduce the latency to 40-45 secs at max and that was a huge infrastructural gain",
    year: 2019
  },
]
