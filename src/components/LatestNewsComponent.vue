<script>
export default {
  name: "LatestNewsComponent",
};
</script>
<template>
  <div class="container">
    <div class="title col-lg-7">
      <p>Latest News</p>
      <h1>Stay Updated With our Latest News Articles</h1>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="content-wrapper">
          <div class="content">
            <div class="client">
              <div class="img">
                <img src="/img/wordSection/clients/client1.png" alt="" />
              </div>
              <div class="client-data">
                <h3>Zalatan Suwarge</h3>
                <p>25 October, 2022</p>
              </div>
            </div>
            <h2>
              Assassain Creed 5 Most Amazing Fact That You Never Known Before.
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus dicta et neque debitis.Accusamus dicta et neque debitis.
            </p>
            <button class="hover-me">
              Read More <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card-wrapper">
          <div class="cards">
            <div class="img">
              <img src="/img/wordSection/small1.png" alt="" />
            </div>
            <div class="card-data">
              <h2>Ghost Rider Returns</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus dicta et neque debitis.Accusamus dicta et neque
                debitis.
              </p>
              <div class="client">
                <div class="img">
                  <img src="/img/wordSection/clients/client1.png" alt="" />
                </div>
                <div class="client-data">
                  <h3>Zalatan Suwarge</h3>
                  <p>25 October, 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="img">
              <img src="/img/wordSection/small2.png" alt="" />
            </div>
            <div class="card-data">
              <h2>Call Of Deauty 4</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus dicta et neque debitis
              </p>
              <div class="client">
                <div class="img">
                  <img src="/img/wordSection/clients/client2.png" alt="" />
                </div>
                <div class="client-data">
                  <h3>Rajita Raw</h3>
                  <p>25 October, 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="img">
              <img src="/img/wordSection/small3.png" alt="" />
            </div>
            <div class="card-data">
              <h2>Mortal Combat X</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus dicta et neque debitis
              </p>
              <div class="client">
                <div class="img">
                  <img src="/img/wordSection/clients/client1.png" alt="" />
                </div>
                <div class="client-data">
                  <h3>Rajita Raw</h3>
                  <p>25 October, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
* {
  color: white;
  margin: 0;
}

.container {
  padding-top: 120px;
}

.content-wrapper {
  height: 760px;
  position: relative;
  background-image: url(/img/wordSection/newsleft.png);
  background-position: center;
  background-size: cover;
  border-radius: 10px;
}

.card-wrapper {
  height: 760px;
  position: relative;
}

.content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2rem;
  p {
    font-size: 0.9rem;
  }
  h2 {
    font-weight: 900;
  }
  .client {
    display: flex;
    margin-bottom: 1rem;
    img {
      width: 50px;
      margin-right: 15px;
    }
    .client-data {
      h3 {
        font-weight: 700;
        font-size: 1.5rem;
      }
    }
  }
}

.cards {
  display: flex;
  background-color: $top-menu;
  height: 237.5px;
  border-radius: 25px;
  margin-bottom: 1.5rem;
  img {
    height: 100%;
  }
}
.card-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 900;
  }
  .client {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    img {
      width: 50px;
      margin-right: 1rem;
    }
    .client-data {
      h3 {
        font-size: 1rem;
        font-weight: 700;
      }
    }
  }
}
.title {
  margin-bottom: 40px;
  h1 {
    font-weight: 800;
    font-size: 3.125rem;
  }
  p {
    color: $text-secondary;
    font-weight: 700;
  }
}
button {
  display: flex;
  align-items: center;
  background-color: $bg-green-primary;
  margin-top: 1rem;
  padding: 14px 20px;
  font-size: 15px;
  border: 1px solid transparent;
  outline: none;
  border-radius: 5px;
  color: $bottom-menu;
  font-weight: 600;
  svg {
    margin-left: 10px;
    color: $bottom-menu;
  }
}
.hover-me:hover {
  transition: all 0.3s;
  color: $bg-green-primary;
  border: 1px solid $bg-green-primary;
  background-color: transparent;
  svg {
    color: $bg-green-primary;
  }
}
</style>
