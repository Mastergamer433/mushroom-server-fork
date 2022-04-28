# Mushroom Server

An open-source alternative to Firebase, which goal is to make it easy for people to set up and start developing their dream app.

This is my first open-source project so be nice!

## Run Locally

Clone the project

```bash
  git clone https://github.com/VpgMackan/mushroom-server
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. Theas are temporary and will be modifyed in the future with email smtp config and more.

`DATABASE_URL`

`JWT_SECRET`

## Todo

- Api routes for more things like WebSocket for server status storage and more.
- Clean up the database handler located at src/db/index.js
- Fix the auth handler at routes/auth
- Ad auth actions in src/auth
- Make a api request that the user can submit a js file and it stores it in the db and starts a cronjob with that file
- More to come

## API Reference

There are no real API request but will be added in the future.

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started. ( Not available yet feel free to fix it.)

I haven't selected a license but feel free to give ideas in issues .
