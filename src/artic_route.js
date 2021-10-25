import article1 from './article/1.html'
import article2 from './article/2.html'
import article3 from './article/3.html'
import article4 from './article/4.html'
import article5 from './article/5.html'
import article6 from './article/6.html'

function HTMLparse(str) {
    let div = document.createElement('div')
    div.innerHTML = str
    return div.querySelector('template').innerHTML
}

export default [{
        id: 1,
        title: '如何看待知乎上的男拳1',
        article: HTMLparse(article1)
    },
    {
        id: 2,
        title: '如何看待知乎上的男拳2',
        article: HTMLparse(article2)
    },
    {
        id: 3,
        title: '如何看待知乎上的男拳3',
        article: HTMLparse(article3)
    },
    {
        id: 4,
        title: '如何看待知乎上的男拳4',
        article: HTMLparse(article4)
    },
    {
        id: 5,
        title: '如何看待知乎上的男拳5',
        article: HTMLparse(article5)
    },
    {
        id: 6,
        title: '21.10.25 周记',
        article: HTMLparse(article6)
    },
]