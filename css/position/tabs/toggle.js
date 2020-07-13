var tabs = document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article')

function setTabState(tab, index) {
    tab.onclick = function () {
        for (i = 0; i < tabs.length; i++) {
            if (tabs[i].getAttribute('class')) {
                tabs[i].removeAttribute('class')
            }
        }

        tab.setAttribute('class', 'active');

        for (i = 0; i < panels.length; i++) {
            if (panels[i].getAttribute('class')) {
                panels[i].removeAttribute('class')
            }
        }

        panels[index].setAttribute('class', 'active-panel')
    }
}


for (i = 0; i < tabs.length; i++) {
    var tab = tabs[i];
    setTabState(tab, i)
}