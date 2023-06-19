# Dockerfile

# Use an official Node.js runtime as the base image
FROM node:16-bullseye

# Set the working directory inside the container
# This is the directory that our application's code will live within
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
# These files specify the node modules that are needed for our application
COPY package*.json ./

# Install dependencies
# npm install will read the package.json file and install the specified dependencies
RUN npm install

# Copy the rest of the application files to the container
# This will include all the source code and other assets for our application
COPY . .

# Expose port 3000 to the host so the application can be accessed outside the container
EXPOSE 3000

# Specify the command to run when the container starts
# This command will start our application
CMD [ "node", "bb.js" ]
