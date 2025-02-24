<script lang="ts">
	import Item from './Item.svelte';
	import { Details, ITEMS_DETAILS, PageItems, type Items } from './model';
	import './page.css';
	import Dialog from './Dialog.svelte';
	let isDialogDisplay = false;

	let details: Details[] | undefined = [];

	const handleClick = (item: PageItems) => {
		isDialogDisplay = true;
		details = ITEMS_DETAILS[item];
	};

	const items: Items[] = [
		{ item: PageItems.AboutMe, handleClick: () => handleClick(PageItems.AboutMe) },
		{ item: PageItems.Resume, link: 'https://resume.greatng.me' },
		{ item: PageItems.Projects, handleClick: () => handleClick(PageItems.Projects) },
		{ item: PageItems.GitHub, link: 'https://github.com/greatng' }
	];
</script>

<div class="main">
	<h1><span class="my-name">PAPHAWIT'S</span> SITE</h1>
	{#each items as item, idx}
		{#if !item.hidden}
			<Item {...{ ...item, idx }} />
		{/if}
	{/each}

	<Dialog bind:isDialogDisplay bind:details />
</div>
