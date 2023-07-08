<script>
  import Login from "./pages/Login.svelte";
  import Main from "./pages/Main.svelte";
  import Notfound from "./pages/Notfound.svelte";
  import Signup from "./pages/Signup.svelte";
  import Write from "./pages/Write.svelte";
  import Router from "svelte-spa-router";
  import "./css/style.css";
  import { user$ } from "./store";
  import { onMount } from "svelte";
  import {
    GoogleAuthProvider,
    getAuth,
    signInWithCredential,
  } from "firebase/auth";
  import Loading from "./pages/Loading.svelte";
  import MyPage from "./pages/myPage.svelte";
  const auth = getAuth();

  let isLoading = true;

  const checklogin = async () => {
    const token = localStorage.getItem("token");
    if (!token) return (isLoading = false);

    const credential = GoogleAuthProvider.credential(null, token);
    const result = await signInWithCredential(auth, credential);
    const user = result.user;
    user$.set(user);
    isLoading = false;
  };

  const routes = {
    "/": Main,
    "/signup": Signup,
    "/write": Write,
    "/my": MyPage,
    "*": Notfound,
  };

  onMount(() => checklogin());
</script>

{#if isLoading}
  <Loading />
{:else if !$user$}
  <Login />
{:else}
  <Router {routes} />
{/if}
