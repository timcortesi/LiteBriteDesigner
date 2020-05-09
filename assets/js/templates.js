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
        <div class="light {{#light}}color-{{color}}{{/light}}" 
             data-row={{row}} 
             data-column={{column}}>
             {{#light}}{{color}}{{/light}}
        </div>
    {{/each}}
    </div>
{{/each}}
</div>
`,
palette:
`
<div class="palette">
    <div class="palette-color" style="background-color:pink" data-color="P">P</div>
    <div class="palette-color" style="background-color:orange" data-color="O">O</div>
    <div class="palette-color" style="background-color:yellow" data-color="Y">Y</div>
    <div class="palette-color" style="background-color:green" data-color="B">G</div>
    <div class="palette-color" style="background-color:blue" data-color="B">B</div>
    <div class="palette-color" style="background-color:white" data-color="W">W</div>
</div>
`
};