<script lang="ts">
	import { type Provider } from '../../types/npi.types';
	export let provider: Provider;
</script>

<div class="card">
	<div class="container">
		{#if provider.enumeration_type === 'NPI-1'}
			<h4><b>{provider.basic.first_name} {provider.basic.last_name}</b></h4>
			<p>Credentials: {provider.basic.credential || 'n/a'}</p>
			<p>Gender {provider.basic.gender || 'n/a'}</p>
		{:else}
			<h4><b>{provider.basic.organization_name} </b></h4>
		{/if}
		<p>{provider.taxonomies[0].desc || ''}</p>
		<h2>Locations</h2>
		{#each provider.addresses as address, index}
			{#if index === 0}
				<h5>Primary location</h5>
			{:else}
				<h5>Mailing Address</h5>
			{/if}
			<p>{address.address_1}</p>
			<p>{address.city}, {address.state} {address.postal_code}</p>
			<p>{address.telephone_number || ''}</p>
		{/each}
	</div>
</div>

<style>
	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		border-radius: 5px;
		width: 300px;
		height: 600px;
	}

	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	.container {
		padding: 2px 16px;
	}

	div {
		margin: 10px;
	}
</style>
