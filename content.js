var hide_divs = document.getElementsByClassName("hide-div")
var src_url = []
var hide_div
for (var j = 0; j < hide_divs.length; j++) {
    hide_div = hide_divs[j]
    for (var i = 0; i < hide_div.childElementCount; i++) {
        src_url.push(hide_div.children[i].dataset.href)
        var ul = hide_div.children[i].getElementsByTagName("ul")[0];
        var a_tag = document.createElement('a');
        a_tag.innerHTML = "点击下载"
        a_tag.setAttribute("href", hide_div.children[i].dataset.href)
        ul.appendChild(a_tag);
    }
}

