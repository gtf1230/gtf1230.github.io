import articles from "../artic_route"
import Url from "../../assets/Url"
import Markdown from '../../assets/Markdown'

var url = new Url(window.location.search);

// url.get('type') // 2；
// url.get('id') // 1；
// url.get('name') // xiaoming;
//     // localhost:8080?type=2&id=1&name=xiaoming;

// //作业二
// var params = {
//     type: '1',
//     id: 1,
//     name: 'xiaoming'
// }
// var url2 = new Url(params);
// url2.parse() //  type=2&id=1&name=xiaoming

for (let i = 0; i < articles.length; i++) {
    if (articles[i].id == url.get('id')) {
        document.querySelector('h1').innerHTML = articles[i].title;
        let md = new Markdown(articles[i].article);
        document.querySelector('.article').innerHTML = md.parse();
        break
    }
}