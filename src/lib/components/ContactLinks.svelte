<script>
  import Github from 'svelte-material-icons/Github.svelte';
  import Twitter from 'svelte-material-icons/Twitter.svelte';
  import Instagram from 'svelte-material-icons/Instagram.svelte';
  import Facebook from 'svelte-material-icons/Facebook.svelte';
</script>

<div class="social-links">
  <ul>
    <li class="social-links-icon">
      <a href="https://github.com/oscarfono/theblacksheepblog">
        <img src={ Github } alt="GitHub project for The Black Sheep Blog" />
      </a>
    </li>
    <li class="social-links-icon">
      <a href="https://x.com/">
        <img src={ Twitter } alt="Twitter logo link to user profile" />
      </a>
    </li>
    <li class="social-links-icon">
      <a href="https://instagram.com/mindthelion">
        <img src={ Instagram } alt="instagram logo link to user profile" />
      </a>
    </li>
    <li class="social-links-icon">
      <a href="https://www.facebook.com/profile.php?id=100094420951714">
        <img src={ Facebook } alt="Facebook logo link to user profile" />
      </a>
    </li>
  </ul>
</div>

<style>
 .social-links {
   position: absolute;
   bottom: 1em;

   a {
   color: var(--darker);

   &:hover {
     color: var(--accent);}
   }

   ul {
    list-style: none;
  }

 }
</style>
