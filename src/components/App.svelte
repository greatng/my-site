<script lang="ts">
	import Item from './Item.svelte';
	import { ITEMS_DETAILS, PageItems } from './model';
	import type { Details, Items } from './model';
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

<div class="noise">
	<div class="main {isDialogDisplay ? 'main-blur' : ''}">
		<h1>PAPHAWIT'S site</h1>
		{#each items as item, idx}
			{#if !item.hidden}
				<Item {...{ ...item, idx }} />
			{/if}
		{/each}
	</div>

	<Dialog bind:isDialogDisplay bind:details />
</div>
