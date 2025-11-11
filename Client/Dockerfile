# ---------- Stage 1: Build ----------
FROM node:16-alpine AS builder

WORKDIR /app

# Copy only package files first (to leverage Docker cache)
COPY package*.json ./

# Install only production dependencies if build doesn't need devDeps
RUN npm ci

# Copy rest of the project files
COPY . .

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
RUN echo "Building with backend: $REACT_APP_BACKEND_URL"

# Build the app
RUN npm run build


# ---------- Stage 2: Serve ----------
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

