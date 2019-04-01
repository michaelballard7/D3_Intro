
const canvas = d3.select(".canvas");

var dataArray = [4,15, 34];

const svg = canvas.append("svg")
    .attr("width", 800)
    .attr('height', 800)

const rect = svg.append("rect")

rect.attr("width","24")
    .data(dataArray)
    .attr('height', '100')
    .attr('fill', 'orange')
    .attr("x",function(d,i){
        console.log(d)
        return  d*20
    })
    .attr('y', function(d,i){
        console.log(i)
        return d * 12
    })
