var gui = new dat.GUI();
var distGuiConfig = {};
var chart;

$(window).ready(function () {

    function genVals(sd, total) {
        var intval = $('#intval').val()

        var f = random[sd]
        var argDefaults = distributions[sd].argDefaults
        var vals = []
        for (var i = 0; i < total; i++) {
            vals.push(f.apply(random, argDefaults))
        }
        return vals
    }

    /** make/update chart for selected values **/
    function genSelected() {
        var allVals = {}
        for (var name in distGuiConfig) {
            if (distributions.hasOwnProperty(name) && (distGuiConfig[name].on)) {
                allVals[name] = genVals(name, distGuiConfig.npoints)
            }
        }

        var c3data = bin_data(allVals, distGuiConfig.bins)

        chart.load({
            columns: c3data.columns,
            unload: true
        })
    }


    function loadDistGui() {

        // make config
        initialOn = ['gamma', 'normal', 'cosine']
        distGuiConfig = {
            npoints: 50000,
            bins: 80
        }

        var npoints = gui.add(distGuiConfig, 'npoints').onChange(genSelected.bind(this))
        var bins = gui.add(distGuiConfig, 'bins').onChange(genSelected.bind(this))
        for (var name in distributions) {
            if (distributions.hasOwnProperty(name)) {
                var folder = gui.addFolder(name);
                distGuiConfig[name] = {
                    on: initialOn.indexOf(name) > -1
                }
                var button = folder.add(distGuiConfig[name], 'on');
                var args = distributions[name].argNames
                var argDefaults = distributions[name].argDefaults
                for (var i = 0; i < args.length; i++) {
                    var arg = args[i]
                    var defV = argDefaults[i]
                    distGuiConfig[name][arg] = defV
                    var controller = folder.add(distGuiConfig[name], arg, defV)
                    controller.onChange(genSelected.bind(this));
                }
                button.onChange(genSelected.bind(this));
                if (distGuiConfig[name].on) folder.open()
            }
        }

        // init chart
        chart = c3.generate({
            axis: {
                x: {
                    tick: {
                        format: d3.format(".2g")
                    },
                    label: 'outputs'
                },
                y:{
                    label: 'probability'
                }
            },
            data: {
                x: 'x',
                columns: [],
                type: 'spline',
            }
        });
    }

    loadDistGui()
    genSelected()

});
