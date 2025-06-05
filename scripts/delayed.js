// add delayed functionality here
// Select all elements that have a 'data-id' attribute
document.querySelectorAll('[data-id]').forEach(element => {
    // Get the value of 'data-id'
    let dataIdValue = element.getAttribute('data-id');
    
    // Set the 'id' attribute with the same value
    element.setAttribute('id', dataIdValue);
});

console.log("ID attributes added based on data-id values.");
