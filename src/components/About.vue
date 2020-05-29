<template>
    <v-container
        fluid
    >
        <h1 class="txtHead">Qrary Unpad</h1>
        <div class="banner">
            <img :src="linkLogo" class="childBanner" alt="Qrary Semantic" heighh="130px" width="200px">
        </div>

        <h2 class="txtHead">Tentang Qrary</h2>
        <p class="txtDesc">
            Qrary (QR-Library) adalah aplikasi yang memudahkan civitas akademika, baik mahasiswa yang ingin meminjam buku di perpustakaan maupun pustakawan yang mengorganisir buku perpustakaan. Mahasiswa dapat melihat ketersediaan buku di perpustakaan, selain itu aplikasi ini dapat memudahkan manajemen perpustakaan baik dalam segi pendataan pengunjung maupun indexing buku.
            <br><br>Pada awalnya Qrary berupa aplikasi berbasis android. Namun kemudian aplikasi tersebut juga dikembangkan menjadi web semantik.
        </p>

        <h2 class="txtHead">Fitur</h2>
        <p class="txtDesc">Untuk saat ini, Qrary sesi web baru mendukung untuk pencarian buku.</p>

        <h2 class="txtHead">Creator</h2>
        <v-row>
            <v-col cols='12'>
                <v-row>
                    <div 
                        v-for="creator in creators" 
                        :key="creator.nama"
                        class="pl-6 pr-6"
                    >
                        <v-img
                            :src="creator.urlFoto"
                            max-height="150px"
                            max-width="150px"
                            :style="{'border-radius':'50%'}"
                        >

                        </v-img>
                        <div style="text-align: center">
                            <p>{{ creator.nama }} <br> {{ creator.npm }}</p>
                        </div>
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'About',

    data: () =>({
        linkLogo: require('../assets/logoQraryVert.svg'),
        creators: [
            {
                nama: 'Moh. Achun Armando',
                npm: '140810170020',
                urlFoto: 'http://api.himatif.org/data/assets/foto/2017/20.jpg'
            },
            {
                nama: 'Arif R. Gilang P.',
                npm: '140810170030',
                urlFoto: 'http://api.himatif.org/data/assets/foto/2017/30.jpg'
            },
            {
                nama: 'Refa Annisatul Ilma',
                npm: '140810170060',
                urlFoto: 'http://api.himatif.org/data/assets/foto/2017/60.jpg'
            }
        ]
    })
}
</script>
<style>
    .txtHead{
        color: #083E77;
    }
    h2.txtHead{
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .banner{
        height: 276px;
        background-color: #083E77;
        position: relative;
        margin-top: 20px;
    }
    .childBanner{
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -70px 0 0 -100px;
    }
    .txtDesc{
        text-align: justify;
    }
</style>