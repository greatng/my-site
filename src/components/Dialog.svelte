<script lang="ts">
	export let isDialogDisplay = false;
	export let handleClick = () => {
		isDialogDisplay = false;
	};

	export let detail: string[] = [];
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
	{#each detail as text}
		<p class="about-me-text">{text}</p>
	{/each}
</div>
