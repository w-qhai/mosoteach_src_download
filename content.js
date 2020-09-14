var hide_div = document.getElementsByClassName("hide-div")[0]
var resource = hide_div.children

var src_url = []
for (var i = 0; i < resource.length; i++) {
    src_url.push(resource[i].dataset.href)
    var ul = resource[i].getElementsByTagName("ul")[0];
    var a_tag = document.createElement('a');
    a_tag.innerHTML = "点击下载"
    a_tag.setAttribute("href", resource[i].dataset.href)
    ul.appendChild(a_tag);
}

