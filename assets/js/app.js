let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.createElement('button');
  btn.textContent = '📲 ثبّت التطبيق';
  btn.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:12px 24px;background:#333;color:#fff;border:none;border-radius:30px;z-index:999;cursor:pointer';
  btn.onclick = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => { btn.remove(); });
  };
  document.body.appendChild(btn);
});
