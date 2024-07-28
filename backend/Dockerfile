# Use a lightweight base image
FROM golang:1.21-alpine AS builder

# Set the working directory
WORKDIR /

# Copy go module files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the rest of the application code
COPY . .

# Change the working directory to the application directory
WORKDIR /app

# Build the application
RUN go build -o main

# Use a smaller base image for the final image
FROM alpine:latest

# Copy the built binary from the builder stage
COPY --from=builder /app/main /app/

# Create .env file
COPY .env .env

# Load environment variables
RUN echo ".env" >> /etc/profile.d/env.sh && \
    source .env >> /etc/profile.d/env.sh

# Expose the port your application listens on (replace with your actual port)
EXPOSE 8000

# Command to run when the container starts
CMD ["./app/main"]
