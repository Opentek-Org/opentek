# Use a base image with the desired environment
FROM nginx:latest

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the HTML file and any other static assets to the container
COPY index.html .
COPY static /usr/share/nginx/html/static

# Expose the desired port
EXPOSE 80

# Start the nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
