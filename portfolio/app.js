const hideMain = () => {
  $('#main').css('display', 'none')
}

const showMain = () => {
  $('#main').css('display', 'flex')
}

$('#about').on('click', hideMain);
$('#about-button').on('click', hideMain);
$('#home').on('click', showMain)

const hideAboutMe = () => {
  $('#about-me').css('display', 'none')
}

const showAboutMe = () => {
  $('#about-me').css('display', 'block')
}

$('#about').on('click', showAboutMe)
$('#home').on('click', hideAboutMe)
