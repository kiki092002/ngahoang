

const tabHolder = document.querySelector('.tab');
tabHolder.addEventListener('click', handleTabClick)
function handleTabClick(e) {
  const button = e.target;
  if (button.tagName != 'BUTTON') return;
  let buttonAttr = button.dataset.attr;
  let innerContent = document.querySelector(`#${buttonAttr}`);
  let contentContainer = document.querySelector('.content');
  contentContainer.innerHTML = '';
  contentContainer.appendChild(innerContent.cloneNode(true))
  console.log(contentContainer, innerContent)
}
document.querySelector('[data-attr="about"]').click();