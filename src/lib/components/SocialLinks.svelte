<script>
  import Github from 'svelte-material-icons/Github.svelte';
  import Youtube from 'svelte-material-icons/Youtube.svelte';
  import Twitter from 'svelte-material-icons/Twitter.svelte';
  import Instagram from 'svelte-material-icons/Instagram.svelte';
  import Facebook from 'svelte-material-icons/Facebook.svelte';
</script>

<div class="social-links">
  <a class="github" href="https://github.com/oscarfono/theblacksheepblog"><Github size ="2em" /></a>
  <a class="youtube" href="https://youtube.com/oscarfono/theblacksheepblog"><Youtube size ="2em" /></a>
  <a class="twitter" href="https://x.com/"><Twitter size ="2em"/></a>
  <a class="instagram" href="https://instagram.com/mindthelion"><Instagram size ="2em"/></a>
  <a class="facebook" href="https://www.facebook.com/profile.php?id=100094420951714"><Facebook size ="2em" /></a>
</div>

<style>
 .social-links {
   display: flex;
   flex-direction: row;
   gap: 1em;
   position: absolute;
   bottom: 1em;


   a {
     color: var(--darker);
     &:visited {
       color: var(--darker);}
     }

   a.github:hover {
     color: #6e5494;
   }
   a.youtube:hover {
     color: #ea3223;
   }
   a.twitter:hover {
     color: #1da1f2;
   }
   a.instagram:hover {
     color: #e4405f;
   }
   a.facebook:hover {
     color: #0165e1;
   }
}
</style>
