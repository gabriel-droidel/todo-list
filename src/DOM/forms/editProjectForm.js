function editProjectForm(project) {
	// edit the project form and send an event with the input as the name of the project
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
	nameInput.setAttribute('value', project.name);

	// Add Button
	const submitProjectBtn = document.createElement('button');
	submitProjectBtn.textContent = 'Edit';
	submitProjectBtn.setAttribute('type', 'submit'); // Make it a submit button

	submitProjectBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const event = new CustomEvent('projectEdited', {
			// event to trigger when a project is edited
			detail: {
				name: nameInput.value,
				id: project.id,
			},
		});
		console.log(event.detail);
		if (nameInput.value) {
			document.dispatchEvent(event);
			dialog.close();
		}
	});

	// Cancel Button
	const cancelBtn = document.createElement('button');
	cancelBtn.textContent = 'Cancel';
	cancelBtn.addEventListener('click', () => {
		// Close the dialog without deleting anything
		dialog.close();
	});

	// Close the dialog on pressing ESC key without triggering submit or delete
	dialog.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			dialog.close();
		}
	});

	form.append(nameInput, submitProjectBtn, cancelBtn);
	dialog.appendChild(form);
}

export default editProjectForm;
