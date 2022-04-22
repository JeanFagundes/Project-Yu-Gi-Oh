<template>
  <main>
    <div class="card">
      <div class="title">
        <span class="titulo">Cleriga Do Sol Partido</span>
        <span class="mana">9</span>
      </div>
      <div class="img">
        <img
          src="https://img.freepik.com/vetores-gratis/design-de-mascote-de-crocodilo-assustador_590604-25.jpg"
          alt=""
        />
      </div>
      <div class="description">
        <p>
          Cause 4 de dano. Se seu herói tiver menos de 12 de vida cause 6 de
          dano
        </p>
      </div>
      <div class="atq-def">
        <ul>
          <li class="atqDef">6</li>
          <li class="tipo">Fera</li>
          <li class="atqDef">3</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script></script>

<style>
  .card {
    font-style: black;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    max-width: 150px;
    max-height: 250px;
    background-color: red;
  }
  img {
    width: 150px;
    height: 120px;
  }
  .title {
    display: flex;
    max-height: 30px;
    max-width: 150px;
    width: 150px;
    height: 30px;
  }
  .title .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: clamp(10px, 12px, 16px);
  }
  .title .mana {
    display: flex;
    width: 15%;
    border: 3px solid blue;
    border-width: 2px;
    border-radius: 50%;
    width: 30px;
    align-items: center;
    justify-content: center;
  }
  .description {
    font-size: 10px;
    height: 50px;
    margin-top: 0 auto;
    border-bottom: 1px solid black;
  }

  .atq-def ul {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }
  ul {
    display: flex;
    /* flex-wrap: wrap; */
    list-style-type: none;
    padding: 0;
    margin: 9px;
  }

  .atqDef {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid black;
    border-width: 2px;
    border-radius: 50%;
    width: 30px;
  }
</style>
