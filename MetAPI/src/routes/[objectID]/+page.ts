import type { MetMuseumHolding } from '$lib/index';

export async function load ({ fetch, params }) {
	const objectID = Number(params.objectID)

	const apiUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;
	const response = await fetch(apiUrl);

	if (!response.ok) {
		throw new Error('Response failed!');
	}

	const data: MetMuseumHolding = await response.json();
	return data;
};