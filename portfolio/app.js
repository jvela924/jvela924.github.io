const hideMain = () => {
  $('#main').css('display', 'none')
}

const showMain = () => {
  $('#main').css('display', 'flex')
}

const hideAboutMe = () => {
  $('#about-me').css('display', 'none')
}

const showAboutMe = () => {
  $('#about-me').css('display', 'block')
}

const showProjects = () => {
  $('#projects-div').css('display', 'block')
}

const hideProjects = () => {
  $('#projects-div').css('display', 'none')
}


$('#about').on('click', hideMain);
$('#about').on('click', hideProjects)
$('#about-button').on('click', hideMain)
$('#about-button').on('click', hideProjects)
$('#home').on('click', showMain)
$('#home').on('click', hideProjects)

$('#about').on('click', showAboutMe)
$('#home').on('click', hideAboutMe)
$('#about-button').on('click', showAboutMe)

$('#projects').on('click', showProjects)
$('#projects').on('click', hideMain)
$('#projects').on('click', hideAboutMe)

$('#projects-button').on('click', showProjects)
$('#projects-button').on('click', hideMain)
