var obj = [
    { imgpath: "../assets/gallery1/outdoor.jpg", tag: "Outdoor Pursuits" },
    { imgpath: "../assets/gallery1/golf.jpg", tag: "Golf" },
    { imgpath: "../assets/gallery1/lifestyle.jpeg", tag: "Lifestyle" },
    { imgpath: "../assets/gallery1/landscapes.jpg", tag: "Landscapes" },
    { imgpath: "../assets/gallery1/clubhouse.jpg", tag: "Clubhouse" },
    { imgpath: "../assets/gallery1/wellness.jpg", tag: "Wellness" }
];

function settingInnerHtml(item) {
    var string = '<a class="box" href="#"><div><img class="image" src=" ' + item.imgpath + '"></div><p> ' + item.tag + '</p></a>';
    return string;
}

document.getElementById("gallery-photos").innerHTML = obj.map(settingInnerHtml).join("");