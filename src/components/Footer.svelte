<script>
  export let location;
  const moveToHome = () => {
    window.location.hash = "/";
  };

  const moveTomyPage = () => {
    window.location.hash = "/my";
  };
</script>

<footer>
  <div class="footer-block">
    <button class="footer-icons" on:click={moveToHome}>
      <div class="footer-icons__image">
        {#if location === "home"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        {:else}
          <img src="assets/home.svg" alt="" />
        {/if}
      </div>
      <div class="footer-icons__desc">홈</div>
    </button>

    <div class="footer-icons">
      <img src="assets/document.svg" alt="" class="footer-icons__image" />
      <div class="footer-icons__desc">동네생활</div>
    </div>

    <div class="footer-icons">
      <img src="assets/location.svg" alt="" class="footer-icons__image" />
      <div class="footer-icons__desc">내 근처</div>
    </div>

    <div class="footer-icons">
      <img src="assets/chat.svg" alt="" class="footer-icons__image" />
      <div class="footer-icons__desc">채팅</div>
    </div>

    <button class="footer-icons" on:click={moveTomyPage}>
      {#if location === "my"}
        <img src="assets/usersolid.svg" alt="" />
      {:else}
        <img src="assets/user.svg" alt="" class="footer-icons__image" />
      {/if}
      <div class="footer-icons__desc">나의 당근</div>
    </button>
  </div>
</footer>
