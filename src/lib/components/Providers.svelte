<script lang="ts">
	import Card from './Form/Card.svelte';
	import { type Provider } from '../../types/npi.types';
	export let providers: Provider[];
</script>

{#if providers !== undefined}
	<div class="providers_container">
		<h1>Providers</h1>
		<div class="card_container">
			{#each providers as provider}
				<Card {provider} />
			{/each}
		</div>
	</div>
{:else}
	<div class="providers_container"><h1>No providers found</h1></div>
{/if}

<style>
	.providers_container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
	.card_container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	div {
		margin: 10px;
	}
</style>
