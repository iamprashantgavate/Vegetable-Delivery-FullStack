# Organica - Full Stack E-commerce Project

A full-stack web application for ordering fresh vegetables online.


## Tech Stack

- Backend Framework: Spring Boot
- Frontend Framework: React.js
- Database: MySQL

## Prerequisites

To run this project locally, you need to have the following software installed:

- JDK 17

sudo apt install openjdk-17-jdk -y
java --version

- Node.js
sudo apt install -y curl build-essential
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v


- MySQL Server
   ```shell
  sudo apt update
  apt install mysql-server -y
   ```
- Git
```shell
  sudo apt install git 
  ```

## Features

- User authentication and authorization using JWT
- Product browsing and searching
- Shopping cart management
- Order placement and tracking

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/iamprashantgavate/Vegetable-Delivery-FullStack.git
   cd Vegetable-Delivery-FullStack
   ```

2. Set up the database:
   
   - cd ./init
  sudo mysql < init.sql

   

3. Application Properties

   To configure the application properties, follow these steps:

   - Open the `backend/src/main/resources/application.properties` file.

   - Configure the MySQL database connection properties by updating the following lines:

     ```
     spring.datasource.url=jdbc:mysql://localhost:3306/organica
     spring.datasource.username=admin
     spring.datasource.password=12345678
     ```


  
   - (Optional) If you want to change the server port, update the following line:

     ```
     server.port=9090
     ```

   - Save the `application.properties` file.

4. Backend Setup:

   - Navigate to the `Server` directory:

     ```shell
     cd server
     ```

   - Build and run the Spring Boot application:

     ```shell
     mvn clean package -DskipTests
     cd tartget
     java -jar organica-0.0.1-SNAPSHOT.jar &
     ```
   Test your backend at `http://localhost:9090/`
   - Expected output - Organica Demo App Running!

   The backend server should now be running now.......

5. Frontend Setup:

   - Navigate to the `Client` directory:

     ```shell
     cd Client
     ```

   - Install the dependencies:

     ```shell
     npm install
     ```

   - Start the React development server:

     ```shell
     npm start & 
     ```

   The frontend server should now be running on `http://localhost:3000`.

6. Open your web browser and visit `http://localhost:3000` to access the web application for ordering fresh vegetables online.







