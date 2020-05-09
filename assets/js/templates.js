var templates = {
main:
`
{{>grid}}
{{>palette}}
`,
grid:
`
<div class="grid">
{{#each grid: row}}
    <div class="light-row">
    {{#row % 2 === 0}}
        <div class="light-offset"></div>
    {{/offset}}
    {{#each .: column}}
        <div class="light {{#.}}color-{{.}}{{/.}}" 
             data-row={{row}} 
             data-column={{column}}>
             {{#.}}{{.}}{{/.}}
        </div>
    {{/each}}
    </div>
{{/each}}
</div>
`,
palette:
`
<div class="palette">
    <div class="palette-color" style="background-color:pink" data-color="P"></div>
    <div class="palette-color" style="background-color:orange" data-color="O"></div>
    <div class="palette-color" style="background-color:yellow" data-color="Y"></div>
    <div class="palette-color" style="background-color:green" data-color="G"></div>
    <div class="palette-color" style="background-color:blue" data-color="B"></div>
    <div class="palette-color" style="background-color:gray" data-color="W"></div>
    <div class="import-export-btn"><span>I/O</span></div>
</div>
`
};