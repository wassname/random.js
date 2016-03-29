/** Graph to visualize normal dists **/

/** bin and normalise data so it can be plotted on a line graph **/
function bin_data(values, nbins) {
    nbins=nbins||100

    var flatVals = _(values).values().flatten().value()
    var max = _.max(flatVals)
    var min = _.min(flatVals)
    var steps = (max - min) / nbins
    var bins = d3.range(min, max, steps)
    var binner = d3.layout.histogram()
        .bins(bins)
        .frequency(false) // use probability

    // I want to remove start and end bins with few values in to improve display
    var cuttofProb = 0.002
    var allBinned = binner(flatVals).map(v=>v.y/v.dx).map(v=>v<cuttofProb?0:v)
    i0=_.findIndex(allBinned,v=>v!=0)
    i1=_.findLastIndex(allBinned,v=>v!=0)
    bins2=bins.slice(i0,i1-i0)

    var binner = d3.layout.histogram()
        .bins(bins2)
        .frequency(false) // use probability

    // format for c3
    c3data = {x:'x'}
    c3data.columns=[
        _.concat(['x'],bins)
    ]

    // bin and adjust for bin width
    for (var name in values) {
        var vals = values[name]
        normalisedData = binner(vals).map(v=>v.y/v.dx)

        var column = _.concat([name],normalisedData)
        c3data.columns.push(column)
    }
    return c3data
}
