<script lang="ts">
	let providers: any;
	let firstName = '';
	let lastName = 'Doe';
	let city = 'New York';
	let state = 'NY';

	const getProviders = async () => {
		const response = await fetch(
			`/npi?firstName=${firstName}&lastName=${lastName}&city=${city}&state=${state}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
				// body: JSON.stringify({ firstName: 'John', lastName: 'Doe', city: 'New York', state: 'NY' })
			}
		);
		providers = await response.json();
		console.log(providers);
		// console.log(response);
	};
</script>

<button on:click={getProviders}>Get Providers</button>

{#if providers !== undefined}
	<p>Providers</p>
{/if}
