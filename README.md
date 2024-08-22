# Web App Assignment

This project is a functional web application built using React, Tailwind CSS, and Vite. It implements a login page, data fetching, keyboard shortcuts, a custom text editor, reply functionality, and support for both light and dark modes as per the assignment instructions.

## Features

1. **Login Page**: Users can log in using the provided design.
2. **Onebox Screen**: After logging in, users are redirected to the Onebox screen.
3. **Data Fetching**: Integrates APIs for fetching data using the following endpoints:
   - `GET /onebox/list`
   - `GET /onebox/:thread_id`
   - `DELETE /onebox/:thread_id`
4. **Keyboard Shortcuts**: 
   - Pressing "D" deletes a thread.
   - Pressing "R" opens the reply box.
5. **Custom Text Editor**: A text editor with custom buttons for "SAVE" and "Variables".
6. **Reply Functionality**: Users can send replies using the endpoint:
   - `POST /reply/:thread_id`
   - Payload: `{from: “email”, to:”email”, “subject”: “”, “body”: “<html></html>”}`
7. **Light and Dark Mode**: Supports both light and dark themes.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Install dependencies**:

   ```bash
   npm install
3. **To start the development server**:
   ```bash
   npm run dev
4.**To build the app for production**:
   ```bash
     npm run build


