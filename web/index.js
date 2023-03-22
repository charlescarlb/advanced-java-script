import isEqual from 'https://esm.run/lodash.isequal';

import { utils } from '../exercise/code.js';
import { POKEMONS, EXPECTATION_ITEMS } from '../data/expectations.js';

const grid = document.querySelector('#grid');

const formatJson = output => JSON.stringify(output, null, 2);

const createOption = (name, value) => `<option value="${value}">${name.join(', ')}</option>`;

const createOutputContent = (content, functionName) => {
  const pre = document.createElement('pre');
  const code = document.createElement('code');

  pre.appendChild(code);

  const splittedContent = content.split('\n');

  if (splittedContent.length > 4) {
    const wrapper = document.createElement('span');
    const toggle = document.createElement('a');
    const collapsedPre = document.createElement('pre');
    const collapsedCode = document.createElement('code');
    const contentToShow = splittedContent.splice(0, 4);
    collapsedPre.className = 'collapse';
    collapsedPre.id = `${functionName}-collapse`;
    toggle.dataset.bsToggle = 'collapse';
    toggle.href = `#${collapsedPre.id}`;
    toggle.innerText = 'Show/Hide output';

    collapsedCode.innerText = splittedContent.join('\n');
    code.innerText = contentToShow.join('\n');

    collapsedPre.appendChild(collapsedCode);

    wrapper.appendChild(pre);
    wrapper.appendChild(collapsedPre);
    wrapper.appendChild(toggle);

    return wrapper;
  } else {
    code.innerText = content;
  }  

  return pre;
}

const createRow = (content, functionName) => {
  let selectedInput = content.expectations[0].input;
  let expectedOutput = content.expectations[0].output;
  const row = document.createElement('div');
  const name = document.createElement('div');
  const input = document.createElement('div');
  const output = document.createElement('div');
  const result = document.createElement('div');
  row.className = 'row';

  row.appendChild(name);
  row.appendChild(input);
  row.appendChild(output);
  row.appendChild(result);

  const handleRunClick = () => {
    const executionResult = utils[functionName](...[...selectedInput, POKEMONS]);

    const button = result.querySelector('button');
    result.querySelector(`[data-output=${functionName}`)?.remove();

    if (isEqual(executionResult, expectedOutput)) {
      button.className = 'btn btn-success';
      button.innerText = 'Success ✔️';
    } else {
      button.className = 'btn btn-danger';
      button.innerText = 'Not equal ⛌';
    }

    const showResult = createOutputContent(formatJson(executionResult) || 'undefined', `result-${functionName}`);
    showResult.dataset.output = functionName;
    result.appendChild(showResult);
  };

  const createName = () => {
    name.innerText = '';
    name.innerText = functionName;
    name.title = content.name;
    name.className = 'col';
  };

  const createInput = (expectations, handleSelectInput) => {
    name.innerText = '';
    input.className = 'col';
  
    if(expectations.length > 1) {
      const select = document.createElement('select');
      select.className = 'form-select';
      select.innerHTML = expectations.map((expectation, i) => createOption(expectation.input, i));
      input.appendChild(select);
      select.addEventListener('change', handleSelectInput);
    } else {
      input.innerHTML = 'N/A';
    }
  };

  const createOutput = () => {  
    output.innerText = '';
    const content = formatJson(expectedOutput);
    const pre = createOutputContent(content, functionName);

    output.className = 'col adv__code';
    output.appendChild(pre);
  };

  const createResult = () => {
    result.innerText = '';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-primary';
    button.innerText = 'Run!';
    button.addEventListener('click', handleRunClick);

    result.className = 'col';
    result.appendChild(button);
  }

  const updateSelectedInput = newInput => {
    selectedInput = content.expectations[newInput].input;
    expectedOutput = content.expectations[newInput].output;

    createOutput();
    createResult();
  }

  return {
    htmlElement: row,
    createName,
    createInput,
    createOutput,
    createResult,
    updateSelectedInput
  };
};


Object.entries(EXPECTATION_ITEMS).forEach(([functionName, content]) => {
  const row = createRow(content, functionName);

  const handleSelectInput = (e) => {
    const selected = parseInt(e.target.value, 10);
    row.updateSelectedInput(selected);
  };

  row.createInput(content.expectations, handleSelectInput);
  row.createOutput();
  row.createName(content.name);
  row.createResult();
  
  grid.appendChild(row.htmlElement);
});

