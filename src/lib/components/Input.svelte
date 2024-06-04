<script lang="ts">
	interface FormEvent<T = HTMLElement> extends Event {
		currentTarget: EventTarget & T;
	}

	// Required properties
	export let name: string;
	export let label: string;

	// Optional properties
	export let value = '';
	export let type = 'text';
	export let autocomplete = 'off';
	export let error = '';

	const handleInput = (e: FormEvent<HTMLInputElement>) => {
		value = e.currentTarget.value;
	};
</script>

<div class="field__wrapper">
	<div class="field" class:error class:empty={!value}>
		<input id={name} {type} {autocomplete} {name} {value} on:input={handleInput} placeholder=" " />
		<label for={name}>{label}</label>
	</div>
	{#if error}
		<div class="field__error">
			{error}
		</div>
	{/if}
</div>

<style>
	.field {
		position: relative;
		width: 100%;
		border: 1px solid hsla(0, 0%, 65%, 1);
		border-radius: 0px;
		height: 56px;
	}

	.field.error {
		border-color: hsla(356, 68%, 58%, 1);
	}

	input:-webkit-autofill + label,
	.field input:focus + label,
	.field:not(.empty) label,
	input:not(:placeholder-shown) + label,
	.field:not(.error) input:focus + label {
		left: 8px;
		padding: 0 2px;
		top: 0;
		font-weight: 700;
	}

	.field.error label,
	.field__error {
		color: hsla(356, 68%, 58%, 1);
		height: 36px;
	}

	.field input {
		background: transparent;
		appearance: none;
		width: 100%;
		border: none;
		outline: none;
		padding: 16px 12px;
		font-size: 16px;
		line-height: 22px;
		z-index: 1;
		transition: border 250ms;
		border-radius: 4px;
	}

	.field input::placeholder {
		visibility: hidden;
	}

	.field__error {
		font-size: 14px;
		line-height: 13.2px;
		font-weight: 600;
		margin-top: 0px;
		letter-spacing: 0.5px;
	}

	label {
		cursor: text;
		white-space: nowrap;
		background: white;
		color: rgba(76, 76, 76, 1);
		font-size: 16px;
		position: absolute;
		top: 50%;
		left: 8px;
		transform: translateY(-50%);
		transition: all 250ms;
	}
</style>
