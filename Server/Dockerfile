FROM maven:3.9.6-eclipse-temurin-17 AS build

# Set working directory inside the container
WORKDIR /app

# Copy pom.xml and download dependencies first (for caching)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy all project files
COPY . .

# Build the project and create JAR
RUN mvn clean package -DskipTests

# ---------- Stage 2: Run the application ----------
FROM openjdk:17-oracle

# Set working directory
WORKDIR /app

# Copy the built JAR from the previous stage
COPY --from=build /app/target/organica-0.0.1-SNAPSHOT.jar myapp.jar

# Expose the port your Spring Boot app runs on
EXPOSE 9090

# Run the JAR
CMD ["java", "-jar", "myapp.jar"]
