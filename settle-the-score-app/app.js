$(()=>{

  $.ajax({
      url:"https://www.balldontlie.io/api/v1/players?search=lebron_james",
      type: "GET",
  }).then(
      (data)=>{
          console.log(data.data[0].first_name);
      }),
      ()=>{
          console.log('bad');
      }
})
