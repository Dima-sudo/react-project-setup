# Use a multi-stage build for optimization
# Build stage
FROM node:16.20.1-alpine3.18 AS build

# Set the working directory for the build stage
WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy application source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:1.21.3-alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy built artifacts from the build stage output
COPY --from=build /app/dist .

# Clean up source code
RUN rm -rf /app/*

# Expose the port on which the app will run (default 80 for Nginx)
EXPOSE 80

# Add metadata to the image
LABEL org.opencontainers.image.title="Firewall Optimizer"
LABEL org.opencontainers.image.description="Firewall Optimizer prod served by Nginx"
LABEL org.opencontainers.image.authors="Dima Borodin <diborodin@deloitte.co.il>"
LABEL org.opencontainers.image.maintainer="Dima Borodin <diborodin@deloitte.co.il>"
LABEL org.opencontainers.image.version="1.0"
LABEL org.opencontainers.image.vendor="Deloitte"
LABEL org.opencontainers.image.url="https://localhost:8080"
LABEL org.opencontainers.image.documentation="TBD"

# Placeholder for licensing information
LABEL org.opencontainers.image.licenses="TBD - Refer to the software documentation"
