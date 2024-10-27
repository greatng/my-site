<script lang="ts">
	import Item from './Item.svelte';
	import { aboutMe, ITEMS_DETAILS, PageItems, type Items } from './model';
	import './page.css';
	import Dialog from './Dialog.svelte';
	let isDialogDisplay = false;

	let detail: string[] | undefined = [];

	const items: Items[] = [
		{
			item: PageItems.AboutMe,
			handleClick: () => {
				isDialogDisplay = true;
				detail = ITEMS_DETAILS[PageItems.AboutMe];
			}
		},
		{ item: PageItems.Resume, link: 'https://resume.greatng.me' },
		{ item: PageItems.Projects, hidden: true },
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

	<Dialog bind:isDialogDisplay bind:detail />
</div>
