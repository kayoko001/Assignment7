import type { MetMuseumHolding } from '$lib/index';

export async function load({ fetch }) {
const apiUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/11417';
const response = await fetch(apiUrl);
if (!response.ok) {
throw new Error('Response failed!');
}
const data: MetMuseumHolding = await response.json();
return data;
}