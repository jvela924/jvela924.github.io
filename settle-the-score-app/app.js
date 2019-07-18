
$('#form1').on('submit', (event)=> {
  event.preventDefault();
  let $userInput = $('#player1').val();
  console.log($userInput);
  let $season = $('#season1').val()
  console.log($season);
  $.ajax({
    url:'https://www.balldontlie.io/api/v1/players?search=' + $userInput
  }).then(
    (data)=>{
        $('#firstName1').html(data.data[0].team.full_name)
        let playerID = (data.data[0].id)
        console.log(data.data[0].first_name);
        $.ajax({
          url:'https://www.balldontlie.io/api/v1/season_averages?season=' + $season + '&player_ids[]=' + playerID
        }).then(
          (data)=>{
              console.log(data.data[0].pts);
          }),
          ()=>{
              console.log('bad');
          }
    }),
    ()=>{
        console.log('bad');
  }
})

$('#form1').on('submit', (event)=> {
  event.preventDefault();
  let $userInput = $('input[type="text"]').val();
  console.log($userInput);
  $.ajax({
    url:"https://www.balldontlie.io/api/v1/players?search=" + $userInput
  }).then(
    (data)=>{
        $('#firstName1').html(data.data[0].team.full_name)
        let playerID = (data.data[0].id)
        console.log(data.data[0].first_name);
        $.ajax({
          url:"https://www.balldontlie.io/api/v1/season_averages?player_ids[]=" + playerID
        }).then(
          (data)=>{
              console.log(data.data[0].pts);
          }),
          ()=>{
              console.log('bad');
          }
    }),
    ()=>{
        console.log('bad');
  }
})
