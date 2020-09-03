const updateLinkStyle = linkIndex => {
  switch(linkIndex) {
    case 1: document.getElementById('idSkillsLink').style = 'transform: scale(1.1, 1.1); text-shadow: 0 0 2px white;'; break;
    case 2: document.getElementById('idAboutLink').style = 'transform: scale(1.1, 1.1); text-shadow: 0 0 2px white;'; break;
    case 3: document.getElementById('idGalleryLink').style = 'transform: scale(1.1, 1.1); text-shadow: 0 0 2px white;'; break;
    case 4: document.getElementById('idFooterLink').style = 'transform: scale(1.1, 1.1); text-shadow: 0 0 2px white;'; break;
    default: console.error('Some error has occured');
  }
  return linkIndex;
}
const resetLinksStyle = () => {
  document.getElementById('idSkillsLink').style = '';
  document.getElementById('idAboutLink').style = '';
  document.getElementById('idGalleryLink').style = '';
  document.getElementById('idFooterLink').style = '';
  return;
}

window.addEventListener('scroll', () => {
  const scrollPos = window.pageYOffset;
  if (scrollPos < 795) {
    resetLinksStyle();
    return;
  };

  if (scrollPos > 795 && scrollPos < 1238) {
    resetLinksStyle();
    updateLinkStyle(1);
  } else if (scrollPos > 1239 && scrollPos < 1981) {
    resetLinksStyle();
    updateLinkStyle(2);
  } else if (scrollPos > 2009 && scrollPos < 2327) {
    resetLinksStyle();
    updateLinkStyle(3);
  } else {
    resetLinksStyle();
    updateLinkStyle(4);
  }
});
