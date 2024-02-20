<script>

 </script>

<svelte:head>
  <title>Contact | The Black Sheep</title>
  <meta name="description" content="Contact The Black Sheep" />
</svelte:head>

<h1 class="title">Contact</h1>

<form class="contact-form" action="">
  <input
    name="name"
    type="text"
    class="feedback-input"
    placeholder="Name"
    validation="required"
    />
  <input
    name="email"
    type="text"
    class="feedback-input"
    placeholder="Email"
    validation="required|email"
    />
  <input name="company" type="text" class="feedback-input" placeholder="Company" />
  <select name="action" id="action" class="request">
    <option value="placeholder" selected disabled>I'd like to...</option>
    <option value="0">connect over a common interest</option>
    <option value="1">discuss hiring you for a one-off or ongoing project</option>
    <option value="2">offer a tip to help you improve</option>
    <option value="3">join your mailing list</option>
    <option value="4">report a problem with your website</option>
    <option value="5">contact you about something else</option>
  </select>
  <textarea
    name="text"
    class="feedback-input"
    placeholder="complete redesign of company brand and website"
    >
  </textarea>
  <button onClick="submit">SEND</button>
  <p>Please allow up to 48 hours for me to respond to your message.</p>
</form>

<style>
  button {
    width: 100%;
  }

  .contact-form {
    margin: 0 auto;

  }
  @media (--desktop-device) {

    .contact-form {
      max-width: 500px;
    }
  }

</style>
