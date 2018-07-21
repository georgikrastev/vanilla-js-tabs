;(function() {
	const tabs = document.querySelectorAll('.tabs');
	const tabsLinks = tabs[0].querySelectorAll('.tabs__nav a');

	Array.from(tabsLinks).forEach(function(tabsLink) {	
		tabsLink.addEventListener('click', function(event) {
			event.preventDefault();

			const link = this;
			const linkParents = link.parentNode.parentNode.children;
			const linkParentSiblings = Array.from(linkParents).filter(child => child !== link.parentNode);
			const tabId = link.getAttribute('href').replace('#', '');		
			const tab = document.getElementById(tabId);
			const tabsAll = tab.parentNode.children;
			const tabSiblings = Array.from(tabsAll).filter(child => child !== tab);
			
			// Add `is--active` class to clicked nav item
			link.parentNode.classList.add('is--active');
			
			// Remove `is--active` class from other nav items
			Array.from(linkParentSiblings).forEach(linkParentSibling => linkParentSibling.classList.remove('is--active'));
			
			// Show currently selected Tab
			tab.classList.add('is--active');
			
			// Hide all other tabs
			Array.from(tabSiblings).forEach(tabSibling => tabSibling.classList.remove('is--active'));
		});
	});
})();