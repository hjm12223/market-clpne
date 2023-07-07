<script>
  import { getDatabase, ref, push } from "firebase/database";
  import Footer from "../components/Footer.svelte";
  import {
    getStorage,
    ref as refImage,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";

  let title;
  let price;
  let description;
  let place;
  let files;

  const storage = getStorage();

  async function writeUserData(imgUrl) {
    const db = getDatabase();
    push(ref(db, "items/"), {
      title,
      price,
      description,
      place,
      insertAt: new Date().getTime(),
      imgUrl,
    });
    alert("글쓰기 완료되었습니다.");
    window.location.hash = "/";
  }

  $: if (files) console.log(files[0]);

  const uploadFile = async () => {
    const file = files[0];
    const name = file.name;
    const imgRef = refImage(storage, name);
    await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);
    return url;
  };

  const handleSubmit = async () => {
    const url = await uploadFile();
    writeUserData(url);
  };
</script>

<div>
  <button on:click={uploadFile}>테스트 </button>
</div>
<body>
  <form id="write-form" on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="">이미지</label>
      <input type="file" bind:files id="image" name="image" />
    </div>
    <div>
      <label for="">제목</label>
      <input type="text" id="title" name="title" bind:value={title} />
    </div>
    <div>
      <label for="">가격</label>
      <input type="number" id="price" name="price" bind:value={price} />
    </div>
    <div>
      <label for="">설명</label>
      <input
        type="text"
        id="description"
        name="description"
        bind:value={description}
      />
    </div>
    <div>
      <label for="">장소</label>
      <input type="text" id="place" name="place" bind:value={place} />
    </div>
    <div>
      <button class="write-button" type="submit">제출</button>
    </div>
  </form>
</body>

<Footer location="write" />

<style>
  .write-button {
    background-color: tomato;
    margin: 10px;
    border-radius: 10px;
    padding: 5px 12px 5px 12px;
    color: white;
    cursor: pointer;
  }
</style>
