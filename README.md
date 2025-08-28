# GitHub Repositories Wiki

A simple React app to view GitHub users and their repositories.

## Description

This project allows you to:

- Search for a GitHub user by username.
- Display the user's profile information including:
  - Avatar
  - Name
  - Login
  - Bio
- List all repositories of the user, showing:
  - Repository name
  - Repository description

The app fetches data directly from the **GitHub API** and displays it in a clean, minimal interface.

## Demo
<img width="1577" height="877" alt="demo" src="https://github.com/user-attachments/assets/43328b9e-b096-4239-9228-cf859e8c0f4d" />

Check it out on GitHub Pages:  
[https://viniciusd1810.github.io/github-repositories-wiki/](https://viniciusd1810.github.io/github-repositories-wiki/)

## Features

- React functional components with Hooks.
- Dynamic fetching of GitHub user data.
- Responsive and simple UI.
- Repository list with clickable titles (optional enhancement).

## Installation

```bash
git clone https://github.com/Viniciusd1810/github-repositories-wiki.git
cd github-repositories-wiki
npm install
npm start
```

Deployment

This project can be deployed using GitHub Pages:
```
npm run build
npx gh-pages -d build
