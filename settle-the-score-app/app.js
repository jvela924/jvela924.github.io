
$('#form1').on('submit', (event)=> {
  event.preventDefault();
  let $userInput = $('#player1').val();
  console.log($userInput);
  let $season = $('#season1')
  if ($season.val()==="") {
    $season=2018
  } else {
    $season = $season.val()
  }
  $.ajax({
    url:'https://www.balldontlie.io/api/v1/players?search=' + $userInput
  }).then(
    (data)=>{
        $('.player1Name').html((data.data[0].first_name) + " " + (data.data[0].last_name))
        $('.player1Team').html(data.data[0].team.full_name)
        addLogo()
        let playerID = (data.data[0].id)
        console.log(data.data[0].first_name);
        $.ajax({
          url:'https://www.balldontlie.io/api/v1/season_averages?season=' + $season + '&player_ids[]=' + playerID
        }).then(
          (data)=>{
            $('.player1Gp').text(data.data[0].games_played)
          }),
          ()=>{
              console.log('bad');
          }
    }),
    ()=>{
        console.log('bad');
  }
})

$('#form2').on('submit', (event)=> {
  event.preventDefault();
  let $userInput = $('#player2').val();
  console.log($userInput);
  let $season = $('#season2')
  if ($season.val()==="") {
    $season=2018
  } else {
    $season = $season.val()
  }
  $.ajax({
    url:"https://www.balldontlie.io/api/v1/players?search=" + $userInput
  }).then(
    (data)=>{
        $('.player2Name').text((data.data[0].first_name) + (data.data[0].last_name))
        let playerID = (data.data[0].id)
        console.log(data.data[0].first_name);
        $.ajax({
          url:"https://www.balldontlie.io/api/v1/season_averages?player_ids[]=" + playerID
        }).then(
          (data)=>{
            $('.player2Gp').text(data.data[0].games_played)
          }),
          ()=>{
              console.log('bad');
          }
    }),
    ()=>{
        console.log('bad');
  }
})

let $teamLogo = ["http://content.sportslogos.net/logos/6/220/thumbs/22091682016.gif", "http://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif", "http://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif", "http://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif", "http://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif", "http://content.sportslogos.net/logos/6/222/thumbs/22269212018.gif", "http://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif", "http://content.sportslogos.net/logos/6/229/thumbs/22989262019.gif", "http://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif", "http://content.sportslogos.net/logos/6/235/thumbs/23531522020.gif", "http://content.sportslogos.net/logos/6/230/thumbs/23068302020.gif", "http://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif", "http://content.sportslogos.net/logos/6/236/thumbs/23654622016.gif", "http://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif", "http://content.sportslogos.net/logos/6/231/thumbs/23143732019.gif", "http://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif", "http://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif", "http://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif", "http://content.sportslogos.net/logos/6/4962/thumbs/496226812014.gif", "http://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif", "http://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif", "http://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif", "http://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif", "http://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif", "http://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif", "http://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif", "http://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif", "http://content.sportslogos.net/logos/6/227/thumbs/22745782016.gif", "http://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif", "http://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif"]


const addLogo = () => {
  let $playerTeam = $('.player1Team')
  let $logo = $('<img>')
  if ($playerTeam.text() === "Los Angeles Lakers") {
    $logo.attr('src', $teamLogo[0])
    $playerTeam.append($logo)
    console.log($logo);
  }
}
