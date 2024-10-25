document.addEventListener('DOMContentLoaded', () => {
  const modules = {
    'module1': null,
    'module2': "./content/federal/fed.html",
    'module3': null,
    'module4': null,
    'module5': "./content/calculations/calculation.html",
  };

  console.log('DOM loaded');

  // Get section elements
  const sections = document.querySelectorAll('section');

  // Loop through each section
  sections.forEach((section) => {
    const sectionId = section.id;

    console.log(`Processing section: ${sectionId}`);

    // If the section ID exists in the modules object
    if (sectionId in modules) {
      const link = section.querySelector('a');

      if (link) {
        // Set href based on module path or set to 404 if null
        link.href = modules[sectionId] ? modules[sectionId] : "./modals/404.html";
        console.log(`Set href for ${sectionId} to: ${link.href}`);
      } else {
        console.warn(`No <a> element found in section: ${sectionId}`);
      }
    }
  });
});
