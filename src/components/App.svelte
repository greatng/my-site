<script lang="ts">
	import Item from './Item.svelte';
	import AboutMe from './AboutMe.svelte';
	import type { Items } from './model';
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
	const items: Items[] = [
		{
			item: 'ABOUT ME',
			handleClick: () => {
				const elem = document.querySelector('.about-me');

				if (elem) elem.className = 'about-me about-me-show';
			}
		},
		{ item: 'RESUME', link: 'https://resume.greatng.me' },
		{ item: 'PROJECTS', hidden: true },
		{ item: 'GITHUB', link: 'https://github.com/greatng' }
	];
</script>

<div class="main">
	<AboutMe />
	<h1><span class="my-name">GREAT'S</span> SITE</h1>
	{#each items as item, idx}
		{#if !item.hidden}
			<Item {...{ ...item, ...controller, idx }} />
		{/if}
	{/each}
</div>
