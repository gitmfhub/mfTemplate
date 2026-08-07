const CACHE = 'mftemplate-v1';
const FILES = [
  '/mftemplate/',
  '/mftemplate/index.html',
  '/mftemplate/assets/css/style.css', // عدل المسار حسب ملفاتك
  '/mftemplate/assets/js/app.js'      // أنشئ هذا الملف لاحقاً
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
