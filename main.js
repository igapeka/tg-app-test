const root = document.getElementById('content');
const tg = window.Telegram?.WebApp;

function renderUser(user) {
  const name = [user.first_name, user.last_name].filter(Boolean).join(' ');
  const username = user.username ? `@${user.username}` : '—';

  document.body.insertAdjacentHTML('beforeend',
  `
    <section><h1>${name || 'Unknown user'}</h1></section>
    <section><h1>${user.id ?? 'Unknown'}</h1></section>
    <section><h1>${username}</h1></section>
  `
  );
}

function renderError(message) {
  document.body.insertAdjacentHTML('beforeend',
    `<p style="color: white;">${message}</p>`
  );
}

function init() {
  if (!tg) {
    renderError('Telegram WebApp context not found. Open this mini app inside Telegram.');
    return;
  }

  tg.ready();
  tg.disableVerticalSwipes();
  tg.expand();
  const user = tg.initDataUnsafe?.user;

  if (user) {
    renderUser(user);
  } else {
    renderError('User data unavailable. Try reopening the mini app inside Telegram.');
  }
}

init();
