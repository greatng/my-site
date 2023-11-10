<script lang="ts">
	import Item from './Item.svelte';
	import type { IItems } from './model';
	import './page.css';

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

	const controller = { handleHover, handleMouseLeave };
	const items: IItems[] = [
		{ item: 'ABOUT ME', hidden: true },
		{ item: 'RESUME', link: 'https://resume.greatng.me' },
		{ item: 'PROJECTS', hidden: true },
		{ item: 'GITHUB', link: 'https://github.com/greatng' }
	];
</script>

<div class="main">
	<h1><span class="my-name">PAPHAWIT'S</span> SITE</h1>
	{#each items as item}
		{#if !item.hidden}
			<Item {...{ ...item, ...controller }} />
		{/if}
	{/each}
</div>
