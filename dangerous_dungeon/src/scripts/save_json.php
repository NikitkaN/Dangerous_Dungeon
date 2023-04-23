<?php
// Получение IP-адреса пользователя
$userIP = $_SERVER['REMOTE_ADDR'];

// Генерация имени на основе IP-адреса
$generatedName = 'user_' . str_replace('.', '_', $userIP);

// Формирование пути к файлу JSON на сервере
$jsonFilePath = 'json_data/' . $generatedName . '.json'; // Здесь предполагается, что файлы JSON будут сохраняться в папке 'json_data/' с именем, сгенерированным на основе IP-адреса

// Проверка наличия данных от клиента
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['data'])) {
    // Получение данных от клиента
    $jsonData = $_POST['data'];

    // Сохранение данных в JSON-файле
    file_put_contents($jsonFilePath, $jsonData);

    // Разбор данных JSON
    $data = json_decode($jsonData, true);

    // Добавление статистики прохождения игры в рейтинг
    $statistic = array(
        'name' => $generatedName,
        'score' => $data['score'],
        'timestamp' => time()
    );
    $ratingFilePath = 'json_data/rating.json'; // Путь к файлу рейтинга игроков
    $ratingData = json_decode(file_get_contents($ratingFilePath), true); // Получение текущих данных рейтинга
    $ratingData[] = $statistic; // Добавление статистики текущего игрока в рейтинг
    usort($ratingData, function($a, $b) { // Сортировка рейтинга по убыванию очков
        return $b['score'] - $a['score'];
    });
    file_put_contents($ratingFilePath, json_encode($ratingData)); // Сохранение обновленных данных рейтинга

    // Отправка ответа на клиентскую сторону
    echo "Данные успешно сохранены.";
} else {
    // Если данные от клиента не найдены, возвращаем ошибку
    header('HTTP/1.1 400 Bad Request');
    echo "Ошибка: Данные от клиента не найдены.";
}
?>