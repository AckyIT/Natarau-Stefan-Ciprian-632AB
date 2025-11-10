<?php
if (!isset($path_prefix)) 
    {
    $path_prefix = '';
    }
?>

<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="icon" type="image" href="<?php echo $path_prefix; ?>otto.jpg">
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <link rel="stylesheet" href="<?php echo $path_prefix; ?>style.css">
    
    <title><?php echo isset($page_title) ? $page_title : 'OttoShop'; ?></title>
</head>
<body class="flex flex-col min-h-screen bg-gray-100 text-gray-800">

    <header class="bg-amber-800 text-white py-4 shadow-md">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <h1 class="text-xl font-bold">OttoShop</h1>
            <nav>
                <a href="<?php echo $path_prefix; ?>main.php" class="px-3 hover:underline">Acasa</a>
                <a href="<?php echo $path_prefix; ?>cos.php" class="px-3 hover:underline">Cos</a>
                <a href="<?php echo $path_prefix; ?>donatii.php" class="px-3 hover:underline">Donatii</a>
            </nav>
        </div>

        <div class="dropdown">
            <button class="dropbtn">Caini</button>
            <div class="dropdown-content">
                <a href="<?php echo $path_prefix; ?>caini/caini_an.php">Animale</a>
                <a href="<?php echo $path_prefix; ?>caini/caini_m.php">Mancare</a>
                <a href="<?php echo $path_prefix; ?>caini/caini_ac.php">Accesorii</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Pisici</button>
            <div class="dropdown-content">
                <a href="<?php echo $path_prefix; ?>pisici/pisici_an.php">Animale</a>
                <a href="<?php echo $path_prefix; ?>pisici/pisici_m.php">Mancare</a>
                <a href="<?php echo $path_prefix; ?>pisici/pisici_ac.php">Accesorii</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Pasari</button>
            <div class="dropdown-content">
                <a href="<?php echo $path_prefix; ?>pasari/pasari_an.php">Animale</a>
                <a href="<?php echo $path_prefix; ?>pasari/pasari_m.php">Mancare</a>
                <a href="<?php echo $path_prefix; ?>pasari/pasari_ac.php">Accesorii</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Rozatoare</button>
            <div class="dropdown-content">
                <a href="<?php echo $path_prefix; ?>rozatoare/rozatoare_an.php">Animale</a>
                <a href="<?php echo $path_prefix; ?>rozatoare/rozatoare_m.php">Mancare</a>
                <a href="<?php echo $path_prefix; ?>rozatoare/rozatoare_ac.php">Accesorii</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Pesti</button>
            <div class="dropdown-content">
                <a href="<?php echo $path_prefix; ?>pesti/pesti_an.php">Animale</a>
                <a href="<?php echo $path_prefix; ?>pesti/pesti_m.php">Mancare</a>
                <a href="<?php echo $path_prefix; ?>pesti/pesti_ac.php">Accesorii</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Reptile</button>
            <div class="dropdown-content">
                <a href="<?php echo $path_prefix; ?>reptile/reptile_an.php">Animale</a>
                <a href="<?php echo $path_prefix; ?>reptile/reptile_m.php">Mancare</a>
                <a href="<?php echo $path_prefix; ?>reptile/reptile_ac.php">Accesorii</a>
            </div>
        </div>
    </header>
    <main class="flex-grow container mx-auto p-4">