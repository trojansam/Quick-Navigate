document.addEventListener('DOMContentLoaded', function () {
    const leaBtn = document.getElementById("lea");
    const leaUrl = "https://collegelasalle.omnivox.ca/intr/Module/ServicesExterne/Skytech.aspx?IdServiceSkytech=Skytech_Omnivox&lk=%2festd%2fcvie&IdService=CVIE&C=LAS&E=P&L=ANG"

    function goToUrl(_url) {
        chrome.tabs.create({
            url: _url
        });
    }

    leaBtn.addEventListener("click", function (e) {
        goToUrl(leaUrl)
    });

    const mioBtn = document.getElementById("mio")
    const mioUrl = 'https://collegelasalle.omnivox.ca/intr/Module/ServicesExterne/RedirigeMio.ashx'

    mioBtn.addEventListener("click", function () {
        goToUrl(mioUrl)
    })

    const sedulBtn = document.getElementById("sedul")
    const sedulUrl = 'https://collegelasalle-estd.omnivox.ca/estd/HRRE/VisualiseHoraire.ovx?Info=eTE4ejdTL0h1M2FEQTJPZDJhV2Y0dVQzV2dOWm5WZ2w2MUpManI0Z2FmL05UcmI2VEgyMmk3aFZjS1ZGemlwbQ__&TypeHor=&Ref=151045390618&C=LAS&L=ANG&source='

    sedulBtn.addEventListener("click", function () {
        goToUrl(sedulUrl)
    })


});