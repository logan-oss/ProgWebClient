<!DOCTYPE html>
<html lang="en" dir="ltr" class="h-100">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="JS/meteo.js"></script>
    <script type="text/javascript" src="JS/weatherImgAnimation.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <title>Meteo</title>
  </head>
  <body class="h-100">
    <nav class="navbar navbar-expand-ls navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TD5 Météo</a>
      </div>
    </nav>

  <div class="spacing">
    <div class="image-weather" id="image-weather" style="">
    </div>
    <div class="info spacing">
      <h2 class="block" id="ville"></h2>
      <ul class="list-unstyled" style="font-size:20px">
        <li id="ressenti"></li>
        <li id="humidite">Humidité : </li>
        <li id="temp">température : </li>
        <li id="tempMax">Température maximale : </li>
        <li id="tempMin">Température minimale : </li>
      </ul>
    </div>
  </div>

  </body>
</html>
