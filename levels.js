var levels = [
  {
    name: 'justify-content 1',
    instructions: 'Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:<ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right.</p>',
    board: 'g',
    style: {'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'justify-content 2',
    instructions: 'Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:<ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>',
    board: 'gy',
    style: {'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'justify-content 3',
    instructions: 'Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.',
    board: 'gyr',
    style: {'justify-content': 'space-around'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'justify-content 4',
    instructions: 'Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the lilypads have equal spacing between them.',
    board: 'gyr',
    style: {'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'align-items 1',
    instructions: 'Now use <code>align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:<ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>',
    board: 'gyr',
    style: {'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'align-items 2',
    instructions: 'Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.',
    board: 'g',
    style: {'justify-content': 'center', 'align-items': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'align-items 3',
    instructions: 'The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Using a combination of <code>justify-content</code> and <code>align-items</code>.',
    board: 'gyr',
    style: {'justify-content': 'space-around', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'flex-direction 1',
    instructions: 'The frogs need to get in the same order as their lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:<ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
    board: 'gyr',
    style: {'flex-direction': 'row-reverse'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'flex-direction 2',
    instructions: 'Help the frogs find their column of lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:<ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
    board: 'gyr',
    style: {'flex-direction': 'column'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'flex-direction 3',
    instructions: 'Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.<p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.',
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'flex-direction 4',
    instructions: '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>',
    board: 'gyr',
    style: {'flex-direction': 'column', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'flex-direction 5',
    instructions: 'Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.',
    board: 'gyr',
    style: {'flex-direction': 'column-reverse', 'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'flex-direction 6',
    instructions: 'Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.',
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'order 1',
    instructions: 'Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to set it to a positive or negative integer value. <p>Use the <code>order</code> property to reorder the frogs according to their lilypads.',
    board: 'gyr',
    selector: '> :nth-child(2)',
    classes: {'#pond, #background': 'wrap'}, 
    style: {'order': '2'},
    before: "#pond {\n  display: flex;\n}\n\n.yellow {\n",
    after: "}",
  },
  {
    name: 'order 2',
    instructions: 'Use the <code>order</code> property to send the red frog to his lilypad.',
    board: 'gggrg',
    selector: '> :nth-child(4)',
    classes: {'#pond, #background': 'wrap'}, 
    style: {'order': '-1'},
    before: "#pond {\n  display: flex;\n}\n\n.red {\n",
    after: "}",
  },
  {
    name: 'align-self 1',
    instructions: 'Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.',
    board: 'ggygg',
    selector: '> :nth-child(3)',
    style: {'align-self': 'flex-end'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start\n}\n\n.yellow {\n",
    after: "}",
  },
  {
    name: 'align-self 2',
    instructions: 'Combine <code>order</code> with <code>align-self</code> to help the frogs to their destinations.',
    board: 'ygygg',
    selector: '> .yellow',
    style: {'align-self': 'flex-end', 'order': '2'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start\n}\n\n.yellow {\n",
    after: "}",
  },
  {
    name: 'flex-wrap 1',
    instructions: 'Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:<ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>',
    board: 'ygggggr',
    style: {'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'flex-wrap 2',
    instructions: 'Help this army of frogs form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.',
    board: 'gggggrrrrryyyyy',
    style: {'flex-direction': 'column', 'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'flex-flow 1',
    instructions: 'The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of one of the two properties separated by a space.<p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>',
    board: 'gggggrrrrryyyyy',
    style: {'flex-flow': 'column wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'align-content 1',
    instructions: 'The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:<ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>',
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'}, 
    style: {'align-content': 'flex-start'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap\n",
    after: "}",
  },
  {
    name: 'align-content 2',
    instructions: 'Now the current has bunched the lilypads at the bottom. Use <code>align-content</code> to guide the frogs there.',
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'}, 
    style: {'align-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap\n",
    after: "}",
  },
  {
    name: 'align-content 3',
    instructions: 'The frogs have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their lilypads.',
    board: 'rgggyrgggyrgggy',
    classes: {'#pond, #background': 'wrap'}, 
    style: {'flex-direction': 'column-reverse', 'align-content': 'center'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap\n",
    after: "}",
  },
  {
    name: 'align-content 4',
    instructions: 'Bring the frogs home one last time by using all of the CSS properties you learned about.',
    board: 'rggggyy',
    style: {'flex-direction': 'column-reverse', 'flex-wrap': 'wrap-reverse', 'align-content': 'space-between', 'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  }
];
