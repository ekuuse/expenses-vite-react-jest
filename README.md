# expenses-vite-react-jest

<h2>Testimisplaan</h2>

<p>Alljärgnev testimisplaan katab kogu Expenses rakenduse põhifunktsionaalsuse. Testimine on tehtud kasutades <strong>Jest</strong> ja <strong>React Testing Library</strong>.</p>
<p>Testimisplaan on koostatud vastavalt olemasolevatele testidele ja funktsionaalsusele.</p>

<table>
  <thead>
    <tr>
      <th>Testi nr</th>
      <th>Funktsionaalsus</th>
      <th>Miks testida</th>
      <th>Oodatav tulemus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><code>Expense'i loomine</code></td>
      <td>Kontrollida, et uus kulutus lisatakse õigesti</td>
      <td>Uus kulutus kuvatakse nime ja hinnaga ekraanil</td>
    </tr>
    <tr>
      <td>2</td>
      <td><code>2024. aasta filter</code></td>
      <td>Kontrollida, et 2024. aasta kulutus ei kuvata 2023 aasta filtriga</td>
      <td>2024. aasta kulutus ei ole nähtav, kui on valitud 2023 aasta filter</td>
    </tr>
    <tr>
      <td>3</td>
      <td><code>2024. aasta kulutuse leidmine pärast filtri vahetamist</code></td>
      <td>Kontrollida, et 2024. aasta kulutus kuvatakse pärast aasta vahetamist</td>
      <td>2024. aasta kulutus kuvatakse, kui filter on vahetatud 2024. aastale</td>
    </tr>
    <tr>
      <td>4</td>
      <td><code>Kulutuse muutmine</code></td>
      <td>Kontrollida, et kulutuse muudatused (nagu pealkirja või hinna muutmine) salvestatakse õigesti</td>
      <td>Muudetud kulutuse pealkiri ja hind kuvatakse õigesti</td>
    </tr>
    <tr>
      <td>5</td>
      <td><code>Vigase sisendi veateated</code></td>
      <td>Kontrollida, et vigase sisendi puhul (nt vale hind või kuupäev) kuvatakse veateade</td>
      <td>Kuvatakse veateade "Palun sisesta kehtiv pealkiri, hind või kuupäev"</td>
    </tr>
    <tr>
      <td>6</td>
      <td><code>Kulutuse kustutamine</code></td>
      <td>Kontrollida, et kulutust saab kustutada</td>
      <td>Kulutust ei kuvata pärast kustutamist</td>
    </tr>
  </tbody>
</table>

<p>Testfailid asuvad kaustas <code>/__tests__/</code> või komponentide kõrval. Kõik testid on käivitatavad käsuga <code>npm test</code>.</p>
</table>

<p>Testfailid asuvad kaustas <code>/__tests__/</code> või komponentide kõrval. Kõik testid on käivitatavad käsuga <code>npm test</code>.</p>
