const root = document.getElementById('content');
const tg = window.Telegram?.WebApp;

function renderUser(user) {
  const name = [user.first_name, user.last_name].filter(Boolean).join(' ');
  const username = user.username ? `@${user.username}` : '—';

  root.innerHTML = `
    <div>
      <div class="label">Name</div>
      <div class="value">${name || 'Unknown user'}</div>
    </div>
    <div>
      <div class="label">User ID</div>
      <div class="value">${user.id ?? 'Unknown'}</div>
    </div>
    <div>
      <div class="label">Username</div>
      <div class="value">${username}</div>
    </div>
  `;
}

function renderError(message) {
  root.innerHTML = `<p class="muted">${message}</p>`;
}

function init() {
  if (!tg) {
    renderError('Telegram WebApp context not found. Open this mini app inside Telegram.');
    return;
  }

  tg.ready();
  tg.expand();
  const user = tg.initDataUnsafe?.user;

  if (user) {
    renderUser(user);
  } else {
    renderError('User data unavailable. Try reopening the mini app inside Telegram.');
  }
}

init();
