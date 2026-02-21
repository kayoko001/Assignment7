<script lang="ts">
import type { MetMuseumHolding } from '$lib/index';
const { data } = $props<{ data: MetMuseumHolding }> ();
import pd from '$lib/assets/pd.png';
import ArtworkDetail from '$lib/components/artwork-detail.svelte';
</script>

<ArtworkDetail {data} pdImage={pd} />
