<script lang="ts">
    import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<style>
	.navlink:hover {
		text-decoration: underline;
	}
	.resultlink:hover {
		text-decoration: underline;
	}
</style>

<header
	style="
		background:#e00000;
		color:white;
		padding:18px 0 22px;
	"
>
	<div style="width:min(1100px, calc(100% - 64px)); margin:0 auto;">
		<h1
			style="
				margin:0 0 14px;
				font-size:48px;
				font-weight:800;
				letter-spacing:-0.02em;
			"
		>
			The Met Inventory Pages
		</h1>

		<nav style="display:flex; gap:34px; flex-wrap:wrap;" aria-label="Primary">
			<a class=navlink href="/" style="color:white; text-decoration:none; font-weight:700; padding:6px 0;"
				>Home</a
			>
			<a class=navlink  href="/wheat-field"
				style="color:white; text-decoration:none; font-weight:700; padding:6px 0;"
				>Wheat Field with Cypresses</a
			>
			<a class=navlink href="/washington"
				style="color:white; text-decoration:none; font-weight:700; padding:6px 0;"
				>Washington Crossing the Delaware</a
			>
		</nav>
	</div>
</header>

<main style="width:min(1100px, calc(100% - 64px)); margin:0 auto; padding:22px 0 64px;">
{@render children()}
</main>

