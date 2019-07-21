
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
            $('.player1Pts').text(data.data[0].pts)
            $('.player1Reb').text(data.data[0].reb)
            $('.player1Ast').text(data.data[0].ast)
            $('.player1Fg').text(parseFloat(((data.data[0].fg_pct)*100).toFixed(2))+ "%")
            $('.player13P').text(parseFloat(((data.data[0].fg3_pct)*100).toFixed(2))+ "%")
            $('.player1Stl').text(data.data[0].stl)
            $('.player1Blk').text(data.data[0].blk)
            $('.player1Tov').text(data.data[0].turnover)
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
        $('.player2Name').text((data.data[0].first_name) + " " + (data.data[0].last_name))
        let playerID = (data.data[0].id);
        $('.player2Team').html(data.data[0].team.full_name)
        addLogo2()
        $.ajax({
          url:'https://www.balldontlie.io/api/v1/season_averages?season=' + $season + '&player_ids[]=' + playerID
        }).then(
          (data)=>{
            $('.player2Gp').text(data.data[0].games_played)
            $('.player2Pts').text(data.data[0].pts)
            $('.player2Reb').text(data.data[0].reb)
            $('.player2Ast').text(data.data[0].ast)
            $('.player2Fg').text(parseFloat(((data.data[0].fg_pct)*100).toFixed(2))+ "%")
            $('.player23P').text(parseFloat(((data.data[0].fg3_pct)*100).toFixed(2))+ "%")
            $('.player2Stl').text(data.data[0].stl)
            $('.player2Blk').text(data.data[0].blk)
            $('.player2Tov').text(data.data[0].turnover)
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
  $logo.addClass('logo')
  if ($playerTeam.text() === "Atlanta Hawks") {
    $logo.attr('src', $teamLogo[0])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Boston Celtics") {
    $logo.attr('src', $teamLogo[1])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Brooklyn Nets") {
    $logo.attr('src', $teamLogo[2])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Charlotte Hornets") {
    $logo.attr('src', $teamLogo[3])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Chicago Bulls") {
    $logo.attr('src', $teamLogo[4])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Cleveland Cavaliers") {
    $logo.attr('src', $teamLogo[5])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Dallas Mavericks") {
    $logo.attr('src', $teamLogo[6])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Denver Nuggets") {
    $logo.attr('src', $teamLogo[7])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Detroit Pistons") {
    $logo.attr('src', $teamLogo[8])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Golden State Warriors") {
    $logo.attr('src', $teamLogo[9])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Houston Rockets") {
    $logo.attr('src', $teamLogo[10])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Indiana Pacers") {
    $logo.attr('src', $teamLogo[11])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Los Angeles Clippers") {
    $logo.attr('src', $teamLogo[12])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Los Angeles Lakers") {
    $logo.attr('src', $teamLogo[13])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Memphis Grizzlies") {
    $logo.attr('src', $teamLogo[14])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Miami Heat") {
    $logo.attr('src', $teamLogo[15])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Milwaukee Bucks") {
    $logo.attr('src', $teamLogo[16])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Minnesota Timberwolves") {
    $logo.attr('src', $teamLogo[17])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "New Orleans Pelicans") {
    $logo.attr('src', $teamLogo[18])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "New York Knicks") {
    $logo.attr('src', $teamLogo[19])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Oklahoma City Thunder") {
    $logo.attr('src', $teamLogo[20])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Orlando Magic") {
    $logo.attr('src', $teamLogo[21])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Philadelphia 76ers") {
    $logo.attr('src', $teamLogo[22])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Phoenix Suns") {
    $logo.attr('src', $teamLogo[23])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Portland Trail Blazers") {
    $logo.attr('src', $teamLogo[24])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Sacramento Kings") {
    $logo.attr('src', $teamLogo[25])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "San Antonio Spurs") {
    $logo.attr('src', $teamLogo[26])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Toronto Raptors") {
    $logo.attr('src', $teamLogo[27])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Utah Jazz") {
    $logo.attr('src', $teamLogo[28])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Washington Wizards") {
    $logo.attr('src', $teamLogo[29])
    $playerTeam.append($logo)
  }
}

const addLogo2 = () => {
  let $playerTeam = $('.player2Team')
  let $logo = $('<img>')
  $logo.addClass('logo')
  if ($playerTeam.text() === "Atlanta Hawks") {
    $logo.attr('src', $teamLogo[0])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Boston Celtics") {
    $logo.attr('src', $teamLogo[1])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Brooklyn Nets") {
    $logo.attr('src', $teamLogo[2])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Charlotte Hornets") {
    $logo.attr('src', $teamLogo[3])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Chicago Bulls") {
    $logo.attr('src', $teamLogo[4])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Cleveland Cavaliers") {
    $logo.attr('src', $teamLogo[5])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Dallas Mavericks") {
    $logo.attr('src', $teamLogo[6])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Denver Nuggets") {
    $logo.attr('src', $teamLogo[7])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Detroit Pistons") {
    $logo.attr('src', $teamLogo[8])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Golden State Warriors") {
    $logo.attr('src', $teamLogo[9])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Houston Rockets") {
    $logo.attr('src', $teamLogo[10])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Indiana Pacers") {
    $logo.attr('src', $teamLogo[11])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Los Angeles Clippers") {
    $logo.attr('src', $teamLogo[12])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Los Angeles Lakers") {
    $logo.attr('src', $teamLogo[13])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Memphis Grizzlies") {
    $logo.attr('src', $teamLogo[14])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Miami Heat") {
    $logo.attr('src', $teamLogo[15])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Milwaukee Bucks") {
    $logo.attr('src', $teamLogo[16])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Minnesota Timberwolves") {
    $logo.attr('src', $teamLogo[17])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "New Orleans Pelicans") {
    $logo.attr('src', $teamLogo[18])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "New York Knicks") {
    $logo.attr('src', $teamLogo[19])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Oklahoma City Thunder") {
    $logo.attr('src', $teamLogo[20])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Orlando Magic") {
    $logo.attr('src', $teamLogo[21])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Philadelphia 76ers") {
    $logo.attr('src', $teamLogo[22])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Phoenix Suns") {
    $logo.attr('src', $teamLogo[23])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Portland Trail Blazers") {
    $logo.attr('src', $teamLogo[24])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Sacramento Kings") {
    $logo.attr('src', $teamLogo[25])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "San Antonio Spurs") {
    $logo.attr('src', $teamLogo[26])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Toronto Raptors") {
    $logo.attr('src', $teamLogo[27])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Utah Jazz") {
    $logo.attr('src', $teamLogo[28])
    $playerTeam.append($logo)
  } else if ($playerTeam.text() === "Washington Wizards") {
    $logo.attr('src', $teamLogo[29])
    $playerTeam.append($logo)
  }
}

const $openAbout = $('#openAbout');
const $openInstructions = $('#openInstructions')

const $modalTextboxAbout = $('#modalTextboxAbout')
const $modalTextboxInstructions = $('#modalTextboxInstructions')

const $closeAbout = $('#closeAbout');
const $closeInstructions = $('#closeInstructions');

const openAbout = () => {
  $modalTextboxAbout.css('display', 'block');
}

$openAbout.on('click', openAbout);

const closeAbout = () => {
  $modalTextboxAbout.css('display', 'none');
}

$closeAbout.on('click', closeAbout);

const openInstructions = () => {
  $modalTextboxInstructions.css('display', 'block');
}

$openInstructions.on('click', openInstructions);

const closeInstructions = () => {
  $modalTextboxInstructions.css('display', 'none');
}

$closeInstructions.on('click', closeInstructions);

$('#reset').on('click', event => {
  location.reload()
})

let currentImgIndex = 0

let $currentImg = $('.carousel-gifs').children().eq(currentImgIndex)

let numOfGifs = $('.carousel-gifs').children().length - 1

const $next = $('.next')
const $previous = $('.previous')

$next.on('click', () => {
    $currentGif.hide()
    if(currentGifIndex < numOfGifs) {
      currentGifIndex++
    } else {
      currentImgIndex = 0
    }
    $currentGif = $('.carousel-images').children().eq(currentGifIndex)
    $currentGif.show()
  })

$previous.on('click', () => {
  $currentGif.hide()
  if (currentGifIndex > 0) {
    currentGifIndex--
  } else {
    currentGifIndex = numOfGifs
  }
  $currentGif = $('.carousel-images').children().eq(currentGifIndex)
  $currentGif.show()
})
