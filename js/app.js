/* ========================================================================= */
/* =============================== EXECUTION =============================== */
/* ========================================================================= */

document.getElementById('main').innerHTML = `
  <h1 class="font-big">Records de vitesse terrestre</h1>

  <div class="record-card">
    <span class="record-category font-big">Voiture de série</span>
    <span class="record-category-details">Produite à au moins 30 exemplaires, non modifiée et non préparée</span>

    <div class="sentence speed">
      <span class="">
        <span class="font-enormous">490</span><span class="font-medium">.484</span>
      </span>
      <span class="font-big">km/h</span></span>
    </div>

    <span class="record-date">02 août 2019 - Andy Wallace</span>

    <div class="record-model chiron">
      <span class="model-name font-medium">Bugatti Chiron<br>Super Sport 300+</span>
    </div>
    
    <span class="font-big">1 600 ch</span>

    <span>0 à 200 km/h en 5.8 s</span>
    <span>0 à 300 km/h en 12.1 s</span>
  </div>

  <!-- --- -->

  <div class="record-card">
    <span class="record-category font-big">Street car</span>
    <span class="record-category-details">Voiture homologuée route</span>

    <div class="sentence speed">
      <span class="">
        <span class="font-enormous">500</span><span class="font-medium">.1</span>
      </span>
      <span class="font-big">km/h</span></span>
    </div>

    <span class="record-date">09 décembre 2022 - Johnny Böhmer</span>

    <div class="record-model baddgt">
      <span class="model-name font-medium">Ford GT "BADD GT"</span>
    </div>
    
    <span class="font-big">2 700 ch</span>

    <span>Roule à l'E85</span>
    <span>Daily de son proprio</span>
  </div>

  <!-- --- -->

  <div class="record-card">
    <span class="record-category font-big">Top Fuel</span>
    <span class="record-category-details">Dragster moteur arrière sans carrosserie</span>

    <div class="sentence speed">
      <span class="">
        <span class="font-enormous">545</span><span class="font-medium">.47</span>
      </span>
      <span class="font-big">km/h</span></span>
    </div>

    <span class="record-date">novembre 2022 - Brittany Force</span>

    <div class="record-model top-fuel">
      <span class="model-name font-medium">Monster Energy /<br>Flav-R-Pac Chevrolet</span>
    </div>
    
    <span class="font-big">8 000 ch</span>

    <span>0 à 160.9 km/h en 0.8 s</span>
    <span>478.0 km/h en 201.2 m</span>
    <span>entre 4 et 5.6 G à l'accéleration</span>
  </div>

  <!-- --- -->

  <div class="record-card">
    <span class="record-category font-big">Funny Car</span>
    <span class="record-category-details">Dragster moteur avant avec carrosserie</span>

    <div class="sentence speed">
      <span class="">
        <span class="font-enormous">546</span><span class="font-medium">.57</span>
      </span>
      <span class="font-big">km/h</span></span>
    </div>

    <span class="record-date">juillet 2017 - Robert Hight</span>

    <div class="record-model funny-car">
      <span class="model-name font-medium">AAA<br>Chevrolet Camaro SS</span>
    </div>
    
    <span class="font-big">10 000 ch</span>

    <span>6 G à l'accéleration</span>
  </div>

  <!-- --- -->

  <div class="record-card">
    <span class="record-category font-big">Véhicule piloté roulant au sol</span>

    <div class="sentence speed">
      <span class="">
        <span class="font-enormous">1 227</span><span class="font-medium">.985</span>
      </span>
      <span class="font-big">km/h</span></span>
    </div>

    <span class="record-date">15 octobre 1997 - Andy Green</span>

    <div class="record-model ssc">
      <span class="model-name font-medium">Thrust SSC</span>
    </div>
    
    <span class="font-big">106 000 ch</span>

    <span>16.5 m de long / 3.7 m de large / 10.6 tonnes</span>
    <span>0 à 100 km/h en 1.6 s</span>
    <span>4 850 l/100 km (18 litres/s) </span>
    <span></span>
  </div>

  <!-- --- -->

  <div class="record-card">
    <span class="record-category font-big">Vitesse terrestre</span>
    <span class="record-category-details">Par opposition à "sur l'eau" ou "dans les airs"</span>
    
    <div class="sentence speed">
      <span class="">
        <span class="font-enormous">10 385</span>
      </span>
      <span class="font-big">km/h</span></span>
    </div>

    <span class="record-date">30 avril 2003 - Holloman Air Force Base, New Mexico, USA </span>

    <div class="record-model plateform">
      <span class="model-name font-medium">Rocket sled</span>
    </div>
    

    <span>Plateforme expérimentale automatisée sur rails, équipée d'un moteur-fusée à quatre étages.</span>
    <span>Vitesse atteinte en 5.046 km</span>
    <span>Mack 8.5</span>
    <span>2.9 km/s</span>
  </div>
`;
