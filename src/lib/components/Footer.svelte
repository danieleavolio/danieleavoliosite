<script>
import { darkModeStore } from "$lib/stores/filters";


</script>


<footer class="{$darkModeStore == 'enabled' ? 'dark' : 'light'}">
    © 2022 All rights reserved. Design & Code by Daniele Avolio.
</footer>
<style>

footer{
    font-weight: 500;
    text-align: center;
    margin: 2em;
}
</style>