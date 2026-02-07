# Node.js CDA Parser

This project is a simple Node.js application that uses Amida Tech's excellent [Blue Button](https://github.com/amida-tech/blue-button) to parse Continuity of Care Documents (CCDs). It exposes an endpoint where you can POST a base64 encoded CCD (also known as CDA) and it will return the parsed CCD as JSON.  This is not a fork of their project.

## Prerequisites

- Node.js 20+
- Docker (optional)

## Installation

Clone the repository:

```bash
git clone https://github.com/pacmano1/bluebutton.git
cd <your-repository>
```

Install the dependencies:

```bash
npm install
```

Start the application:

```bash
node bluebutton_node_listener.js 
```

The server will start on `http://localhost:3000`

## Usage

POST a JSON payload to `http://localhost:3000/bb` with the following structure:

```json
{
  "cda": "<base64-encoded CDA>"
}
```

The server will respond with the parsed CDA in JSON format:

```json
{
 "cda_json": "<parsed CDA>"
}
```

## Docker

The project also contains a Dockerfile, so you can build and run the application using Docker:

```bash
docker build -t cda-parser .
docker run -p 3000:3000 cda-parser
```

The server will start on `http://localhost:3000`

## License

This project is licensed under the terms of the [MIT license](LICENSE).



