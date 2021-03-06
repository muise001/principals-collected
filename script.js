const data = [
	{
		user: 'vandijkstef',
		folder: 'vandijkstef',
		sourceFile: 'index.html',
		repoUrl: '',
		branch: '',
		principals: [{
			id: 1,
			desc: 'Text about p1'
		}, {
			id: 4,
			desc: 'Text about p4'
		}, {
			id: 9,
			desc: 'Text about p9'
		}]
	},
	{
		user: 'vandijkstef',
		folder: 'vandijkstef',
		sourceFile: 'index.html',
		repoUrl: '',
		branch: '',
		principals: [{
			id: 1,
			desc: 'Text about p1'
		}, {
			id: 3,
			desc: 'Text about p4'
		}, {
			id: 9,
			desc: 'Text about p9'
		}]
	},
	{
		user: 'vandijkstef',
		folder: 'vandijkstef',
		sourceFile: 'index.html',
		repoUrl: '',
		branch: '',
		principals: [{
			id: 1,
			desc: 'Text about p1'
		}, {
			id: 3,
			desc: 'Text about p4'
		}, {
			id: 9,
			desc: 'Text about p9'
		}]
	}
]

const principals = [
	{
		id: 1,
		title: 'Clarity is job #1'
	},
	{
		id: 2,
		title: 'Interfaces exist to enable interaction'
	},
	{
		id: 3,
		title: 'Conserve attention at all costs'
	}
	,
	{
		id: 4,
		title: 'Keep users in control'
	}
	,
	{
		id: 5,
		title: 'Direct manipulation is best'
	}
	,
	{
		id: 6,
		title: 'One primary action per screen'
	}
	,
	{
		id: 7,
		title: 'Keep secondary actions secondary'
	}
	,
	{
		id: 8,
		title: 'Provide a natural next step'
	}
	,
	{
		id: 9,
		title: 'Appearance follows behavior'
	}
	,
	{
		id: 10,
		title: 'Consistency matters'
	}
	,
	{
		id: 11,
		title: 'Strong visual hierarchies work best'
	}
	,
	{
		id: 12,
		title: 'Smart organization reduces cognitive load'
	}
	,
	{
		id: 13,
		title: 'Highlight, don\'t determine, with color'
	}
	,
	{
		id: 14,
		title: 'Progressive disclosure'
	}
	,
	{
		id: 15,
		title: 'Interfaces exist to enable interaction'
	}
	,
	{
		id: 16,
		title: 'A crucial moment: the zero state'
	}
	,
	{
		id: 17,
		title: 'Great design is invisible'
	}
	,
	{
		id: 18,
		title: 'Build on other design disciplines'
	}
	,
	{
		id: 19,
		title: 'Interfaces exist to be used'
	}

]

const RenderStuff = () => {
	// data.forEach((item) => {
	// 	const frame = document.createElement('iframe');
	// 	frame.setAttribute('src', `${item.folder}/${item.sourceFile}`);
	// 	document.body.appendChild(frame);
	// });
	const main = document.createElement('main');
	
	principals.forEach((principal) => {
		// Create the section
		const section = document.createElement('section');

		// Add the title
		const title = document.createElement('h1');
		title.innerText = principal.title;
		section.appendChild(title);

		// Add a section for the items
		const framesSection = document.createElement('section');
		data.forEach((item) => {
			item.principals.forEach((itemPrincipal) => {
				if (itemPrincipal.id === principal.id) {
					const frame = document.createElement('iframe');
					const div = document.createElement('div');
					div.classList.add('iframe-wrapper')
					frame.setAttribute('src', `${item.folder}/${item.sourceFile}`);
					div.appendChild(frame);
					framesSection.appendChild(div);
				};
			})
		});
		section.appendChild(framesSection);
		main.appendChild(section);
		document.body.appendChild(main);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	RenderStuff();
	console.log('hi');
});

