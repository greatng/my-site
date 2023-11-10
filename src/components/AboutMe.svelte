<script lang="ts">
	const handleClick = () => {
		const elem = document.querySelector('.about-me');

		if (elem) elem.className = 'about-me';
	};

	const detail = `
		Hi, I'm Paphawit but you can call me Great.\t
		I'm software engineer who love to learn new things, all of my skills are self-taught.\t
		I'm currently working at Refinitiv as a software engineer.\t
		I'm interested in web development, devops, and cloud computing.\t
		I love to tackle challenging problems and learn new things.\t
		I'm a fast learner and I can adapt to new environment quickly.`.toLocaleUpperCase();
</script>

<div class="about-me" on:click={handleClick}>
	<p class="about-me-text">{detail}</p>
</div>
