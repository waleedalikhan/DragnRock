function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function trash(ev) {
    var id = ev.dataTransfer.getData("text");
    if (id) {
        var element = document.getElementById(id);
        if (!element.disabled) {
            element.parentNode.removeChild(element);
        }
    }
    // ev.target.appendChild(document.getElementById(data));
}

function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("text");
    switch (id) {
        case 'Label': getLabel(ev.target); break;
        case 'TextField': getTextField(ev.target); break;
        case 'Slider': getSlider(ev.target); break;
    }
    // if (newElement) {
    //     // ev.target.appendChild(document.getElementById(data));
    // }
}

function getLabel(target) {
    var label = prompt("Please Enter Label");
    var element = document.createElement("label");
    element.setAttribute('id', Math.random());
    element.innerHTML = label;
    element.setAttribute('draggable', 'true');
    element.setAttribute('ondragstart', 'drag(event);');
    target.appendChild(element);
}
function getTextField(target) {
    var label = prompt("Please Enter Label");
    var fieldset = document.createElement('FIELDSET')
    fieldset.setAttribute('id', Math.random());
    fieldset.innerHTML = '<legend> ' + label + ' </legend>'
    fieldset.setAttribute('draggable', 'true');
    fieldset.setAttribute('ondragstart', 'drag(event);');

    var element = document.createElement("INPUT");
    element.setAttribute('id', Math.random());
    element.setAttribute('type', 'text');
    element.setAttribute('placeholder', 'TextField');

    fieldset.appendChild(element);
    target.appendChild(fieldset);
}

function getSlider(target) {
    var label = prompt("Please Enter Label");
    var fieldset = document.createElement('FIELDSET')
    fieldset.setAttribute('id', Math.random());
    fieldset.innerHTML = '<legend> ' + label + ' </legend>'
    fieldset.setAttribute('draggable', 'true');
    fieldset.setAttribute('ondragstart', 'drag(event);');
    
    var element = document.createElement("INPUT");
    element.setAttribute('id', Math.random());
    element.setAttribute('type', 'range');
    element.setAttribute('min', '10');
    element.setAttribute('max', '2000');
    element.setAttribute('step', '100');
    fieldset.appendChild(element);
    target.appendChild(fieldset);
}