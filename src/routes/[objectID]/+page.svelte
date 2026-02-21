<script lang="ts">
	import type { MetMuseumHolding } from '$lib/index';
	import pd from '$lib/assets/pd.png';
	import ArtworkDetail from '$lib/components/artwork-detail.svelte';

	const { data } = $props<{ data: MetMuseumHolding }>();
</script>

<ArtworkDetail {data} pdImage={pd} />