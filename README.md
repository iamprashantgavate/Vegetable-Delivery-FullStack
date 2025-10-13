# 🥦 Organica - Full Stack E-commerce Project

[![Java](https://img.shields.io/badge/Java-17-orange?logo=java)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/SpringBoot-3.1.0-brightgreen?logo=spring)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-lightblue?logo=mysql)](https://www.mysql.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

**Organica** is a full-stack web application for ordering fresh vegetables online. It provides a smooth user experience with product browsing, shopping cart, and order tracking features.

---

## 🚀 Tech Stack

- **Backend:** Spring Boot  
- **Frontend:** React.js  
- **Database:** MySQL  
- **Authentication:** JWT  
- **Build Tools:** Maven, Node.js/npm  

---

## ⚙️ Prerequisites

Before running locally, ensure the following are installed:

### 1. JDK 17
```bash
sudo apt install openjdk-17-jdk -y
java --version
```

### 2. Node.js & npm
```bash
sudo apt install -y curl build-essential
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```
### 3. MySQL Server
```bash
sudo apt update
sudo apt install mysql-server -y
```
### 4. Git
```bash
sudo apt install git -y
```

## ✨ Features
- User authentication & authorization using JWT
- Browse and search products
- Manage shopping cart
- Place and track orders

📥 Getting Started
1. Clone the repository
```bash
git clone https://github.com/iamprashantgavate/Vegetable-Delivery-FullStack.git
cd Vegetable-Delivery-FullStack
```
2. Set up the database
```bash
cd ./init
sudo mysql < init.sql
```
3. Configure Application Properties
Edit backend/src/main/resources/application.properties:

properties

spring.datasource.url=jdbc:mysql://localhost:3306/organica
spring.datasource.username=admin
spring.datasource.password=12345678

# Optional: change server port
server.port=9090
4. Backend Setup
```bash
cd Server
mvn clean package -DskipTests
cd target
java -jar organica-0.0.1-SNAPSHOT.jar &
```
Test backend at http://localhost:9090

Expected output: "Organica Demo App Running!"

5. Frontend Setup
```bash
cd Client
npm install
npm start &
Access frontend at http://localhost:3000
```
🗂 Project Structure

Vegetable-Delivery-FullStack/
├─ Client/                # React frontend
├─ Server/                # Spring Boot backend
├─ init/                  # Database scripts
└─ README.md
🔧 Future Improvements
Add user roles (admin/customer)

Integrate payment gateway

Improve responsive UI/UX

Add unit & integration tests