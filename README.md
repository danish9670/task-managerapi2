# Task Manager REST API

A robust and scalable REST API for managing tasks with user authentication, built with Node.js, Express.js, and MongoDB.

## 🚀 Features

- **User Authentication**: JWT-based authentication with secure registration and login
- **Task Management**: Full CRUD operations for tasks with user isolation
- **Security**: Password hashing with bcrypt, protected routes, and input validation
- **Database**: MongoDB with Mongoose ODM for efficient data management
- **Error Handling**: Comprehensive error handling and validation
- **API Documentation**: Well-documented endpoints with examples

## 📁 Project Structure

```
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   ├── authController.js   # Authentication logic
│   └── taskController.js   # Task management logic
├── middleware/
│   └── auth.js            # JWT authentication middleware
├── models/
│   ├── user.js            # User data model
│   └── task.js            # Task data model
├── routes/
│   ├── auth.js            # Authentication routes
│   └── tasks.js           # Task management routes
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd task-manager-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
NODE_ENV=development
```

### 4. Start the Application
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## 🔌 API Endpoints

### Authentication Routes
| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/api/auth/register` | Register a new user | `name`, `email`, `password` |
| `POST` | `/api/auth/login` | Authenticate user | `email`, `password` |

### Task Management Routes (Protected)
| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/api/tasks` | Create a new task | `title`, `description` (optional) |
| `GET` | `/api/tasks` | Get all user tasks | - |
| `GET` | `/api/tasks/:id` | Get specific task | - |
| `PUT` | `/api/tasks/:id` | Update task | `title`, `description` (optional) |
| `DELETE` | `/api/tasks/:id` | Delete task | - |

## 📝 API Usage Examples

### User Registration
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

### User Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

### Create Task (Authenticated)
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Complete project documentation",
    "description": "Write comprehensive API documentation"
  }'
```

### Get All Tasks
```bash
curl -X GET http://localhost:5000/api/tasks \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔒 Security Features

- **Password Hashing**: Bcrypt with salt rounds for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **Route Protection**: Middleware to protect sensitive endpoints
- **Input Validation**: Request validation and sanitization
- **Error Handling**: Secure error responses without exposing sensitive information

## 📦 Dependencies

### Production Dependencies
- `express`: Web framework for Node.js
- `mongoose`: MongoDB object modeling tool
- `bcryptjs`: Password hashing library
- `jsonwebtoken`: JWT implementation
- `dotenv`: Environment variable management
- `cors`: Cross-origin resource sharing

### Development Dependencies
- `nodemon`: Auto-restart server during development

## 🚀 Deployment

### Environment Variables for Production
```env
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
PORT=process.env.PORT
NODE_ENV=production
```

### Deployment Platforms
- **Render**: Connect GitHub repo and set environment variables
- **Railway**: One-click deployment with automatic environment setup
- **Heroku**: Add MongoDB addon and configure environment variables
- **Vercel**: Serverless deployment with environment configuration

## 🧪 Testing

### Manual Testing
Use tools like:
- Postman
- Insomnia
- cURL commands
- Thunder Client (VS Code extension)

### Automated Testing (Future Enhancement)
```bash
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Issues

- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check this README for common solutions
- **Community**: Join discussions in the project repository

## 🔮 Future Enhancements

- [ ] User profile management
- [ ] Task categories and tags
- [ ] Task priority levels
- [ ] Due dates and reminders
- [ ] File attachments
- [ ] Team collaboration features
- [ ] Real-time notifications
- [ ] API rate limiting
- [ ] Comprehensive testing suite
- [ ] Docker containerization

---

**Built with ❤️ using Node.js, Express, and MongoDB**
