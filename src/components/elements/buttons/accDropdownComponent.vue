<script>
export default {
  mounted() {
    let loggedIn = Math.random() + .5 >> 0;
  }
}
</script>

<template>
    <div class="dropdown">
        <a class="hf-txt-lila text-decoration-none" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style="font-size: 1.2rem;">
            <i class="material-symbols-outlined hf-txt-lila pb-1" style="font-size: 1.25rem; vertical-align: middle;">manage_accounts</i>
            {{ $t('Mein Account')}}
            <i class="material-symbols-outlined hf-txt-lila" style="font-size: 1.1rem; vertical-align: middle">expand_more</i>

        </a>
        <ul class="dropdown-menu darkback" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item" href="#">Mein Profil</a></li>
            <li><a class="dropdown-item" href="#">Nachichten</a></li>
            <li><a class="dropdown-item" href="#">Favoriten</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
        </ul>
    </div>
</template>

<style>
#dropdownMenuButton2, i
{
    user-select: none;
    color: var(--hf-lila-s);   
    transition: .2s;
}
#dropdownMenuButton2:hover, i:hover
{
    color: var(--hf-lila-op); 
    transition: .2s;
}
.darkback
{
    background: var(--hf-dark-l) !important;
    color: var(--hf-grey-light) !important;
}
.dropdown-item
{
    color: var(--hf-grey-light) !important;
}
.dropdown-item:hover
{
     background: var(--hf-dark-s) !important;
}
.dropdown-divider
{
    background: var(--hf-red-pink) !important;
}
</style>