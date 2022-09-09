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

	let bookmarked = false;

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
		if (!bookmarked) {
			btnBookmarkProject.style.borderRadius = "40px";
			btnBookmarkProject.style.paddingRight = "50%";
			btnBookmarkProject.children[1].innerHTML = "hi";
			btnBookmarkProject.children[1].style.marginLeft = "10%";
			bookmarked = true;
		} else {
			btnBookmarkProject.style.borderRadius = "50%";
			btnBookmarkProject.style.paddingRight = "0";
			btnBookmarkProject.children[1].innerHTML = "";
			btnBookmarkProject.children[1].style.marginLeft = "0";
			bookmarked = false;
		}
	});

	btnCloseBackProject.addEventListener("click", () => {
		modalBackProject.style.display = "none";
	});
}

loadEvents();
