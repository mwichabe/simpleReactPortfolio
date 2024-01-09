# Portfolio Web-based System

## Overview

This project implements a Portfolio Web-based System using Docker containers. The system showcases a list of skills and projects on the frontend, with a backend for adding or removing skills and projects.

## System Components

- **Frontend:**
  - Technology: [Specify frontend technologies/frameworks]
  - Folder: `/frontend`

- **Backend:**
  - Technology: [Specify backend technologies/frameworks]
  - Folder: `/backend`

## Setup

Follow these steps to set up and run the system locally.

1. **Clone Repository:**

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2. **Run Docker Containers:**

    ```bash
    docker-compose up -d
    ```

3. **Access the System:**

    Open a web browser and navigate to `http://localhost` to access the frontend.

## Backend API

- **Add Skill:**

    ```bash
    POST /api/skills
    ```

- **Remove Skill:**

    ```bash
    DELETE /api/skills/:id
    ```

- **Add Project:**

    ```bash
    POST /api/projects
    ```

- **Remove Project:**

    ```bash
    DELETE /api/projects/:id
    ```

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.


