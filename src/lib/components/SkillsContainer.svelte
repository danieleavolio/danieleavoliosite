<script>
	import { darkModeStore } from '$lib/stores/filters';

	import SkillComponent from './SkillComponent.svelte';

	let skills = [
		{
			name: 'Front-End',
			icon: 'computer'
		},
		{
			name: 'Responsive Design',
			icon: 'smartphone'
		},
		{
			name: 'SSR',
			icon: 'dns'
		},

		{
			name: 'Software Development',
			icon: 'code'
		},
		{
			name: 'English B2',
			icon: 'language'
		},
        {
            name: 'Future skill',
            icon: 'question_mark'
        }
	];
</script>

<div class="skills-container">
	<h1 class={$darkModeStore == 'enabled' ? 'dark-primary-highlited' : 'light-primary-highlited'}>
		Skills e competenze principali
	</h1>
	<div class="{$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'} skills-list">
		{#each skills as skill (skill.icon)}
			<SkillComponent {skill} />
		{/each}
	</div>
</div>

<style>
	h1 {
		padding: 0 0.1em;
		text-align: center;
		margin: 1em;
	}
	.skills-container {
		width: 90vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 1em;
	}

	.skills-list {
		width: 100%;
        display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}

    @media (max-width:750px){
        .skills-list{
            display: grid;
            place-items:center;
            grid-template-columns: 1fr ;
        }
    }
</style>
