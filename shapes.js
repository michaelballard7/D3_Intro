// select a dom element with d3
const canvas = d3.select(".canvas")

// add an svg element to the dom
const svg = canvas.append("svg")

// I can chain attributes to my svg
svg.attr('width', '800')
   .attr('height', '250')


// append an element to the svg
svg.append("circle")
    .attr('cx', '100')
    .attr("cy",'100')
    .attr("r", '50')
    .attr('fill', 'blue')

// append a rectangle to the svg
svg.append("rect")
    .attr('width', '10')
    .attr('height', '50')
    .attr("x",'50')
    .attr('y', '50')
    .attr('fill', 'green')

// append a line to the svg
svg.append("line")
    .attr("x1",129)
    .attr("x2",45)
    .attr("y1",300)
    .attr('y2',46)
    .attr('stroke', 'red')

// add svg text object by text and x and y values
svg.append("text")
    .text("Hello From My World!")
    .attr('x', '100')
    .attr('y', '150').attr('fill', 'orange').attr('font-size', '50')
