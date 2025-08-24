# Client-Admin Camera Stream

## Description
A simple Node.js project to stream a client's camera to an admin page.

- Client page shows a Google image.
- Requests camera automatically.
- Sends camera feed to admin page.
- Admin page shows live client camera feed.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open in browser:
- Client: `http://localhost:3000/client.html`
- Admin: `http://localhost:3000/admin.html`

## Notes
- Works with multiple clients broadcasting to admin.
- Can be extended to record video for offline viewing.