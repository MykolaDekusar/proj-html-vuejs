<script>
export default{
    name:'Trending Battle',
    data(){
        return{
            selector:[
            {
                type:'All',
                pos:0,
            },{
                type:'pubg',
                pos:1,
            },{
                type:'COD',
                pos:2,
            },
            {
                type:'AC',
                pos:3,
            },
            {
                type:'MCX',
                pos:4,
            }],
            // ARRAY DI OGGETTI DI SQUADRE
            cards:[{
                team1:{
                    img:1,
                    origin:'Italy',
                    name:'Ninja Gaming',
                },
                team2:{
                    img:2,
                    origin:'India',
                    name:'Witch Gaming',
                },
                data:{
                    title:'PUBG Battelground',
                    info:'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    time:'10.45',
                    date:'1st November, 2022',
                    socials:{
                        youtube:'fa-youtube',
                        message:'fa-message',
                    },
                }},
                {
                team1:{
                    img:1,
                    origin:'Italy',
                    name:'King Gaming ',
                },
                team2:{
                    img:2,
                    origin:'India',
                    name:'Witch Astro',
                },
                data:{
                    title:'Assassain’s Creed ',
                    info:'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    time:'09.45',
                    date:'1st November, 2022',
                    socials:{
                        youtube:'fa-youtube',
                        message:'fa-message',
                    },
                }},
                {
                team1:{
                    img:1,
                    origin:'Italy',
                    name:'King Gaming ',
                },
                team2:{
                    img:2,
                    origin:'India',
                    name:'Witch Astro',
                },
                data:{
                    title:'Assassain’s Creed ',
                    info:'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    time:'09.45',
                    date:'1st November, 2022',
                    socials:{
                        youtube:'fa-youtube',
                        message:'fa-message',
                    },
                }},
                {
                team1:{
                    img:1,
                    origin:'Italy',
                    name:'King Gaming ',
                },
                team2:{
                    img:2,
                    origin:'India',
                    name:'Witch Astro',
                },
                data:{
                    title:'Assassain’s Creed ',
                    info:'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    time:'09.45',
                    date:'1st November, 2022',
                    socials:{
                        youtube:'fa-youtube',
                        message:'fa-message',
                    },
                }},
            ]
            }
        },
    methods:{
        selectTeam(data){
            
        }
    },
    }
</script>
<template>
<h5>Trending Battle</h5>
<h1>Upcoming Match</h1>
<div class="teams">
    <ul>
        <li v-for="data in selector"  @click="selectTeam(data)">{{ data.type }}</li>
    </ul>
    <div class="container">
    <div v-for="data in cards" class="row">
        <div class="col-xl-6 col-lg-6">
            <div class="left-wrapper">
                <div class="team-content">
                    <div class="thumb">
                        <img src="/public/img/team/1.png" alt="">
                    </div>
                    <div class="content">
                        <p>{{ data.team1.origin}}</p>
                        <h2>{{data.team1.name}}</h2>
                    </div>
                </div>
                <span class="vs">
                    vs
                </span>
                <div class="team-content">
                    <div class="thumb">
                        <img src="/public/img/team/1.png" alt="">
                    </div>
                    <div class="content">
                        <p>{{data.team2.origin}}</p>
                        <h2>{{data.team2.name}}</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6 col-lg-6">
            <div class="right-wrapper">
                <div class="content">
                    <h2>{{ data.data.title }}</h2>
                    <p>{{data.data.info}}</p>
                </div>
                <div class="box">
                    <h2>{{data.data.time}}</h2>
                    <h6>{{data.data.date}}</h6>
                    <div class="socials">
                        <a href=""><i :class="`fa-brands ${data.data.socials.youtube}`"></i></a>
                        <a href=""><i :class="`fa-solid ${data.data.socials.message}`"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<style lang="scss" scoped>
h5{
    font-size: 15px;
    color:green;
}
ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.left-wrapper,
.right-wrapper,
.row{
    display: flex;
}

.active{
    color: green;
}
</style>