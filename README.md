# Talkify

This project is a simple  chat application built with React. Users can enter their names, connect to a WebSocket server, send and receive messages, and see the count of connected users.

## Features

- User name entry screen with background image
- Real-time message sending and receiving via WebSocket
- Display of connected users count
- Sign out functionality

## Setup

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/websocket-chat-ui.git
    cd websocket-chat-ui
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory to specify environment variables. For example:

    ```plaintext
    REACT_APP_WEBSOCKET_URL=
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. When you open the application, you will be prompted to enter your name.
2. After entering your name, you will be connected to the WebSocket server.
3. You can send messages using the input box at the bottom of the chat window.
4. You can see the number of connected users in the top bar.
5. To sign out, click the "Sign Out" button.

## Folder Structure

```
project-folder/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── Spinner.tsx
│   │   └── ...
│   ├── img.jpg
│   ├── index.tsx
│   └── ...
├── .env
├── package.json
└── ...
```

## Customization

### Changing the Background Image

To change the background image on the user name entry screen, replace `img.jpg` in the `src` folder with your own image and update the `App.css` file if necessary.

### WebSocket URL

The WebSocket server URL is specified in the `.env` file. Make sure to update `REACT_APP_WEBSOCKET_URL` to point to your WebSocket server.

## Deployment

To build the application for production, run:

```bash
npm run build
```

The build folder will contain the optimized production build of your application. You can deploy it to a web server or a static hosting service.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

Feel free to update the repository URL and any other details specific to your project.

# WebSocket Chat UI

This project is a simple WebSocket-based chat application built with React. Users can enter their names, connect to a WebSocket server, send and receive messages, and see the count of connected users.

## Features

- User name entry screen with background image
- Real-time message sending and receiving via WebSocket
- Display of connected users count
- Sign out functionality

## Setup

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/websocket-chat-ui.git
    cd websocket-chat-ui
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory to specify environment variables. For example:

    ```plaintext
    REACT_APP_WEBSOCKET_URL=wss://vibecheck-k5o9.onrender.com
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. When you open the application, you will be prompted to enter your name.
2. After entering your name, you will be connected to the WebSocket server.
3. You can send messages using the input box at the bottom of the chat window.
4. You can see the number of connected users in the top bar.
5. To sign out, click the "Sign Out" button.

## Folder Structure

```
project-folder/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── Spinner.tsx
│   │   └── ...
│   ├── img.jpg
│   ├── index.tsx
│   └── ...
├── .env
├── package.json
└── ...
```

## Customization

### Changing the Background Image

To change the background image on the user name entry screen, replace `img.jpg` in the `src` folder with your own image and update the `App.css` file if necessary.

### WebSocket URL

The WebSocket server URL is specified in the `.env` file. Make sure to update `REACT_APP_WEBSOCKET_URL` to point to your WebSocket server.

## Deployment

To build the application for production, run:

```bash
npm run build
```

The build folder will contain the optimized production build of your application. You can deploy it to a web server or a static hosting service.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

Feel free to update the repository URL and any other details specific to your project.
