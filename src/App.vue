<template>
    <div class="app">
        <!-- <div>
        <button @click="addLike">Like</button>
        <button @click="addDislike">Dislike</button>
        </div>

        <div>Кол-во лайков: <b>{{  likes  }}</b></div>
        <div>Кол-во дизлайков: <b>{{  dislikes  }}</b></div>-->
        <post-form/>

        <post-list :posts="posts"/>
        
    </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
    components {
        PostList, PostForm
    },
    data() {
        return{
            posts: [
                {id: 1, title: 'Javascript', body: 'Описание поста'},
                {id: 2, title: 'Javascript 2', body: 'Описание поста 2'},
                {id: 3, title: 'Javascript 3', body: 'Описание поста 3'},
                {id: 4, title: 'Javascript 4', body: 'Описание поста 4'},
            ],
            title: '',
            body: ''
        }
    },
    methods:{
        createPost() {
           
        },
    }
}
</script>

<style> 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}




</style>