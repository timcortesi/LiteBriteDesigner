var ractive = Ractive({
    target: '#main_target',
    template: templates.main,
    partials: templates,
    data: app.data
});

app.update = function() {
    ractive.set(app.data)
};

for (var row_index=0;row_index<25;row_index++) {
    var row = [];
    for (var column_index=0;column_index<31;column_index++) {
        if (column_index === 30 && (row_index % 2 === 0)) {
            continue;
        }
        row.push({light:false});
    }
    app.data.grid.push(row);
}
app.update();

$(document).ready(function() {
    if ('ontouchstart' in document.documentElement) {
        $('body').on('tap','.light',tap_light);
        $('body').on('tap','.palette-color',tap_palette);
        $('body').on('tap','.import-export-btn',import_export);
    } else {
        if (localStorage.getItem('pattern')) {
            app.data.grid = JSON.parse(localStorage.getItem('pattern'))
            app.update();
        }
        $('body').on('mousedown','.light',tap_light);
        $('body').on('mousedown','.palette-color',tap_palette);
        $('body').on('click','.import-export-btn',import_export);
    }
});

var import_export = function() {
    var config_form = new gform({'legend':'Import / Export Pattern','fields':[
        {
            name:"pattern",
            label:"Pattern",
            type:"textarea"
        }
    ],data:{pattern:JSON.stringify(app.data.grid)}}).modal().on('save',function(form_event) {
        localStorage.setItem('pattern',form_event.form.get().pattern)
        app.data.grid = JSON.parse(form_event.form.get().pattern);
        app.update();
        form_event.form.trigger('close');
    }).on('cancel',function(form_event) {
        form_event.form.trigger('close');
    });;
}

var tap_light = function(e) {
    var row = e.currentTarget.dataset.row
    var column = e.currentTarget.dataset.column
    if (app.data.grid[row][column].light && app.data.grid[row][column].color === app.data.current_color) {
        app.data.grid[row][column].light = false;
    } else {
        app.data.grid[row][column].light = true;
        app.data.grid[row][column].color = app.data.current_color;
    }
    localStorage.setItem('pattern', JSON.stringify(app.data.grid))
    app.update();
}
var tap_palette = function(e) {
    app.data.current_color = e.currentTarget.dataset.color
}