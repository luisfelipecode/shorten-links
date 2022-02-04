/*
 salvar link no storage
 deletar link no storage
*/
export async function getLinksSave(key) {
	const myLinks = await localStorage.getItem(key);
	let linksSaves = JSON.parse(myLinks) || [];
	return linksSaves;
}

export async function saveLink(key, newLink) {
	let linksStored = await getLinksSave(key);
	const hasLink = linksStored.some((link) => link.id === newLink.id);
	if (hasLink) {
		console.log('Link já existe');
		return;
	}

	linksStored.push(newLink);
	await localStorage.setItem(key, JSON.stringify(linksStored));
	console.log('Link salvo');
}

export function deleteLink(Links, id) {
	let myLinks = Links.filter((item) => {
		return item.id !== id;
	});
	localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
	console.log('link deletado');

	return myLinks;
}
