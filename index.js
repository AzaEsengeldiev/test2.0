document.querySelector('button').addEventListener('click', function() {
    // Собираем информацию о браузере
    console.log('User Agent:', navigator.userAgent);

    // Собираем реферер
    console.log('Referrer:', document.referrer);

    // Время нажатия
    console.log('Time:', new Date().toISOString());

    // Получаем геолокацию, если есть разрешение
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log('Latitude:', position.coords.latitude, 
                        'Longitude:', position.coords.longitude);
        });
    } else {
        console.log('Geolocation is not supported or not allowed by the user.');
    }

    // Считываем куки
    console.log('Cookies:', document.cookie);
});
