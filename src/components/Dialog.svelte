<script lang="ts">
	import { Details } from './model';

	export let isDialogDisplay = false;
	export let handleClick = () => {
		isDialogDisplay = false;
	};

	export let details: Details[] = [];
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
	class="about-me {isDialogDisplay ? 'about-me-show' : ''}"
	on:click={handleClick}
	on:keydown={(event) => {
		if (event.key === 'Enter') handleClick();
	}}
	role="contentinfo"
>
	{#each details as detail}
		<a href={detail.link}><p class="about-me-text">{detail.item}</p></a>
	{/each}
</div>
