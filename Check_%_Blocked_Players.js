/* BLOQUEIO DE ATAQUES */
let blockPercentage = 20 ;

/* PROGRAMAÇÃO */

let blockRatio = blockPercentage / 100;
let playerName = jQuery('#player_info tbody tr:eq(0) th').text().trim();
let playerposition = jQuery('#player_info tbody tr:eq(3) td:eq(1)').text().trim();
let playerPoints = parseInt(jQuery('#player_info tbody tr:eq(2) td:eq(1)').text().trim().replaceAll('.',''));
let playerDown = parseInt(playerPoints - (playerPoints * blockRatio));
let playerUp = parseInt(playerPoints + (playerPoints * blockRatio));

/* ICON ESQUERDA*/
let missao = `<div class="quest opened" id="player20" style="background-image: url('https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/att.png');"><div class="quest_progress"></div><div class="quest_new pt">Novo</div></div>`
$(".questlog").eq(0).prepend(missao);
let boxplayer = document.querySelector("#player20");
if (boxplayer) {
    boxplayer.addEventListener("click", loadMembro, false);
}

function loadMembro() {
    let content = `
    <h1 align=center>Jogador</h1>
    <table id="player" class="vis" align=center>
       <tr>
          <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/unit_knight.png" alt=""> Jogador</th>
          <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/att.png" alt=""> Posição</th>
          <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/att.png" alt=""> Pontos</th>
          <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/unit_sword.png" alt=""> Mínimo</th>
          <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/unit_axe.png" alt=""> Maximo</th>
       </tr>
       <tr>
          <td style="text-align: center">${playerName}</td>
          <td style="text-align: center">${playerposition}</td>
          <td style="text-align: center">${playerPoints}</td>
          <td style="text-align: center">${playerDown}</td>
          <td style="text-align: center">${playerUp}</td>
       </tr>
    </table>
    <br>
    <h1 align=center>Mínimo</h1>
    <table id="minimo" class="vis" align=center>
       <tr>
          <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/unit_knight.png" alt=""> Jogador</th>
          <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/att.png" alt=""> Pontos</th>
       </tr>
    </table>
    <br>
    <h1 align=center>Máximo</h1>
    <table id="maximo" class="vis" align=center>
       <tr>
          <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/unit_knight.png" alt=""> Jogador</th>
          <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/att.png" alt=""> Pontos</th>
       </tr>
    </table>
    `;
    Dialog.show('Supportfilter', content);

    $(".popup_box").eq(0).prepend(`<div id="progressbar" style="width: 100%; background-color: #4CAF50;"><div id="progress" style="width: 0%; height: 35px; background-color: #ffb438; text-align: center; line-height: 32px; color: black;"></div> </div>`);

    fetchPlayers();
}

function fetchPlayers(){
    const playersUrl = "https://" + window.location.host + "/map/player.txt";
    $.get(playersUrl, function (data) {
        const lines = data.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].split(",");
            const playerObject = {
                id: line[0],
                name: line[1],
                tribe: line[2],
                points: line[4]
            };
            if(playerObject.name == playerName)
                continue;
            if(playerObject.points <= playerPoints && playerObject.points >= parseInt(playerDown))
                addPlayerToTable("minimo", playerObject);
            else if(playerObject.points > playerPoints && playerObject.points <= parseInt(playerUp))
                addPlayerToTable("maximo", playerObject);
        }
    });
}

function addPlayerToTable(elemId, playerObject) {
    console.log(playerObject);
    document.getElementById(elemId).innerHTML += `
       <tr>
          <td style="text-align: center">${playerObject.name}</td>
          <td style="text-align: center">${playerObject.points}</td>
       </tr>
    `;
}
