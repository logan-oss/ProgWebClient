<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="JS/script.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/css/style.css">
    <title>Informations villes</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-ls navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TD5 Recherche de communes</a>
      </div>
    </nav>
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <select class="form-select" onchange="addDptd()" aria-label="Régions" id="rgs"></select>
        </div>
        <div class="col">
          <select class="form-select" onchange="addComm()"  aria-label="Departements" id="dpt"></select>
        </div>
        <div class="col">
          <select class="form-select" onchange="showCommTable()" aria-label="Communes" id="comm"></select>
        </div>
      </div>
    </div>

<div class="container-sm mt-5">
  <p id="population">Population : </p>
</div>


  <div class="container-sm mt-2">
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>Nom</th>
          <th>Code Postal</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody id="tableVille">
      </tbody>
    </table>
  </div>
  </body>
</html>
