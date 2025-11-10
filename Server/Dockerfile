# ---------- Stage 1: Build ----------
FROM maven:3.9.6-eclipse-temurin-17 AS builder

WORKDIR /app

# Copy only dependency files first (for better caching)
COPY pom.xml .
RUN mvn -B dependency:go-offline

# Copy source code
COPY src ./src

# Build without tests
RUN mvn -B clean package -DskipTests


# ---------- Stage 2: Runtime ----------
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copy JAR from builder stage
COPY --from=builder /app/target/organica-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 9090
# Use a non-root user for security
RUN addgroup -S spring && adduser -S spring -G spring
USER spring

<<<<<<< HEAD
# Run the app
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
=======
# Use a non-root user for security
RUN addgroup -S spring && adduser -S spring -G spring
USER spring

# Run the app
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

>>>>>>> 6c32020 (variablized frontend and backend)
