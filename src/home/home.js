// import Ani from "../../assets/Ani.js"
import Translate from "../../assets/translate.js"
// import Opicity from "../../assets/opicity.js"
import Animate from "../../assets/Animate.js"
import Ellipsis from "../../assets/Ellipsis.js"
import articles from "../artic_route"


String.prototype.ellipsis = function(num, symbol = '...') {
    if (this.length > num) {
        let str = this.substring(0, num);
        str = str + symbol;
        return str;
    }
    return this;
};
let content = document.querySelector('.content_one');
let mainContent = document.querySelector('.main_content');
content.remove();

function HTMLparse(str) {
    let div = document.createElement('div')
    div.innerHTML = str
    return div
}

// 增加查看更多
let next = document.querySelector('.next')
next.remove()
let nextcloneNode = next.cloneNode(true)
mainContent.appendChild(nextcloneNode);
let pageNum, pageIndex, pageCount, fisrtNum;
pageCount = 2;
pageIndex = 1;
pageNum = articles.length % pageCount == 0 ? articles.length / pageCount : parseInt(articles.length / pageCount) + 1;
if (articles.length < pageCount) {
    fisrtNum = articles.length;
} else {
    fisrtNum = pageCount;
}

function renderHTML() {
    for (let i = (pageIndex - 1) * pageCount; i < fisrtNum; i++) {
        const element = articles[i];
        let newContent = content.cloneNode(true);
        let div = HTMLparse(element.article);
        let text = newContent.querySelector('.content_text')
        div.querySelector('.art-title').setAttribute('data-id', element.id)
        newContent.insertBefore(div.querySelector('.art-title'), text);
        text.insertBefore(div.querySelector('.art-content'), newContent.querySelector('.view'));
        new Ellipsis({
            el: text.querySelector('.art-content'),
            textCount: 80,
            findAllButtonText: "查看所有",
            showFindAllButton: true
        })
        mainContent.insertBefore(newContent, nextcloneNode)
        Animate.create().use(Translate).mount(document.querySelectorAll('.content_one'));
        let atitle = document.querySelectorAll('.art-title')

        Array.from(atitle).forEach(el => {
            el.addEventListener('click', function() {
                window.location.href = `articleDetails.html?id=${this.dataset.id}`
            })
        })
    }
}

renderHTML();

function dataLoad() {
    pageIndex++;
    if (pageIndex == pageNum) {
        nextcloneNode.style.display = 'none'
    }
    if (pageIndex == pageNum) {
        if ((articles.length - (pageIndex - 1) * 2) < pageCount) {
            fisrtNum = articles.length;
        } else {
            fisrtNum = pageCount + (pageIndex - 1) * 2;
        }
    } else {
        fisrtNum = pageCount + (pageIndex - 1) * 2;
    }
    renderHTML();
}

// next 添加点击事件
nextcloneNode.addEventListener('click', dataLoad)