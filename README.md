# File Metadata Microservice

FreeCodeCamp Back End Development and APIs Project

[Task](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice)

[My work](https://fcc-file-metadata-sifx.onrender.com)

## How To Run

1. Install dependencies

```bash
$ npm install
```

2. Start server

```bash
  $ npm run dev
```

## Endpoints

1. _POST_ `/api/fileanalyse`

   Response example:

   ```json
   {
     "name": "test.gif",
     "type": "image/gif",
     "size": 2412730
   }
   ```
