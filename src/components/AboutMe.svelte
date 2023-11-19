<script lang="ts">
	const handleClick = () => {
		const elem = document.querySelector('.about-me');

		if (elem) elem.className = 'about-me';
	};

	const detail = [
		`Hi, I'm Paphawit but you can call me Great.`,
		`I'm software engineer who love to learn new things, all of my skills are self-taught.`,
		`I'm currently working at Refinitiv as a software engineer.`,
		`I'm interested in web development, devops, and cloud computing.`,
		`I love to tackle challenging problems and learn new things.`,
		`I'm a fast learner and I can adapt to new environment quickly.`
	];
</script>

<div
	class="about-me"
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
