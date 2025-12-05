# Telegram Mini App: User Info

This lightweight Telegram mini app displays the current user's ID, name, and username using the Telegram WebApp interface.

## Running the app

No build step is required. Serve the repository root over HTTPS or open `index.html` from Telegram's mini app hosting.

### GitHub Pages

This repository ships with a GitHub Actions workflow that publishes the static files to GitHub Pages when you push to the `main` branch.

1. In your repository settings, enable GitHub Pages using the "GitHub Actions" source option. This will create the `github-pages` environment automatically.
2. Push to `main` (or trigger the workflow manually) to build and publish the site.
3. The deployed site URL is exposed in the workflow run summary under the "github-pages" environment.

### Local development

1. Start a static file server in the repository root:
   ```bash
   python -m http.server 8000
   ```
2. Add `https://<your-ngrok-or-localtunnel-url>` in your bot's mini app settings.
3. Open the mini app inside Telegram to see your user information.

When the app runs outside Telegram, it will show an informational message explaining that user data is unavailable.
