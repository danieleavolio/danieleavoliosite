<script>
import { darkModeStore } from "$lib/stores/filters";


	export let skill;
</script>


<div class="skill">
    <div class="icon">
        <p class="{$darkModeStore == 'enabled' ? 'dark-primary-highlited' : 'light-primary-highlited'} material-icons">{skill.icon}</p>
    </div>
    <p class="title">
        {skill.name}
    </p>
</div>
<style>
    .skill{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
    }

    .material-icons{
        font-size: 2em;
        padding: 0.7em;
        border-radius: 50%;
    }

    .title{
        font-weight: 600;
        text-align: center;
    }

</style>
