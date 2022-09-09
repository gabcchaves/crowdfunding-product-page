"use strict";

/* Assign elements their events */
function loadEvents() {
	const btnMenu = document.querySelector("#menu-btn");
	const btnBackProject = document.querySelector("#back-project-btn");
	const btnCloseBackProject = document.querySelector("#modal-back-project .close-modal-btn");
	const btnBookmarkProject = document.querySelector("#bookmark-project-btn");

	const menuContent = document.querySelector(".main-header > nav");
	const modalBackProject = document.querySelector("#modal-back-project");
	const modalCompleted = document.querySelector("#modal-completed");

	// Toggle menu on mobile devices
	btnMenu.addEventListener("click", () => {
		if (menuContent.style.display != "flex") {
			menuContent.style.display = "flex";
			menuBtn.firstElementChild.src = "images/icon-close-menu.svg";
		} else {
			menuContent.style.display = "none";
			menuBtn.firstElementChild.src = "images/icon-hamburger.svg";
		}
	});

	// Back project
	btnBackProject.addEventListener("click", () => {
		if (modalBackProject.style.display != "grid") {
			modalBackProject.style.display = "grid";
		} else {
			modalBackProject.style.display = "none";
		}
	});

	// Bookmark project
	btnBookmarkProject.addEventListener("click", () => {
		btnBookmarkProject.style.paddingRight = "50%";
		btnBookmarkProject.style.borderRadius = "40px";
	});
}

loadEvents();
