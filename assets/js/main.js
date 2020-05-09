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

$( document ).ready(function() {

// if ('ontouchstart' in document.documentElement) {
//     $('body').on('tap','.light',init_book);
// } else {
    $('body').on('mousedown','.light',tap_light);
    $('body').on('mousedown','.palette-color',tap_palette);

// }
});

var tap_light = function(e) {
    var row = e.currentTarget.dataset.row
    var column = e.currentTarget.dataset.column
    if (app.data.grid[row][column].light) {
        app.data.grid[row][column].light = false;
    } else {
        app.data.grid[row][column].light = true;
        app.data.grid[row][column].color = app.data.current_color;
    }
    app.update();
}
var tap_palette = function(e) {
    app.data.current_color = e.currentTarget.dataset.color
}