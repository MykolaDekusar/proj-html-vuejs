<!-- JAVASCRIPT -->
<script>
// import:


export default {
   nome: 'CartComponent',
   props: {
    products: Array,
   },
   data(){
      return{
        subtotale: 0,
      }
   },
   methods: {
    calculateSubtotale() {
        this.products.forEach(element => {
            this.subtotale += element.price;
        })
    },
    canc(index) {
        this.subtotale = 0;
        this.products.splice(index, 1);
        this.calculateSubtotale()
    },
   },
   created() {
    this.calculateSubtotale()
   },
   
}

</script>


<!-- HTML -->
<template>

    <div class="cart">
        <ul>
            <li v-for="(product, index) in products" 
            :key="index" v-show="product.name">
            <div class="cart-list">
                <div class="image-cart">
                    <img :src="product.image" :alt="product.name">
                </div>
                <div class="info-cart">
                    <h3>{{ product.name }}</h3>
                    <p>Quality €{{ product.price }}</p>
                </div>
                <a href="#"
                @click="canc(index)"
                ><i class="fas fa-xmark"></i></a>                
            </div>
            </li>
            <li>
                <div class="subtotale">
                    <span>ordine totale</span>
                    <span>€ {{ subtotale }}</span>
                </div>           
            </li>
            <li>
                <button>Guardare</button>
            </li>
        </ul>
    </div>


</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/extend' as *;

*{margin: 0;padding: 0;}
a{text-decoration: none; color: $text-secondary;}
li{list-style-type: none;}

.cart {
    position: absolute;
    top: 60px;
    right: 0;
    width: 300px;
    background-color: $top-menu;
    color: $text-primary;
    ul {
        padding: 8px 25px;
        li{
            padding: 10px 0;
            .cart-list {
                display: flex;
                justify-content: space-between;
                .image-cart {
                    width: 80px;
                    height: 55px;
                    border: 1px solid $bg-btn-primary;
                    background-color: $bottom-menu;               
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        object-position: center;
                    }
                }
                .info-cart {
                    h3 {font-size: 16px;}
                    p {font-size: 14px; font-weight: 100;}
                    a {color: $text-secondary}
                }
            }
        }
        .subtotale {
            display: flex;
            justify-content: space-between;
            span {
                margin-top: 15px;
                font-size: 18px;
                display: block;
            }
        }
        button {
            margin-top: 15px;
            width: 90%;
            @extend %btn;
            border: unset;
            border: 1px solid $bg-btn-primary;

        }
    }
}


</style>
