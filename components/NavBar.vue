<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">
                <NuxtLink class="navbar-brand" to="/">
                    <img src="~~/assets/images/temponetwork_logo.png" alt="店舗ネットワーク（テンポネットワーク TEMPO NETWORK）" class="image logo">
                </NuxtLink>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">メニュー</b-nav-item>
                    <b-nav-item to="/area_search">工事会社を探す</b-nav-item>
                    <b-nav-item to="/area_search">不動産会社を探す</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .nav-padding {
        padding: 1.5rem;
        background-color: black
    }
    .nav-left {
        margin-left: auto;
    }
    .logo {
        max-width: 220px;
    }

    @media only screen and (max-width: 600px) {
        .logo {
            width: 100%;
            height: 100%;
        }
    }
</style>