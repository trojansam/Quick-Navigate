const leaUrl = "https://collegelasalle.omnivox.ca/intr/Module/ServicesExterne/Skytech.aspx?IdServiceSkytech=Skytech_Omnivox&lk=%2festd%2fcvie&IdService=CVIE&C=LAS&E=P&L=ANG"
const mioUrl = 'https://collegelasalle.omnivox.ca/intr/Module/ServicesExterne/RedirigeMio.ashx'
const sedulUrl = 'https://collegelasalle-estd.omnivox.ca/estd/HRRE/VisualiseHoraire.ovx?Info=eTE4ejdTL0h1M2FEQTJPZDJhV2Y0dVQzV2dOWm5WZ2w2MUpManI0Z2FmL05UcmI2VEgyMmk3aFZjS1ZGemlwbQ__&TypeHor=&Ref=151045390618&C=LAS&L=ANG&source='

function goToUrl(_url) {
    chrome.tabs.create({
        url: _url
    });
}

chrome.commands.onCommand.addListener(function (command) {
    if (command === 'lea') {
        goToUrl(leaUrl)
    } else if (command === 'mio') {
        goToUrl(mioUrl)
    } else if (command === 'sdl') {
        goToUrl(sedulUrl)
    }
});