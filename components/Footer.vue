<template>
    <div>
        <footer class="nb-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="about">
                        <NuxtLink class="footer-brand" to="/">
                            <img src="~~/assets/images/temponetwork_logo.png" alt="店舗ネットワーク（テンポネットワーク TEMPO NETWORK）" class="image logo">
                        </NuxtLink>
                        <div class="d-flex justify-content-center">
                            <NuxtLink class="footer-link" to="/">
                                プライバシーポリシー
                            </NuxtLink>
                            |
                            <NuxtLink class="footer-link" to="/">
                                運営会社について
                            </NuxtLink>
                            |
                            <NuxtLink class="footer-link" to="/">
                                お問い合わせ
                            </NuxtLink>
                        </div>
                        <div class="about">
                            <p>
                                Copyright © 2022. TEMPO NETWORK, INC.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .logo {
        max-width: 220px;
    }

    @media only screen and (max-width: 764px) {
        .logo {
            width: 100%;
            height: 100%;
        }
        .footer-link {
            font-size: 13px;
        }
        .about {
            flex:wrap;
        }
    }
    .footer-link {
        color: white;
        padding: 20px;
    }

    .footer-link:hover{
        text-decoration: none;
    }

    .hr-or {
        background-color: #cdcdcd;
        height: 1px;
        margin-top: 0px !important;
        margin-bottom: 0px !important;
    }

    footer.nb-footer {
        background: #222;
        border-top: 4px solid #5bc0de;
    }

    footer.nb-footer .about {
        margin: 0 auto;
        margin-top: 20px;
        max-width: 1170px;
        text-align: center; 
    }

    footer.nb-footer .about p {
        font-size: 13px;
        color: #999;
    }
</style>