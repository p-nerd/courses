<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo</title>
    <style>
        body {
            display: grid;
            place-items: center;
            height: 100vh;
            margin: 0;
            font-family: sans-serif;
        }

        a {
            color: #268bd2;
            text-decoration: none;
        }

        a:hover {
            color: #2aa198;
        }

        a:active {
            color: #cb4b16;
        }
    </style>
</head>

<body>
<h1>
    <?php
    $directory = "./"; // Set the directory path

    // Get all items (files and folders) in the directory
    $items = glob($directory . '*');

    // Separate folders and files
    $folders = array_filter($items, 'is_dir');
    $files = array_diff($items, $folders);

    // Display folders as links
    foreach ($folders as $folder) {
        echo "<a href='$folder'>$folder</a><br/>"; // Display the folder name as a link
    }

    // Display files as links
    foreach ($files as $file) {
        echo "<a href='$file'>$file</a><br/>"; // Display the file name as a link
    }
    ?>
</h1>
</body>

</html>