# Foot Find

**Version 1.0**

Foot Find is an e-commerce platform where users can search, filter, and browse various products. The platform supports user authentication, allows admins to post products, and offers smooth animations for an enhanced user experience.

This project is built using modern web technologies such as React, GSAP, React Icons, Framer Motion, Supabase, and EmailJS.

## Features

### User Features

#### User Authentication:
- Users can sign up, log in, and log out securely with Supabase for authentication.

#### Search and Filter Products:
- Users can search products by brand name and other criteria.
- Filter products based on categories, brands, and attributes.

#### Product Browsing:
- Users can browse products in a dynamic and responsive interface, enhanced with smooth animations using GSAP and Framer Motion.

#### Email Notifications:
- EmailJS is used to send notification emails to users after successful registration or other significant actions.

### Admin Features

#### Admin Panel:
- Admins can access a dedicated panel to manage product listings.

#### Product Posting:
- Admins can post new products, update existing ones, and delete products from the platform.

## Technologies Used

- **React**: The frontend of the website is built using React, providing a dynamic and efficient single-page application.
- **GSAP (GreenSock Animation Platform)**: Used to create smooth and engaging animations for UI elements.
- **React Icons**: Provides a variety of vector icons for the website interface.
- **Framer Motion**: Implements animations and transitions to enhance the user experience with smooth page transitions and interactive effects.
- **Supabase**: Acts as the backend for user authentication, data storage, and real-time updates.
- **EmailJS**: Used for sending email notifications, including user registration confirmation and other product-related emails.

## Installation

Follow these steps to set up the project on your local machine.

### Prerequisites
Ensure you have the following installed:
- Node.js (version >= 14.x)
- npm or yarn (package managers)

### Steps to Install

1. Clone the repository:

    ```bash
    git clone https://github.com/TaiwoSoftware/foot-find.git
    ```

2. Navigate to the project directory:

    ```bash
    cd foot-find
    ```

3. Install dependencies:
   - Using npm:

     ```bash
     npm install
     ```

   - Or using yarn:

     ```bash
     yarn install
     ```

4. Set up environment variables:
   - Create a `.env` file in the root of your project.
   - Add necessary environment variables for Supabase and EmailJS. Consult their documentation for API keys.

5. Run the application locally:
   - Using npm:

     ```bash
     npm start
     ```

   - Or with yarn:

     ```bash
     yarn start
     ```

   The application will now be accessible at [http://localhost:5173](http://localhost:5173).

## Usage

### User Signup/Authentication:
- Users can sign up, log in, and manage their accounts.
- Once logged in, they can browse and purchase products.

### Admin Features:
- Admin users can log in to a separate admin panel where they can manage products by adding new items, editing existing ones, and removing outdated products.

### Search & Filters:
- Users can search for products by brand or category and apply filters to refine their results.

### Email Notifications:
- Users receive confirmation emails after registration and other relevant actions.

## File Structure

Here’s a breakdown of the project’s directory structure:

```bash
/src
  /components           # Reusable UI components like Navbar, ProductCard, etc.
  /pages                # Pages for user and admin views, like Home, Login, Admin Dashboard
  /styles               # Custom CSS or SCSS files for styling
  /utils                # Utility functions like API calls, form validation, etc.
  /assets               # Images, icons, and other assets
  /hooks                # Custom React hooks
  .env                  # Environment variables (API keys for Supabase, EmailJS)
  index.js              # Main entry point for the app
  App.js                # App component to render different pages and manage routes
