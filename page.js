// Сохраняем URL текущей страницы в localStorage перед выгрузкой страницы
window.addEventListener('beforeunload', function(event) {
    localStorage.setItem('lastVisitedPage', window.location.href);
  });
  
  // Получаем последнюю посещенную страницу из localStorage при запуске приложения
  var lastVisitedPage = localStorage.getItem('lastVisitedPage');
  
  // Если значение присутствует, перенаправляем пользователя на эту страницу
  if (lastVisitedPage) {
    window.location.href = lastVisitedPage;
  }
  