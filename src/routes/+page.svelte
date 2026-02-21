<script lang="ts">
	import { Button } from '$lib/components/ui/button'; 
	import { Input } from '$lib/components/ui/input'; 
	import type {MetMuseumHolding} from '$lib/index'

	let searchStatus = $state(false);
	let searchTerm = $state("");

	let results = $state<number[]>([]);

	async function searchMet() {
		if (!searchTerm) return 

		const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${encodeURIComponent(searchTerm)}`;

		try {
			const response = await fetch(url);
			const data: { objectIDs: number[] } = await response.json();
			results = data.objectIDs.slice(0, 10);
			searchStatus = true; 
		} catch (error) {
			console.error("Search failed:", error);
			results = [];
			searchStatus = false;
		}
	}

	async function getObjectData(id: number) {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Search Object ${id} Failed`);

    const data:MetMuseumHolding  = (await res.json());
    return data;
  }

</script>


<h1 class="text-2xl font-bold">Welcome to the Met Inventory Info</h1>
<p>This website displays information on two artworks at the Metropolitan Museum of Art:</p>
<div class="mt-4">
	<ol style="margin:0 0 12px; padding-left:22px;">
		<li><a href="/wheat-field">1. Wheat Field with Cypresses by Vincent van Gogh</a></li>
		<li><a href="/washington">2. Washington Crossing the Delaware by Emanuel Leutze</a></li>
	</ol>
</div>
<div class="max-w-3xl">
	<p style="line-height:1.55; margin:0 0 14px;">
		You can learn about the artist, medium, dimensions, and location of the artworks, and check out more
		information about them on the official Met website. Enjoy the exploration!
	</p>

<div class="mt-6 flex flex-col gap-4">
<Input
		type="text"
		bind:value={searchTerm}
		onkeydown={(e) => e.key === 'Enter' && searchMet()}
		placeholder="Search for artworks by keyword (limit 10) ..."
		class="
			h-12
			w-3/4
			rounded-md
		    border-slate-300
			px-4
			text-base
			placeholder-slate-400
			transition
			hover:shadow-md
		"
/>
	
<Button 
	onclick={searchMet}
	class="w-fit bg-blue-600 hover:bg-blue-700 text-white">
Search
</Button>
 {#if results.length === 0}
    <p class="text-slate-500">No results found. Try searching for "sunflower" or "monet".</p>
  {:else}
  	<div class="">
        {#each results as id (id)}
            {#await getObjectData(id)}
              <p class="mt-2 text-slate-400">Loading artwork details...</p>
            {:then objectData}
			<ol class= "">
              <li class=""><a
                href="/{id}"
                class="mt-2 block text-base font-semibold text-blue-600 hover:underline"
              >
                {objectData.title || '(Untitled)'}
              </a></li>
 			</ol>
            {:catch error}
              <p class="mt-2 text-sm text-red-600">
                Failed to load details
              </p>
            {/await}
        {/each}
    </div>
  {/if}
</div>
</div>