# --- Stage 1: Build Stage (Optional, but recommended for production) ---
# Using a specific Node.js version is good practice for consistency.
# 'alpine' images are smaller, good for production.
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first.
# This allows Docker to cache the 'npm install' step.
# If these files don't change, this layer won't be rebuilt, speeding up builds.
COPY package*.json ./

# Install project dependencies.
# '--omit=dev' prevents installation of devDependencies in the final image,
# which is good for production to keep the image small.
RUN npm install --omit=dev

# Copy the rest of the application code
COPY . .

# Optional: If you have a build step (e.g., for a React/Vue frontend or TypeScript compilation)
# RUN npm run build


# --- Stage 2: Production Stage (Smaller runtime image) ---
# Use a minimal base image for the final production container.
# This image only needs the Node.js runtime, not build tools.
FROM node:20-alpine

# Set the working directory (must match the build stage if relevant paths are carried over)
WORKDIR /app

# Copy only the necessary files from the build stage
# --from=build specifies the named build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app .

# Expose the port your Node.js application listens on.
# Replace 3000 with the actual port your app uses (e.g., process.env.PORT or a hardcoded port).
EXPOSE 3000

# Define the command to run your application.
# This assumes your main application file is app.js or server.js.
# Use 'npm start' if your package.json defines a "start" script.
CMD ["node", "app.js"]