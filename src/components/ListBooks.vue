<template>
    <v-container
        fluid
        :class="container"
      >
        <h2 class="txtHead2">Daftar Buku</h2>
        <v-row>
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
                elevation="3"
                :style="{'text-align':'center'}"
                @click="gotoDetail(book.isbn)"
              >
                <v-img
                  class="white--text grey darken-4"
                  max-height="250"
                  :src="book.urlCover"
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
                  <v-card-title style="color: #112E4E; display: block !important; font-size: 14px; word-break: break-word;">
                    {{ book.judul }}
                  </v-card-title>
                </div>
                <v-card-text style="color: #7E7E7E; padding-top: 8px; font-size: 12px">
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
        books: [
        {
          judul: 'Harry Potter and the Deathly Hallows',
          penulis: 'imron madani',
          isbn: '1222114',
          urlCover: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/7063-orig.jpg"
        },
        {
          judul: 'Harry Potter and the Deathly Hallows',
          penulis: 'imron madani',
          isbn: '1222114',
          urlCover: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/7063-orig.jpg"
        },
        {
          judul: 'Harry Potter and the Deathly Hallows',
          penulis: 'imron madani',
          isbn: '1222114',
          urlCover: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/7063-orig.jpg"
        },
        {
          judul: 'Harry Potter and the Deathly Hallows',
          penulis: 'imron madani',
          isbn: '1222114',
          urlCover: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/7063-orig.jpg"
        },
        {
          judul: 'Harry Potter and the Deathly Hallows',
          penulis: 'imron madani',
          isbn: '1222114',
          urlCover: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/7063-orig.jpg"
        },
        {
          judul: 'Harry Potter and the Deathly Hallows',
          penulis: 'imron madani',
          isbn: '1222114',
          urlCover: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/7063-orig.jpg"
        },
        {
          judul: 'Harry Potter and the Deathly Hallows',
          penulis: 'imron madani',
          isbn: '1222114',
          urlCover: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/7063-orig.jpg"
        },
        {
          judul: 'Harry Potter and the Deathly Hallows',
          penulis: 'imron madani',
          isbn: '1222114',
          urlCover: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/7063-orig.jpg"
        },
      ]
    }),
    methods: {
      gotoDetail(isbn) {
        this.$router.push({name:'details', params: {isbn: isbn}});
      }
    }
}
</script>
<style>
  .txtHead2{
    color: #083E77;
    margin-bottom: 20px;
  }
</style>