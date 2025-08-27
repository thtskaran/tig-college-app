# HTML to React conversion

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/amanjhaaiml2024-nsecacins-projects/v0-html-to-react-conversion)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/Av6J61O1CVV)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/amanjhaaiml2024-nsecacins-projects/v0-html-to-react-conversion](https://vercel.com/amanjhaaiml2024-nsecacins-projects/v0-html-to-react-conversion)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/Av6J61O1CVV](https://v0.app/chat/projects/Av6J61O1CVV)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository




.

## 🎨 Design and UI/UX

The design is based on the provided mockups and follows a clean, modern aesthetic with a focus on a red and white color scheme. The user interface is intuitive, with a clear navigation sidebar and a dashboard that provides quick access to key information.

<p align="center">
  <img src="./assets/dashboard.jpg" alt="Main Dashboard Screenshot" width="800"/>
</p>

## 🧩 Component-Based Architecture

This project is built using a component-based approach to ensure maximum reusability and maintainability. By breaking down the UI into smaller, self-contained components, we can save significant time and effort in development.

Here is a breakdown of the key reusable components and how they are used:

### 1. **Core Components**

These are the fundamental building blocks of the application.

- **`Header`**: The red navigation bar at the top of every page.
  - *Reuse:* Used on all major pages (Dashboard, Profile, Subjects, etc.).
- **`Sidebar`**: The vertical navigation menu on the left.
  - *Reuse:* Used on all pages after a successful login to provide navigation.
- **`Card`**: A flexible container with a title and content.
  - *Reuse:* Used to display subjects on the "Subjects" page, and for each data widget (Attendance, Marks, Subjects) on the "Dashboard."

### 2. **Data Visualization Components**

These components are specifically for displaying data in a graphical format. They are highly reusable and can be fed different data sets.

- **`PieChart`**: A component to visualize data as a percentage or a part of a whole.
  - *Reuse:* Used for the "Attendance" widget on the main Dashboard.
- **`BarChart`**: A component for comparing data across categories.
  - *Reuse:* Used for the "Marks" widget on the main Dashboard.
- **`LineGraph`**: A component for showing trends over time.
  - *Reuse:* Used for the "Results" widget on the main Dashboard.

### 3. **Input and Information Components**

These components handle user input and display specific types of information.

- **`ProgressBar`**: A component to show progress or completion percentage.
  - *Reuse:* Used within the `SubjectCard` component to show course completion.
- **`NotificationItem`**: A colored container to display a single notification.
  - *Reuse:* Used multiple times on the "Notifications" page to build a list.
- **`InputForm`**: A generic form component for user input.
  - *Reuse:* Used on the "Login" page and within the "Profile" page for editing personal information.

## 📂 Project Structure

A logical file structure helps in organizing components, pages, and assets.
