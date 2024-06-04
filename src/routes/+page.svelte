<script lang="ts">
	import Input from '$lib/components/Form/Input.svelte';
	import { npiSchema } from '$lib/schemas/npi';

	let providers: any;
	let firstName = 'john';
	let lastName = 'smith';
	let city = 'New York';
	let state = 'N';
	let errors = {
		state: ''
	};

	const getProviders = async (firstName: string, lastName: string, city: string, state: string) => {
		const validInput = npiSchema.validate({ firstName, lastName, city, state });

		if (validInput.error) {
			errors.state = validInput.error.message;
			return;
		} else {
			errors.state = '';
		}

		const response = await fetch(
			`/npi?firstName=${firstName}&lastName=${lastName}&city=${city}&state=${state}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		providers = await response.json();
		console.log(providers);
	};
</script>

<div>
	<Input bind:value={firstName} name="firstName" label="First Name" />
	<Input bind:value={lastName} name="lastName" label="Last Name" />
	<Input bind:value={city} name="city" label="City" />
	<Input bind:value={state} name="state" label="State" error={errors.state} />
	<button on:click={() => getProviders(firstName, lastName, city, state)}>Get Providers</button>

	{#if providers !== undefined}
		<p>Providers</p>
	{/if}
</div>
