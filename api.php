<?php 
    header('Content-Type: application/json');
    require_once 'db.php';
    $metoda= $_SERVER['REQUEST_METHOD'];
    if($metoda==='POST')
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        $sql = "INSERT INTO studenti (nume, an, media) VALUES (:nume, :an, :media)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute
        ([
            ':nume' => $data['nume'],
            ':an' => $data['an'],
            ':media' => $data['media']
        ]);
    }
    elseif($metoda==='GET')
    {
        $sql = "SELECT * FROM studenti";
        $stmt = $pdo->query($sql);
        $studenti = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($studenti);
    }
?>