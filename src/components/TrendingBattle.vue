<script>
export default {
  name: "Trending Battle",
  data() {
    return {
      selector: [
        {
          type: "All",
          pos: 0,
        },
        {
          type: "PUBG",
          pos: 1,
        },
        {
          type: "COD",
          pos: 2,
        },
        {
          type: "AC",
          pos: 3,
        },
        {
          type: "MCX",
          pos: 4,
        },
      ],
      // ARRAY DI OGGETTI DI SQUADRE
      cards: [
        {
          team1: {
            img: 1,
            origin: "Italy",
            name: "Ninja Gaming",
          },
          team2: {
            img: 5,
            origin: "India",
            name: "Witch Gaming",
          },
          data: {
            title: "PUBG Battlegrounds",
            info: "Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.",
            time: "10.45",
            date: "1st November, 2022",
            socials: {
              youtube: "fa-youtube",
              message: "fa-message",
            },
          },
        },
        {
          team1: {
            img: 2,
            origin: "Italy",
            name: "King Gaming ",
          },
          team2: {
            img: 6,
            origin: "India",
            name: "Witch Astro",
          },
          data: {
            title: "Assassin's Creed ",
            info: "Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.",
            time: "09.45",
            date: "1st November, 2022",
            socials: {
              youtube: "fa-youtube",
              message: "fa-message",
            },
          },
        },
        {
          team1: {
            img: 7,
            origin: "Italy",
            name: "Dgn Gaming ",
          },
          team2: {
            img: 8,
            origin: "India",
            name: "Joker Gaming",
          },
          data: {
            title: "Mortal Combat X ",
            info: "Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.",
            time: "09.45",
            date: "1st November, 2022",
            socials: {
              youtube: "fa-youtube",
              message: "fa-message",
            },
          },
        },
        {
          team1: {
            img: 9,
            origin: "Italy",
            name: "Shark Gaming ",
          },
          team2: {
            img: 10,
            origin: "India",
            name: "Krull Gaming",
          },
          data: {
            title: "Call of Duty ",
            info: "Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.",
            time: "09.45",
            date: "1st November, 2022",
            socials: {
              youtube: "fa-youtube",
              message: "fa-message",
            },
          },
        },
      ],
    };
  },
  methods: {
    selectTeam(data) {},
  },
};
</script>
<template>
  <div class="container">
    <div class="section-title">
      <h5>Trending Battle</h5>
      <h1>Upcoming Match</h1>
    </div>
    <div class="teams">
      <ul>
        <li v-for="data in selector" @click="selectTeam(data)">
          {{ data.type }}
        </li>
      </ul>

      <div v-for="data in cards" class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="left-wrapper">
            <div class="team-content">
              <div class="thumb">
                <img :src="`/img/team/${data.team1.img}.png`" alt="" />
              </div>
              <div class="card-content">
                <p>{{ data.team1.origin }}</p>
                <h2>{{ data.team1.name }}</h2>
              </div>
            </div>
            <div class="vs">vs</div>
            <div class="team-content">
              <div class="thumb">
                <img :src="`/img/team/${data.team2.img}.png`" alt="" />
              </div>
              <div class="card-content">
                <p>{{ data.team2.origin }}</p>
                <h2>{{ data.team2.name }}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="right-wrapper">
            <div class="content">
              <h2>{{ data.data.title }}</h2>
              <p>{{ data.data.info }}</p>
            </div>
            <div class="box">
              <h2>{{ data.data.time }}</h2>
              <h6>{{ data.data.date }}</h6>
              <div class="socials">
                <a href=""
                  ><i :class="`fa-brands ${data.data.socials.youtube}`"></i
                ></a>
                <a href=""
                  ><i :class="`fa-solid ${data.data.socials.message}`"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding: 100px 0;
}

.section-title {
  text-align: center;
  h5 {
    font-size: 18px;
    font-weight: 600;
    color: #00ac4d;
    position: relative;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
  h1 {
    margin-top: 10px;
    color: #fff;
    font-size: 50px;
    font-weight: 800;
  }
}
.team-content {
  background: #152258;
  border-radius: 8px;
  width: 200px;
}

.content {
  color: #ffffff;
  h2 {
    font-size: 32px;
    color: #ffffff;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    color: #ffffff;
  }
}

.box {
  background: #05cc7c;
  width: calc(100% - 20%);
  margin-left: 10px;
  background: #1a1935;
  border-radius: 8px;
  padding: 36px 15px;
  text-align: center;
  transition: all 0.3s;
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  h6 {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 800;
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: #1a1935;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      line-height: 40px;
      text-align: center;
      background: #00ac4d;
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
}

.left-wrapper {
  display: flex;
  align-items: center;
}

.right-wrapper {
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-content {
  padding: 20px 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  p {
    color: #00ac4d;
    margin-bottom: 6px;
  }
  h2 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
  }
}
.thumb {
  width: 100%;
  height: 180px;
  background: #1a1935;
  padding: 20px 19px;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.vs {
  color: #00ac4d;
  font-size: 28px;
  font-weight: 700;
  background: #1a1935;
  border-radius: 8px;
  padding: 40px 50px;
  height: 140px;
  line-height: 60px;
  margin: 20px;
}
.row {
  padding: 30px;
  margin-bottom: 20px;
  align-items: center;
  background: #202046;
  padding: 40px 35px;
  border-radius: 10px;
  border: 1px solid #00ac4d;
  transition: all 0.3s;
  margin-left: 0;
  margin-right: 0;
  &:hover {
    border: 1px solid transparent;
    background-color: #333287;
  }
  &:hover .box {
    background: #05cc7c;
    color: #1a1935;
  }
  &:hover .socials a {
    background: #1a1935;
    color: #ffffff;
  }
}
p {
  margin-bottom: 0;
}
h5 {
  font-size: 15px;
  color: green;
}
ul {
  display: flex;
  justify-content: center;
  justify-content: space-around;
  width: 30%;
  margin: 30px auto;
  padding-left: 0;
  li {
    color: #ffffff;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      color: green;
    }
  }
}

.left-wrapper,
.right-wrapper,
.row {
  display: flex;
}

.active {
  color: green;
}
</style>
