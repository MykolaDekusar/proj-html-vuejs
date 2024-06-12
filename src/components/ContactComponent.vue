<script>
// import:
// import nomeImport from 'nomeImport';
export default {
   nome: 'Contact Component',
   components: {
   },
   data(){
      return{
         cards:[
            {
               title:'Phone Number',
               data:'+880 130 309 8032',
               icon:'phone'
            },
            {
               title:'Email Address',
               data:'example@gmail.com',
               icon:'envelope'
            },
            {
               title:'Address',
               data:'69/6 Broklyn Street, New York city, United States of America',
               icon:'location-pin'
            },
         ],
         submit:0,
      }
   },
   methods:{
      submitSuccess(){
         this.submit = 1;
      }
   }
}
</script>

<template>
     <section class="contact">
   <div class="container">
      <div class="row">
         <div class="col-lg-4 px-4">
            <div class="contact-info">
            <h2>Get a Quote</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni in nulla voluptatibus perferendis commodi aperiam sit officia veritatis tempore voluptas
                consequatur accusamus reprehenderit voluptates, nam quas nesciunt repudiandae amet?
            </p>
            </div>
            <div v-for="data in cards" class="phone-number hover-me">
               <div class="quote-icon"><i :class="`fa-solid fa-${data.icon}`"></i></div>
               <div >
                  <h3>{{ data.title }}</h3>
                  <p>{{ data.data }}</p>
               </div>
            </div>
         </div>
         <div class="col-lg-8">
            <div class="form-container">
               <form id="contact-form" >
                  <div class="row">
                     <div class="col-lg-6">
                        <h5 class="title-form">First Name </h5>
                        <div class="input-group">
                           <input type="text" placeholder="First Name">
                           <i class="fa-solid fa-user"></i>
                        </div>
                     </div>
                     <div class="col-lg-6">
                        <h5 class="title-form">Last Name </h5>
                        <div class="input-group">
                           <input type="text" placeholder="Last Name">
                           <i class="fa-solid fa-user"></i>
                        </div>
                     </div>
                     <div class="col-lg-6">
                        <h5 class="title-form">Phone</h5>
                        <div class="input-group">
                           <input type="text" placeholder="Phone">
                           <i class="fa-solid fa-phone"></i>
                        </div>
                     </div>
                     <div class="col-lg-6">
                        <h5 class="title-form">Email</h5>
                        <div class="input-group">
                           <input type="text" placeholder="Email">
                           <i class="fa-solid fa-envelope"></i>
                        </div>
                     </div>
                     <div class="col-lg-12">
                        <h5 class="title-form">Subject</h5>
                        <div class="input-group">
                           <input type="text" placeholder="Subject">
                           <i class="fa-solid fa-file-lines"></i>
                        </div>
                     </div>
                     <div class="col-lg-12">
                        <h5 class="title-form">Message</h5>
                        <div class="input-group">
                           <textarea placeholder="Your Message" id=""></textarea>
                           <i class="fa-solid fa-pen"></i>
                        </div>
                     </div>
                     <div class="col-lg-12">
                        <div class="input-group">
                           <button @click="submitSuccess" type="reset">Send Message</button>
                        </div>
                     </div>
                  </div>
               </form>
               <p v-if="submit" class="form-submit-succes">Thank you! Your message has been sent.</p>
            </div>
         </div>
      </div>
   </div>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
/*  CONTACT STYLE */
* {
   color: white;
}
.contact {
   padding: 120px;
   background-color: $bg-btn-secondary;
   border-bottom: none;
   h2{
      font-weight: 800;
      font-size: 2.5rem;
   }
   p {
      margin-bottom: 1rem;
   }
}

.phone-number{
   display: flex;
   align-items: center;
   padding: 1rem;
   height: 125px;
   border: 1px solid $bg-green-primary;
   border-radius: 10px;
   transition: all 0.3s;
   margin-bottom: 2rem;
   svg{
      color: $bg-btn-primary;
      font-size: 2rem;
   }
   p {
      margin: 0;
   }
}

.address {
   .quote-icon{
      svg{
         width: 32px;
      }
   }
}

.quote-icon {
   padding: 1rem;
   background-color:$bg-tertiary;
   border-radius: 50%;
   text-align: center;
   margin-right: 15px;
}

.hover-me:hover{
   transition: all 0.3s;
   h3{
      color:$bg-green-primary;
   }
   border: 1px solid $bg-primary;
   background-color: $bg-tertiary;
   .quote-icon {
      background-color: $bg-btn-primary;
   }
   svg {
      color: $bg-tertiary;
   }
}

// FORM SETTINGS
.form-container{
background-color: $bg-tertiary;
padding: 3rem 3rem 4rem 3rem;
border-radius: 10px;
input{
   border: none;
   outline:none;
   background-color: $bg-btn-secondary;
   padding: 15px 20px;
   width: 100%;
}
textarea{
   border: none;
   outline:none;
   background-color: $bg-btn-secondary;
   padding: 20px 20px 130px;
   width: 100%;
   margin-bottom: 20px;
}

h5{
   font-size: 1.1rem;
   font-weight: 600;
}
}

.title-form,
.input-group{
   margin-bottom: 1rem;
   position: relative;
   svg{
      position: absolute;
      top: 18px;
      right: 10px;
      opacity: 0.5;
   }
   button{
      background-color: $bg-green-primary;
      padding: 14px 20px;
      font-size: 18px;
      border: none;
      outline: none;
      border-radius: 5px;
      color: $bottom-menu;
      font-weight: 600;
   }
}

.form-submit-succes{
   position: absolute;
}
</style>