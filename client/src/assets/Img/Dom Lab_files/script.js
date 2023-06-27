// * Task 1.0 Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main')
// * Task 1.1 Set the background color of mainEl using the --main-bg CSS custom property.
mainEl.getPropertyValue("--main-bg");
getComputedStyle(mainEl).getPropertyValue('--main-bg)')
// * Tasl 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
// * Task 1.3 Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr')


