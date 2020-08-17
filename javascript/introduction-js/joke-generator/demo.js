const customname = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = '今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。'
let insertX = ['怪兽威利', '大老爹', '圣诞老人']
let insertY = ['肯德基', '迪士尼乐园', '白宫']
let insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了']

function randomText(array) {
    return array[Math.floor(Math.random() * array.length)]
}

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomText(insertX)
    let yItem = randomText(insertY)
    let zItem = randomText(insertZ)

    newStory = newStory.replace(/:inserta:/gi, xItem)
    newStory = newStory.replace(/:insertb:/gi, yItem)
    newStory = newStory.replace(/:insertc:/gi, zItem)

    const name = customname.value;
    if (name !== '') {
        newStory = newStory.replace('李雷', name)
    }
    if (document.getElementById('american').checked) {
        const weight = Math.round(130 * 2.2046) + ' 磅';
        const temerature = Math.round(34 * 9 / 5 + 32) + ' 华氏度';
        newStory = newStory.replace('34 摄氏度', temerature)
        newStory = newStory.replace('130 公斤', weight)
    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}

