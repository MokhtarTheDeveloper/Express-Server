var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "X-Requested-With", "Content-Type", "Accept");
    res.header("Access-Control-Allow-Methods", "POST", "GET");
    next()
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var category = [
    {
        id : 1,
        videoClipName : "Hamza Namira - Remix 2 - Khlili | حمزة نمرة - ريمكس الموسم الثاني - خليلي",
        embed :'<div class="container"><iframe class="video" src="https://www.youtube.com/embed/EZp40eoNzDA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen frameborder="0"></iframe></div>',
        videoThumb : "https://img.youtube.com/vi/EZp40eoNzDA/hqdefault.jpg",
        videoDescription : 'الموسم الثاني من برنامج ريمكس من إنتاج شبكة التلفزيون العربي ريمكس أغنية "خليلي" لفرقة لمشاهب المغربية لمشاهدة الحلقة كاملة | https://youtu.be/6Zbgmy1d2s0------------------------'
    },
    {
        id : 2,
        videoClipName : "Hamza Namira - Remix 2 - Yamma Mwel El Hawa | حمزة نمرة - ريمكس الموسم الثاني - يما مويل الهوى",
        embed : '<div class="container"><iframe src="https://www.youtube.com/embed/j-DyQBS4rBM" frameborder="0" allow="encrypted-media" allowfullscreen class="video"></iframe></div>',
        videoThumb : "https://img.youtube.com/vi/j-DyQBS4rBM/hqdefault.jpg",
        videoDescription : ' الموسم الثاني من برنامج ريمكس من إنتاج شبكة التلفزيون العربي ريمكس أغنية "يما مويل الهوى" من الفلكلور الفلسطيني لمشاهدة الحلقة كاملة | https://www.youtube.com/watch?v=ZU7Aw...'
    },
    {
        id : 2,
        videoClipName : "Hamza Namira - Remix 2 - Dar Ya Dar | حمزة نمرة - ريمكس الموسم الثاني - دار يا دار",
        embed : '<iframe class="video" src="https://www.youtube.com/embed/zFlq1CEu8k4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        videoThumb : "https://img.youtube.com/vi/zFlq1CEu8k4/hqdefault.jpg",
        videoDescription : 'الموسم الثاني من برنامج ريمكس من إنتاج شبكة التلفزيون العربي ريمكس أغنية "دار يا دار" للفنان الراحل وديع الصافي بمشاركة فريق "افتكاسات"'
    }
    
];

app.get("/songs", function(req, res) {
    res.send(category)
});

app.listen(6001);