URL Shortener Application with authentication (Back End)
</br></br>
Design a complete authentication system of Login, Registration, Forgot Password.
</br>
To test your authentication system using Postman, you'll need to follow these steps for each endpoint (Registration, Login, Forgot Password, and Reset Password). Here’s how you can test each functionality:
</br></br>

1. Registration
   Endpoint: POST /api/users/register</br>
   </br>
   Request Body:</br>
   </br>
   {</br>
   "email": "testuser@example.com",</br>
   "firstName": "John",</br>
   "lastName": "Doe",</br>
   "password": "password123"</br>
   }</br>
   </br>
   Expected Response: </br>
   A message indicating successful registration, e.g., {"msg": "User registered successfully"}.
   </br>
2. Login</br>
   Endpoint: POST /api/users/login</br>
   </br>
   Request Body:</br>
   </br>
   {</br>
   "email": "testuser@example.com",</br>
   "password": "password123"</br>
   }</br>
   </br>
   Expected Response:</br>
   A JSON object containing the JWT token, e.g., {"token": "your_jwt_token_here"}.
   </br>
3. Forgot Password</br>
   Endpoint: POST /api/users/forgot-password</br>
   </br>
   Request Body:</br>
   </br>
   {</br>
   "email": "testuser@example.com"</br>
   }</br>
   </br>
   Expected Response: </br>
   A message indicating that an email was sent, e.g., {"msg": "Email sent"}.
   </br>
   Note: Check the email inbox for the password reset link.</br>
   </br>
4. Reset Password</br>
   Endpoint: POST /api/users/reset-password/:resetToken</br>
   </br>
   Request Body:</br>
   </br>
   {</br>
   "password": "newpassword123"</br>
   }</br>
   </br>
   Enter your endpoint URL, e.g., http://localhost:3000/api/users/reset-password/resetTokenHere.
   </br>
   Expected Response: </br>
   A message indicating successful password reset, e.g., {"msg": "Password reset successful"}.</br>
   </br>
   </br>

# Backend File Structure

</br>
1. server.js (Main Server File)</br>
2. config/db.js (Database Connection)</br>
3. middleware/auth.js (Authentication Middleware)</br>
4. routes/users.js (User Routes)</br>
5. .env (Environment Variables)</br>
