<template>
    <v-container
        fluid
    >
        <h1 class="txtHead">Detail Buku</h1>
        <v-row
          v-if="loading == true"
        >
          <v-col
            cols="6"
            md="2"
          >
            <v-row>
              <v-skeleton-loader
                class="mx-3 mb-4"
                width="190"
                type="card, list-item"
                elevation="3"
              ></v-skeleton-loader>
            </v-row>
          </v-col>
        </v-row>
        <v-row
            v-if="loading == false"
        >
            <v-col cols='12' sm="2">
                <v-img
                  class="white--text grey darken-4"
                  max-width="200"
                  :src="book.urlFoto"
                  :lazy-src="coverBookDefault"
                >
                    <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
            </v-col>
            <v-col cols='12' sm="10">
                <b>ISBN:</b> {{book.isbn}} <br>
                <b>Judul:</b> {{book.judul}} <br>
                <b>Penerbit:</b> {{book.penerbit}} <br>
                <b>Penulis:</b> {{book.penulis}} <br>
                <b>Penerjemah:</b> {{book.penerjemah}} <br>
                <b>Tanggal Terbit:</b> {{book.tanggalTerbit}}
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'BookDetail',

    data: () => ({
        coverBookDefault: require('../assets/book_cover_default.jpg'),
        book: {},
        loading: true
    }),
    mounted() {
        this.$axios
            .get(`https://qrary-semantic-backend.herokuapp.com/api/${this.$route.params.isbn}`)
            .then(response => {
                if (response.data.success == false) {
                    console.log(response.data.message);
                } else {
                    this.book = response.data.data;
                    this.loading = false;
                }
            })
    }
}
</script>