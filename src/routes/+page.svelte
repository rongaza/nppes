<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Providers from '$lib/components/Providers.svelte';
	import { npiSchema } from '$lib/schemas/npi';

	let providers: any;
	let firstName = 'do*';
	let lastName = 'jo*';
	let city = 'new york';
	let state = 'ny';
	let errors = {
		state: '',
		city: ''
	};

	const getProviders = async (firstName: string, lastName: string, city: string, state: string) => {
		const validInput = npiSchema.validate(
			{ firstName, lastName, city, state },
			{ abortEarly: false }
		);

		if (validInput.error) {
			const errorMessage = validInput.error.message.toLowerCase();
			errors.city = errorMessage.includes('city') ? validInput.error.message : '';
			errors.state = errorMessage.includes('state') ? validInput.error.message : '';
			return;
		} else {
			errors.state = '';
			errors.city = '';
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
		const data = await response.json();
		console.log(data);
		providers = data.results;
	};
</script>

<div>
	<div class="search_fields">
		<div><Input bind:value={firstName} name="firstName" label="First Name" /></div>
		<div><Input bind:value={lastName} name="lastName" label="Last Name" /></div>
		<div><Input bind:value={city} name="city" label="City" error={errors.city} /></div>
		<div><Input bind:value={state} name="state" label="State" error={errors.state} /></div>
	</div>
	<div class="search_button">
		<button on:click={() => getProviders(firstName, lastName, city, state)}>Get Providers</button>
	</div>

	<Providers {providers} />
</div>

<style>
	.search_fields {
		display: flex;
		flex-direction: row;
		justify-content: center;
		/* height: 100px; */
	}

	.search_button {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	div {
		margin: 10px;
	}
</style>
