import React, { useEffect, RefObject } from 'react';
//import * as d3 from "d3";
import { select } from 'd3-selection'


const BarChart = () => {

    const ref: RefObject<HTMLDivElement> = React.createRef()

    useEffect(() => {
        draw()
    })

    const draw = () => {
        select(ref.current).append('p').text('Hello World')
        select('svg').append('g').attr('transform', 'translate(250, 0)').append('rect').attr('width', 500).attr('height', 500).attr('fill', 'tomato')
      }

    // const draw = (ref: any) => {
        
    //     const data = [12, 5, 6, 6, 9, 10];

    //     const svg = d3.select(ref.current)

    //     svg.selectAll("rect")
    //         .data(data)
    //         .enter()
    //         .append("rect")
    //         .attr("x", (d, i) => i * 70)
    //         .attr("y", (d, i) => 300 - 10 * d)
    //         .attr("width", 65)
    //         .attr("height", (d, i) => d * 10)
    //         .attr("fill", "green");
    // };
 
    return (
        <div className="BarChart" ref={ref}>
          <svg width="500" height="500">
            <g transform="translate(0, 0)">
              <rect width="500" height="500" fill="green" />
            </g>
          </svg>
        </div>
      )
    
}
export default BarChart;