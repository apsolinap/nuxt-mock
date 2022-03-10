<template>
    <div class="paginator">
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true"><</a>
            </li>
            <li class="page-item"><NuxtLink class="page-link" :to="`/`">1</NuxtLink></li>
            <li class="page-item"><NuxtLink class="page-link" :to="`/`">2</NuxtLink></li>
            <li class="page-item"><NuxtLink class="page-link" :to="`/`">3</NuxtLink></li>
            <li class="page-item">
                <NuxtLink class="page-link" to="#">></NuxtLink>
            </li>
        </ul>
    </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .paginator {
        padding-top:10px;
        margin: 0;
    }

</style>