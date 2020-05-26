<template>
    <v-container
        fluid
        :class="container"
      >
        <h2 class="txtHead2">Daftar Buku</h2>
        <div class="text-center"
          v-if="loading == false && error == true"
        >
          <p>Dataset kosong, silahkan upload dataset terlebih dahulu di sini <a href="https://qrary-fuseki-service.herokuapp.com/" target="_blank">https://qrary-fuseki-service.herokuapp.com/</a></p>
          <a href="https://github.com/atjhoendz/qrary-semantic-frontend#upload-dataset" target="_blank">Bantuan</a>
        </div>
        <v-row
          v-if="loading == true"
        >
          <v-col
            v-for="i in 4"
            :key="i"
            cols="6"
            md="2"
          >
            <v-row
              justify="left"
            >
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
          v-if="loading == false && error == false"
        >
          <v-col
            v-for="book in books"
            :key="book.judul"
            cols='6'
            md='2'
          >
            <v-row
              justify="left"
            >
              <v-card
                class="mx-3 mb-4"
                max-width="190"
                max-height="400"
                elevation="3"
                :style="{'text-align':'center'}"
                @click="gotoDetail(book.isbn)"
              >
                <v-img
                  class="white--text grey darken-4"
                  max-height="250"
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
                <div style="text-align: center !important">
                  <v-card-title style="color: #112E4E; display: block !important; font-size: 14px; word-break: break-word; padding-bottom: 5px; line-height: 160%;">
                    {{ book.judul }}
                  </v-card-title>
                </div>
                <v-card-text style="color: #7E7E7E; padding-top: 0px; font-size: 12px">
                  {{ book.penulis }}
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
    name: 'ListBooks',

    data:() => ({
        coverBookDefault: require('../assets/book_cover_default.jpg'),
        books: [],
        loading: true,
        error: false,
        message: '',
        snackbar: false
    }),
    methods: {
      gotoDetail(isbn) {
        this.$router.push({name:'details', params: {isbn: isbn}});
      }
    },
    mounted() {
      this.$axios
        .get('https://qrary-semantic-backend.herokuapp.com/api/getall')
        .then(response => {
          if (response.data.success == false) {
            this.loading = false;
            this.error = true;
          } else {
            this.books = response.data.data;
            this.loading = false;
          }
        });
    }
}
</script>
<style>
  .txtHead2{
    color: #083E77;
    margin-bottom: 20px;
  }
</style>