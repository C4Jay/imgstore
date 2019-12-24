<template>
    <v-container>
        <v-btn color="yellow" raised @click="UpFile">OK</v-btn>
        <input 
        type="file" 
        style="display: none" 
        ref="fileinput"
        @change="fineup">
        <v-card>
            <v-img :src="imgurl">
            </v-img>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'FileUp',

    data () {
        return {
            imgurl: '',
            img: null
    }
    },

    methods: {
        UpFile() {
            this.$refs.fileinput.click()
        },
        fineup(event) {
            const files = event.target.files
            let filename = files[0].name;
            if (filename.lastIndexOf('.') <= 0) {
                return alert("Wrong file")
            }

            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imgurl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.img = files[0]
        }

    }
}

</script>
