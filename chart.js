// select chart element
const circleChart = document.getElementById('chart')

// create canvas element
const canvas = document.createElement('canvas')
canvas.width = 50 
canvas.height = 50

// appending the canvass to the chart
circleChart.appendChild(canvas)

//to draw on canvass, we need to get the context of the canvass
const ctx = canvas.getContext('2d')

// change the line width
ctx.lineWidth = 8

// circle radius
const R = 20

function drawCircle(color, ratio, anticlockwise){
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.arc( canvas.width/2, canvas.height/2, R, 0, ratio*2*Math.PI, anticlockwise)
  ctx.stroke()
}

function updateChart(income, outcome){
  let ratio = income / (income + outcome)
  drawCircle('red', - ratio, true)
  drawCircle('black', 1 - ratio, false)
}

