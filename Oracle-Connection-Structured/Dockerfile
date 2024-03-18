# Use an official Node.js runtime as the base image
FROM node:20.11.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 3002

# Command to run your application
CMD ["node", "server.js"]
