<script lang="ts">
	export let idx = 0;
	export let handleClick = () => {};
	export let item = '';
	export let link: string | undefined = undefined;

	const handleHover = () => {
		const elems = document.querySelectorAll('.item-normal');

		if (elems)
			elems.forEach((elem) => {
				if (!elem.matches(':hover')) {
					elem.className = 'item-blur';
				}
			});
	};

	const handleMouseLeave = () => {
		const elems = document.querySelectorAll('.item-blur');

		if (elems) elems.forEach((elem) => (elem.className = 'item-normal'));
	};
</script>

<h2 class="item-normal" on:mouseenter={handleHover} on:mouseleave={handleMouseLeave}>
	{#if link}
		<a href={link} target="_blank">{item}</a>
	{:else}
		<div
			style="cursor: pointer;"
			on:click={handleClick}
			role="button"
			tabindex={idx + 1}
			on:keydown={(event) => {
				if (event.key === 'Enter') handleClick();
			}}
		>
			{item}
		</div>
	{/if}
</h2>
