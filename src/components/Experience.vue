<script>
export default {
  name: "Experience",
  props: ["image"],
};
</script>

<template>
  <section class="experience">
    <div class="container py-5">
      <h3 class="pt-5">12 Year Experience</h3>
      <div class="row g-5">
        <div class="col-6 text">
          <h2 class="mb-4">We Are The Best Gaming Company</h2>
          <p>
            Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus. Cras ultricies
            ligula sed magna dictum porta.Praesent sapien massa, convallis a
            pellentesque nec, egestas non nisi praesent sapien massa.
          </p>
          <p>
            Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus. Cras ultricies
            ligula sed magna dictum porta.
          </p>
          <ul>
            <li>
              <div class="icons"><i class="fas fa-check"></i></div>
              <p>Sed porttitor lectus nibh. Proin eget tortor risus.</p>
            </li>
            <li>
              <div class="icons"><i class="fas fa-check"></i></div>
              <p>Praesent sapien massa, convallis a pellentesque nec. risus.</p>
            </li>
            <li>
              <div class="icons"><i class="fas fa-check"></i></div>
              <p>Praesent sapien massa, convallis a pellentesque nec. risus.</p>
            </li>
            <li>
              <div class="icons"><i class="fas fa-check"></i></div>
              <p>Praesent sapien massa, convallis a pellentesque nec. risus.</p>
            </li>
          </ul>
          <div class="mb-4">
            <button class="btn">
              Discover More <i class="fas fa-arrow-right"></i>
            </button>
            <div class="play">
              <a href=""><i class="fas fa-play"></i></a>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="image">
            <img :src="image" alt="" />
            <div class="play">
              <a href=""><i class="fas fa-play"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/extend" as *;

* {
  color: $text-primary;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  color: $text-secondary;
}

h2 {
  font-size: 45px;
  font-weight: 900;
}

.experience {
  padding-bottom: 50px;

  .text {
    ul {
      padding-left: 0;

      div.icons {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        border: 1.8px solid $text-secondary;
        display: inline-block;
        text-align: center;

        .fa-check {
          font-size: 15px;
          line-height: 30px;
          color: $text-secondary;
        }
      }

      p {
        display: inline-block;
        margin-left: 10px;
      }
    }

    button.btn {
      @extend %btn;
    }

    div.play {
      @extend %play;
      display: inline-flex;
      margin-left: 10px;
    }
  }

  .image {
    position: relative;
    width: 90%;
    overflow: hidden;

    .play {
      position: absolute;
      @extend %play;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      a {
        .fa-play {
          color: $text-primary;
        }
      }
    }

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
}
</style>
