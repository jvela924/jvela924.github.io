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

const hideResume = () => {
  $('#resume-div').css('display', 'none')
}

const showResume = () => {
  $('#resume-div').css('display', 'block')
}

$('#about').on('click', hideMain);
$('#about').on('click', hideProjects)
$('#about-button').on('click', hideMain)
$('#about-button').on('click', hideProjects)
$('#home').on('click', showMain)
$('#home').on('click', hideResume)
$('#home').on('click', hideProjects)

$('#about').on('click', showAboutMe)
$('#about').on('click', hideResume)
$('#home').on('click', hideAboutMe)
$('#about-button').on('click', showAboutMe)
$('#about-button').on('click', hideResume)

$('#projects').on('click', showProjects)
$('#projects').on('click', hideResume)
$('#projects').on('click', hideMain)
$('#projects').on('click', hideAboutMe)

$('#projects-button').on('click', showProjects)
$('#projects-button').on('click', hideMain)
$('#projects-button').on('click', hideResume)

$('#resume').on('click', showResume)
$('#resume').on('click', hideProjects)
$('#resume').on('click', hideMain)
$('#resume').on('click', hideAboutMe)
