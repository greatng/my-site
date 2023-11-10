<script lang="ts">
	export let handleHover = () => {};
	export let handleMouseLeave = () => {};
	export let handleClick = () => {};
	export let item = '';
	export let link: string | undefined = undefined;
</script>

<h2 class="item-normal" on:mouseenter={handleHover} on:mouseleave={handleMouseLeave}>
	{#if link}
		<a href={link}>{item}</a>
	{:else}
		<span on:click={handleClick}>{item}</span>
	{/if}
</h2>
