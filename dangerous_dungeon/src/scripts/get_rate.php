<?php
// Формирование пути к файлу рейтинга на сервере
$ratingFilePath = 'json_data/rating.json';

// Проверка наличия файла рейтинга
if (file_exists($ratingFilePath)) {
    // Чтение данных рейтинга из файла
    $ratingData = json_decode(file_get_contents($ratingFilePath), true);

    // Отправка данных рейтинга на клиентскую сторону
    header('Content-Type: application/json');
    echo json_encode($ratingData);
} else {
    // Если файл рейтинга не найден, возвращаем ошибку
    header('HTTP/1.1 500 Internal Server Error');
    echo "Ошибка: Файл рейтинга не найден.";
}
?>