# Telegram Mini App: User Info

This lightweight Telegram mini app displays the current user's ID, name, and username using the Telegram WebApp interface.

## Running the app

No build step is required. Serve the repository root over HTTPS or open `index.html` from Telegram's mini app hosting.

### Local development

1. Start a static file server in the repository root:
   ```bash
   python -m http.server 8000
   ```
2. Add `https://<your-ngrok-or-localtunnel-url>` in your bot's mini app settings.
3. Open the mini app inside Telegram to see your user information.

When the app runs outside Telegram, it will show an informational message explaining that user data is unavailable.
