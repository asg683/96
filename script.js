document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.blue-screen').classList.add('hidden');
    document.querySelector('.transition-screen').classList.remove('hidden');
  }, 10000);
});
