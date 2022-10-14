let $slider = document.querySelector("#slider")
let $prev = document.querySelector("#prev")
let $next = document.querySelector("#next")
let $content = document.querySelector("#content")
let $left = 0

$next.addEventListener('click', function () {
    $left -= 310
    $content.style.left = $left + "px"
})
$prev.addEventListener('click', function () {
    $left += 310
    $content.style.left = $left + "px"
})

