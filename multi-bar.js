
const canvas = d3.select(".canvas");

var dataArray = [4,15, 34];

const svg = canvas.select("svg")

const rect = svg.selectAll("rect")

rect.attr("width","24")
    .data(dataArray)
    .attr('height', function(d){
        return d * 2
    })
    .attr('fill', 'orange')
    .attr("x",function(d,i){
        console.log(d);
        return  i*25
    })
