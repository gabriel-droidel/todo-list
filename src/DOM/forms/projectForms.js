function getProjectForm() {
	// generate the project form and send an event with the input as the name of the project
	const dialog = document.createElement('dialog');
	dialog.classList.add('project-dialog');
	const form = document.createElement('form');

	document.body.appendChild(dialog);
	dialog.showModal(); // Show the dialog when needed

	// Name input
	const nameInput = document.createElement('input');
	nameInput.setAttribute('type', 'text');
	nameInput.setAttribute('name', 'projectName');
	nameInput.setAttribute('placeholder', 'Project Name');

	// Add Button
	const submitProjectBtn = document.createElement('button');
	submitProjectBtn.textContent = 'Add Project';

	submitProjectBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const event = new CustomEvent('projectAdded', {
			// event to trigger when a project is added
			detail: {
				name: nameInput.value,
			},
		});
		if (nameInput.value) {
			document.dispatchEvent(event);
			dialog.close();
		}
	});

	// Cancel Button
	const cancelBtn = document.createElement('button');
	cancelBtn.textContent = 'Cancel';
	cancelBtn.addEventListener('click', () => {
		dialog.close();
	});

	form.append(nameInput, submitProjectBtn, cancelBtn);
	dialog.appendChild(form);
}

export default getProjectForm;
