# Task Manager REST API

A complete REST API for managing tasks with user authentication, built with Node.js, Express.js, and MongoDB.

## 🚀 Features

- **User Authentication**: JWT-based authentication with registration and login
- **Task Management**: Full CRUD operations for tasks
- **Security**: Password hashing with bcrypt, protected routes
- **Validation**: Input validation and error handling
- **MongoDB**: NoSQL database with Mongoose ODM

## 📁 Project Structure

```
task-manager-api/
├── config/
│   └── db.js
├── middleware/
│   └── auth.js
├── models/
│   ├── user.js
│   └── task.js
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── routes/
│   ├── auth.js
│   └── tasks.js
├── server.js
├── package.json
└── README.md
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd task-manager-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `env.example` to `.env`
   - Update the values:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```

4. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Tasks (Protected Routes)
- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - Get all user tasks
- `GET /api/tasks/:id` - Get task by ID
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 📝 Usage Examples

### Register a new user
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Create a task (with auth token)
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Complete project documentation"
  }'
```

## 🚀 Deployment

### Render
1. Connect your GitHub repository
2. Set environment variables in Render dashboard
3. Deploy automatically on push

### Railway
1. Connect your GitHub repository
2. Add environment variables
3. Deploy with one click

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Input validation
- Error handling

## 📦 Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **dotenv**: Environment variables
- **nodemon**: Development server (dev dependency)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions, please open an issue on GitHub.
