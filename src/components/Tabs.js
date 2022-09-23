const Tabs = (headerSelector, tabSelector, contentSelector, achievInfoSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector),
        achievInfo = document.querySelectorAll(achievInfoSelector);

  function hideTabContent () {
    content.forEach(item => {
      item.style.display = 'none';
    });
    achievInfo.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent (i = 0) {
    content[i].style.display = 'block';
    achievInfo[i].style.display = 'block';
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    if (e.target.classList.contains(tabSelector.replace(/\./, '')) || e.target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
      tab.forEach((item, i) => {
        if (e.target == item || e.target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  
}

export default Tabs;