<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                </v-card-media>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0"># {{$route.params.id}}</h3>
                        <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat class="orange--text">Share</v-btn>
                    <v-btn flat class="orange--text">Explore</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {

    
    created() {
        console.log('Created');
    }
}
</script>

<style>

</style>
