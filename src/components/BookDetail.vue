<template>
    <v-container
        fluid
    >
        <h1 class="txtHead">Detail Buku</h1>
        <v-row>
            <v-col cols='3' sm="4">
                <v-img
                    :src="book.urlCover"
                    max-width="200"
                >
                </v-img>
            </v-col>
            <v-col cols='9' sm="8">
                Judul: {{book.judul}}
                <br>
                penulis: {{book.penulis}}
                <br>
                isbn: {{book.isbn}}
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'BookDetail',

    data: () => ({
        book: {
            judul: 'Harry Potter and the Deathly Hallows',
            penulis: 'imron madani',
            isbn: '1222114',
            urlCover: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/7063-orig.jpg"
        }
    })
}
</script>