const $climate = document.getElementById("climate")
const $consumption = document.getElementById("consumption")
const $resources = document.getElementById("resources")
const $people = document.getElementById("people")

$climate.onclick=() =>{
document.body.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
document.body.style.backgroundSize = "100% 100%"
$climate.style.backgroundcolor="#2F80ED"
$consumption.style.backgroundcolor="transparent"
$resources.style.backgroundcolor="transparent"
$people.style.backgroundcolor="transparent"
document.getElementById("save").innerHTML = "Do your bit! Save ozone, use less AC and Air transport."
document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}

$consumption.onclick=() =>{
    document.body.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    document.body.style.backgroundSize = "100% 100%"
    $consumption.style.backgroundcolor="#2F80ED"
    $climate.style.backgroundcolor="transparent"
    $resources.style.backgroundcolor="transparent"
    $people.style.backgroundcolor="transparent"
    document.getElementById("save").innerHTML = "Do your bit! Save materials, use less water and stop manipulation of natural materials."
    document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}

$resources.onclick=() =>{
        document.body.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
        document.body.style.backgroundSize = "100% 100%"
        $resources.style.backgroundcolor="#2F80ED"
        $consumption.style.backgroundcolor="transparent"
        $climate.style.backgroundcolor="transparent"
        $people.style.backgroundcolor="transparent"
        document.getElementById("save").innerHTML= "Do your bit! Save trees, use renewable energy soureces and prefer to travel green"
        document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}
$people.onclick=() =>{
            document.body.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
            document.body.style.backgroundSize = "100% 100%"
            $people.style.backgroundcolor="#2F80ED"
            $consumption.style.backgroundcolor="transparent"
            $resources.style.backgroundcolor="transparent"
            $climate.style.backgroundcolor="transparent"
            document.getElementById("save").innerHTML = "Do your bit! Save people, stay healthier, eat "
            document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}
