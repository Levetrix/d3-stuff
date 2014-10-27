var bardata = [20,30,40,25,20,30,40,45,10,70,40,25,20,30,40,45,10];
var height = 400,
	width = 600,
	barWidth = 50,
	barOffset = 5;

var colors = d3.scale.linear()
	.domain([0, bardata.length])
	.range(["#ffb832", "#323232"])
	
var yScale = d3.scale.linear()
	.domain([0,d3.max(bardata)])
	.range([0,height])
	
var xScale = d3.scale.ordinal()	.domain(d3.range(0, bardata.length))
	.rangeBands([0,width])
	
	
d3.select('.thing')
	.text("")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g")
	.style("background", "#C9D7D6")
	.selectAll("rect").data(bardata)
	.enter().append("rect")
		.style("fill", function(d,i){
			return colors(i);
		})
		.attr("width", xScale.rangeBand())
		.attr("height", function(d){
			return yScale(d);
		})
		.attr("x", function(d,i){
			return xScale(i); //i * (barWidth + barOffset);
			
		})
		.attr("y", function(d){
			return height - yScale(d);
		})
		
var vGuideScale = d3.scale.linear()
	.domain([0, d3.max(bardata)])
	.range([height, 0])
	
var vAxis = d3.svg.axis()
	.scale(vGuideScale)
	.orient("left")
	.ticks(10)
	
var vGuide = d3.select("svg").append("g")
	vAxis(vGuide)
	
	vGuide.attr("transform", "translate(35,0)")
	vGuide.selectAll("path")
		.style({fill:"none", stroke: "#000"})
		vGuide.selectAll("line")
			.style({stroke: "#000"})

var hAxis = d3.svg.axis()
	.scale(xScale)
	.orient("bottom")
	.tickValues(xScale.domain().filter(function(d,i){
		return !(i % (bardata.length));
	}))
	
var hGuide = d3.select("svg").append("g")
	hAxis(hGuide)
	hGuide.attr("transform", "translate(0, " + (height-30) + ")")
	hGuide.selectAll("path")
		.style({fill:"none", stroke:"#000"})
	hguide.selectAll("line")
		.style({stroke:"#000"})









	console.log("stuff should be happening");
	