import React, {Fragment, useState} from 'react';
import moment from "moment";
import {curveCatmullRom} from 'd3-shape';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries, LineSeriesCanvas
} from 'react-vis';

export default function DetailChart(props) {
    const chart =
        <XYPlot style={{"margin":"0px 15px","padding":"0px"}} width={700} height={300} xType="time" yDomain={[props.maxRank,props.minRank]}>
            <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
            <VerticalGridLines style={{stroke: '#B7E9ED'}} />
            <XAxis
                tickLabelAngle={-25}
                style={{
                    line: {stroke: '#ADDDE1'},
                    ticks: {stroke: '#ADDDE1'},
                    text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                }}
            />
            <YAxis
                tickFormat={v=>`${v}위`}
            />
            <LineSeries
                style={{fill:'none'}}
                data={props.data}
            />
        </XYPlot>

    return (
        <div>
            {chart}
        </div>
    );
}