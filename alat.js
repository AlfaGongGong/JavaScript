
// Define an empty array to store tool data
let toolList = [];

// Get the form and add an event listener to it
const form = document.querySelector('form');
form.addEventListener('submit', addTool);

// Get the search bar and add an event listener to it
const search = document.querySelector('#search');
search.addEventListener('input', searchTool);

// Get the tool list and display any existing tools
const toolListElement = document.querySelector('#tool-list');
displayToolList();

// Define a function to add a tool to the tool list
function addTool(event) {
  event.preventDefault();

    // Get the input values from the form
      const toolName = document.querySelector('#tool-name').value;
        const toolType = document.querySelector('#tool-type').value;
          const toolSize = document.querySelector('#tool-size').value;
            const toolLocation = document.querySelector('#tool-location').value;
              const toolImage = document.querySelector('#tool-image').value;
                const toolInfo = document.querySelector('#tool-info').value;

                  // Create a new tool object with the input values
                    const tool = {
                        name: toolName,
                            type: toolType,
                                size: toolSize,
                                    location: toolLocation,
                                        image: toolImage,
                                            info: toolInfo
                                              };

                                                // Add the tool object to the tool list array
                                                  toolList.push(tool);

                                                    // Save the tool list to local storage
                                                      saveToolList();

                                                        // Reset the form
                                                          form.reset();

                                                            // Display the updated tool list
                                                              displayToolList();
                                                              }

                                                              // Define a function to search for a tool by name
                                                              function searchTool() {
                                                                const searchTerm = search.value.toLowerCase();
                                                                  const filteredTools = toolList.filter(tool => tool.name.toLowerCase().includes(searchTerm));
                                                                    displayToolList(filteredTools);
                                                                    }

                                                                    // Define a function to display the tool list
                                                                    function displayToolList(tools = toolList) {
                                                                      toolListElement.innerHTML = '';
                                                                        for (const tool of tools) {
                                                                            const toolItem = document.createElement('li');
                                                                                toolItem.innerHTML = `
                                                                                      <h2>${tool.name}</h2>
                                                                                            <p>Type: ${tool.type}</p>
                                                                                                  <p>Size: ${tool.size}</p>
                                                                                                        <p>Location: ${tool.location}</p>
                                                                                                              <img src="${tool.image}" alt="${tool.name}">
                                                                                                                    <p>Additional Information: ${tool.info}</p>
                                                                                                                        `;
                                                                                                                            toolListElement.appendChild(toolItem);
                                                                                                                              }
                                                                                                                              }

                                                                                                                              // Define a function to save the tool list to local storage
                                                                                                                              function saveToolList() {
                                                                                                                                localStorage.setItem('toolList', JSON.stringify(toolList));
                                                                                                                                }

                                                                                                                                // Load the tool list from local storage if it exists
                                                                                                                                if (localStorage.getItem('toolList')) {
                                                                                                                                  toolList = JSON.parse(localStorage.getItem('toolList'));
                                                                                                                                  }