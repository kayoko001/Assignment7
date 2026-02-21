<script lang="ts">
	import type { MetMuseumHolding } from '$lib/index';
    import pd from '$lib/assets/pd.png';
	const { data, pdImage } = $props<{ data?: MetMuseumHolding; pdImage: string }>();
</script>

<main
	style="
		background: white;
		min-height: 100vh;
		padding: 28px 20px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		color: #111;
	"
>
	<div style="max-width: 920px; margin: 0 auto;">
		<h1
			style="
				font-size: 44px;
				line-height: 1.1;
				font-weight: 700;
				margin: 0 0 18px 0;
				letter-spacing: -0.3px;
			"
		>
			{data.title}
		</h1>

		<div style="font-size: 18px; line-height: 1.7;">
			<p style="margin: 0 0 6px 0;"><strong>Medium:</strong> {data.medium || 'Unavailable'}</p>
			<p style="margin: 0 0 6px 0;"><strong>Dimensions:</strong> {data.dimensions || 'Unavailable'}</p>
			<p style="margin: 0 0 6px 0;"><strong>Artist Name:</strong> {data.artistDisplayName || 'Unavailable'}</p>
			<p style="margin: 0 0 6px 0;"><strong>Artist Bio:</strong> {data.artistDisplayBio || 'Unavailable'}</p>
			<p style="margin: 0 0 6px 0;"><strong>Department:</strong> {data.department || 'Unavailable'}</p>
			<p style="margin: 0 0 6px 0;"><strong>Repository:</strong> {data.repository || 'Unavailable'}</p>

			{#if data.isPublicDomain}
				<div style="margin-top: 8px; display: flex; align-items: center; gap: 10px;">
					<strong>Public Domain</strong>
					<img src={pdImage} alt="Public Domain" style="height: 18px; width: auto;" />
				</div>
			{/if}
		</div>

		<div style="margin-top: 26px; display: flex; justify-content: center;">
			{#if data.primaryImage && data.primaryImage.trim() !== ''}
				<img
					src={data.primaryImage}
					alt={data.title}
					style="
						max-width: 640px;
						width: 90%;
						height: auto;
					"
				/>
			{:else}
				<div
					style="
						max-width: 640px;
						width: 90%;
						border: 12px solid #000;
						background: #f6f6f6;
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 44px 18px;
						text-align: center;
					"
				>
					<p style="margin: 0; font-size: 16px; color: #444;">
						This item does not provide a primary image in the Met API.
					</p>
				</div>
			{/if}
</div>
	</div>
</main>