let total = 0

$( document ).ready(function() {
$('#score').html(total)
$("#rules").hide()
$('#infoshow').on('click', function() {
    $("#rules").slideToggle()
})
$('#aim').html(getRandomInteger(19, 120))
$('#aim').val(getRandomInteger(19, 120))

var diamond1= getRandomInteger(1, 12)
var diamond2= getRandomInteger(1, 12)
var diamond3= getRandomInteger(1, 12)
var diamond4= getRandomInteger(1, 12)



$('#diamond1').on('click', function() {
    total = total + diamond1
    $('#score').html(total)
    $('#score').val(total)
})
$('#diamond2').on('click', function() {
    total = total + diamond2
    $('#score').html(total)
    $('#score').val(total)
})
$('#diamond3').on('click', function() {
    total = total + diamond3
    $('#score').html(total)
    $('#score').val(total)
})
$('#diamond4').on('click', function() {
    total = total + diamond4
    $('#score').html(total)
    $('#score').val(total)
})

if ($('#aim').val() === $('#score').val()) {
    alert('You win!')
}
if ($('#aim').val() < $('#score').val()) {
    alert('You lose!')
}
})
function getRandomInteger(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}