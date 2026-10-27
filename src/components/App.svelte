<script lang="ts">
	import './page.css';
</script>

<svelte:head>
	<title>Paphawit — Senior Software Engineer</title>
	<meta
		name="description"
		content="Paphawit (Great), Senior Software Engineer at LSEG. Exploring web development, DevOps, and cloud computing. Discover my work and get in touch."
	/>
	<meta name="theme-color" content="#f4f2eb" />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>
<div class="site-shell" id="top">
	<header class="site-header">
		<a class="wordmark" href="#top" aria-label="Paphawit home">pg<span class="brand-dot">.</span></a
		>
		<nav aria-label="Main navigation">
			<a href="#about">About</a>
			<a href="#work">Work</a>
			<a class="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗︎</span></a>
		</nav>
	</header>

	<main id="main">
		<section class="hero" aria-labelledby="hero-title">
			<div class="hero-copy">
				<p class="eyebrow">
					<span class="tiny-dot"></span> SENIOR SOFTWARE ENGINEER
					<span class="edition">/ PORTFOLIO</span>
				</p>
				<h1 id="hero-title">
					Thoughtful code.<br />Meaningful<br /><span class="serif-word">possibilities.</span>
				</h1>
				<div class="hero-intro">
					<span class="short-rule" aria-hidden="true"></span>
					<p>
						I’m Paphawit. You can call me <strong>Great.</strong><br />A software engineer with a
						curious mind<br class="desktop-break" /> and a drive to keep building.
					</p>
				</div>
				<a class="text-link" href="#work">Explore my work <span aria-hidden="true">↘︎</span></a>
			</div>
			<div class="hero-art" aria-hidden="true">
				<div class="art-frame">
					<div class="sun"></div>
					<div class="horizon horizon-one"></div>
					<div class="horizon horizon-two"></div>
					<div class="horizon horizon-three"></div>
					<div class="art-column"></div>
					<div class="art-caption">BUILD. LEARN. REFINE.</div>
					<span class="vertical-japanese" lang="ja">日々、学ぶ。</span>
				</div>
				<div class="art-footer">
					<span>01 — A WORK IN PROGRESS</span><span lang="ja">余白</span>
				</div>
			</div>
			<div class="hero-bottom">
				<span>ENGINEERING WITH INTENTION</span><a href="#about"
					>SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a
				>
			</div>
		</section>

		<section class="about section-grid" id="about" aria-labelledby="about-title">
			<div class="section-label"><span>01 / ABOUT</span><span lang="ja">私について</span></div>
			<div class="section-content">
				<h2 id="about-title">
					Curiosity is the<br /><span class="serif-word">starting point.</span>
				</h2>
				<div class="about-columns">
					<p>
						I’m a self-taught software engineer who loves learning new things. Challenging problems
						are an invitation to explore, understand, and find a way forward.
					</p>
					<p>
						My interests span web development, DevOps, and cloud computing. I enjoy connecting ideas
						across disciplines and adapting to new environments.
					</p>
				</div>
				<div class="interests" aria-label="Interests">
					<span>Web development</span><span>DevOps</span><span>Cloud computing</span>
				</div>
				<p class="experience-summary">
					Senior Software Engineer at LSEG, with experience leading delivery and technical execution
					for two core financial products. Now building a new flagship product.
				</p>
				<div class="experience">
					<div>
						<span class="eyebrow">EXPERIENCE</span>
						<h3>London Stock Exchange Group</h3>
						<p>Senior Software Engineer</p>
					</div>
					<a
						class="text-link"
						href="https://www.linkedin.com/in/paphawit/"
						target="_blank"
						rel="noreferrer">View LinkedIn <span aria-hidden="true">↗︎</span></a
					>
				</div>
			</div>
		</section>

		<section class="work section-grid" id="work" aria-labelledby="work-title">
			<div class="section-label"><span>02 / SELECTED WORK</span><span lang="ja">つくる</span></div>
			<div class="section-content">
				<div class="section-heading">
					<h2 id="work-title">Ideas, <span class="serif-word">made real.</span></h2>
					<span class="work-count">[ 01 ]</span>
				</div>
				<a
					class="project-card"
					href="https://goodbuy.greatng.me"
					target="_blank"
					rel="noreferrer"
					aria-label="Visit Goodbuy price comparison (opens in a new tab)"
				>
					<div class="project-visual" aria-hidden="true">
						<span class="project-corner">A PERSONAL PROJECT</span>
						<div class="goodbuy-logo">goodbuy<span>↗︎</span></div>
						<div class="project-visual-footer">
							<span>FIND YOUR NEXT GOOD BUY.</span><span>比較 / COMPARE</span>
						</div>
					</div>
					<div class="project-details">
						<div>
							<span class="eyebrow">WEB APPLICATION</span>
							<h3>Goodbuy</h3>
							<p>Price comparison, in one place.</p>
						</div>
						<span class="project-arrow" aria-hidden="true">↗︎</span>
					</div>
				</a>
				<a
					class="text-link github-link"
					href="https://github.com/greatng"
					target="_blank"
					rel="noreferrer">More on GitHub <span aria-hidden="true">↗︎</span></a
				>
			</div>
		</section>

		<section class="contact" id="contact" aria-labelledby="contact-title">
			<div class="contact-top">
				<span class="eyebrow">03 / GET IN TOUCH</span><span lang="ja">はじめまして。</span>
			</div>
			<h2 id="contact-title">
				Good things start<br />with a <span class="serif-word">conversation.</span>
			</h2>
			<div class="contact-bottom">
				<p>Have an interesting idea, a challenging problem,<br />or just want to say hello?</p>
				<a
					class="contact-button"
					href="https://www.linkedin.com/in/paphawit/"
					target="_blank"
					rel="noreferrer">Let’s connect <span aria-hidden="true">↗︎</span></a
				>
			</div>
		</section>
	</main>

	<footer class="site-footer">
		<a class="wordmark" href="#top" aria-label="Back to top">pg<span class="brand-dot">.</span></a
		><span>PAPHAWIT · ALWAYS LEARNING</span>
		<div>
			<a href="https://github.com/greatng" target="_blank" rel="noreferrer">GitHub ↗︎</a><a
				href="https://resume.greatng.me"
				target="_blank"
				rel="noreferrer">Résumé ↗︎</a
			><a href="https://www.linkedin.com/in/paphawit/" target="_blank" rel="noreferrer"
				>LinkedIn ↗︎</a
			>
		</div>
	</footer>
</div>
