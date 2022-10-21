<script>


	import { darkModeStore } from '$lib/stores/filters';
	export let title = 'Appunto';
	export let description = 'Descrizione';
	export let icon = 'email';
	export let resource = '';
	import AnimationButton from './fundamentals/AnimationButton.svelte';
</script>

<div class="flex gap-3 {$darkModeStore == 'enabled' ? 'dark-container' : 'light-container'}">
	<div class="flex basis-1/3 w-fit  justify-center items-center rounded-md">
		<span
			class="material-icons {$darkModeStore == 'enabled'
				? 'dark-tag'
				: 'light-tag'} p-12 rounded-md"
		>
			{icon}</span
		>
	</div>
	<div id="content" class="flex flex-col basis-2/3 py-5">
		<h3 class="text-xl">
			{title}
		</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias odit alias facere
			saepe, quas sint, repellat inventore ipsam quos suscipit voluptatibus, qui error itaque veniam
			rerum laboriosam nihil. Dolores.
		</p>
        <div id="buttons">
		<AnimationButton text={"Esempio"} icon={'file'} href="ciao" />
	</div>
</div>
</div>

<style>
	.dark-tag {
		background-color: var(--dark-primary);
		color: var(--light-text);
	}

	.light-tag {
		background-color: var(--light-primary);
		color: var(--light-onPrimary);
	}
</style>
