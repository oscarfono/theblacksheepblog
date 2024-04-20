<script>
  import { onMount } from 'svelte';

  let name = '';
  let email = '';
  let company = '';
  let message= '';

  // Reason for contacting options
  let options = [
    { id: 0, reason: "I'd like to ...", disabled: true, selected: true, placeholder: "Message"},
    { id: 1, reason: "keep in touch", disabled: false, selected: false,  placeholder: "Hey! same same!"},
    { id: 2, reason: "discuss hiring you for a project", disabled: false, selected: false,  placeholder: "Wanna do some business?"},
    { id: 3, reason: "offer a tip to help you improve", disabled: false, selected: false,  placeholder: "Let me explain something to you..."},
    { id: 4, reason: "report a problem with your website", disabled: false, selected: false,  placeholder: "I noticed this issue recently..."},
    { id: 5, reason: "contact you about something else", disabled: false, selected: false,  placeholder: "Wanna grab a drink?"}
  ];

  // Default selected option
  let selectedOption = options[0];

  // Handle option change
  function handleOptionChange(event) {
    const selectedId = parseInt(event.target.value);
    selectedOption = options.find(option => option.id === selectedId);
  }

  // Reset selected option on page refresh
  onMount(() => {
    selectedOption = options[0];
  });

  // Submit Form
  let submitStatus = '';

  const handleSubmit = async (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    submitStatus = 'submitting'

    try {

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      function updateStatus() {
        console.log("Form successfully submitted");
        submitStatus = 'success';
      }

      setTimeout(updateStatus, 1800);

    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., display error message to the user)
    }
  };
</script>

{#if submitStatus === 'submitting'}
  <p class="status-update">Submitting form ... one moment please.</p>
{:else if submitStatus === 'failed'}
  <p class="status-update">Yea nah ... that failed spectacularly!</p>
{:else if submitStatus === 'success'}
  <p class="status-update">Awesome sauce!  Ewe will hear from us soon.</p>

{:else}
  <form name="contact-form" class="contact-form" method="post"  data-netlify="true" on:submit={handleSubmit}>
    <input
      name="name"
      type="text"
      aria-label="name"
      autocomplete="off"
      bind:value={name}
      placeholder="Name"
      required
      />
    <input
      name="email"
      type="email"
      aria-label="email"
      autocomplete="off"
      bind:value={email}
      placeholder="Email"
      required
      />
    <select name="action" id="action" class="request" on:change={handleOptionChange} required>
      {#each options as option (option.id)}
        {#if option.disabled && option.selected }
          <option value={option.id} disabled selected>
            {option.reason}
          </option>
        {:else}
          <option value={option.id}>
            {option.reason}
          </option>
        {/if}
      {/each}
    </select>
    {#if selectedOption.id === 2}
      <input name="company" type="text" placeholder="Company" />
    {/if}
    <textarea
      name="text"
      aria-label="message"
      autocomplete="off"
      bind:value={message}
      placeholder={selectedOption.placeholder}
      required
      ></textarea>
    <button type="submit">SEND</button>
    <!-- calling all bots -->
    <input name="dob" type="text" style="display: none"/>
    <p>Please allow up to 48 hours for me to respond to your message.</p>
  </form>
{/if}

<style lang="scss">
  button {
    width: 100%;
  }

  .contact-form {
    margin-inline: auto;
  }

  .status-update {
    text-align: center;
  }

  textarea {
    height: 200px;
  }

  textarea:not([cols]) {
    width: 100%;
  }


  @media (--desktop-device) {
    .contact-form {
      max-width: 500px;
    }
  }
</style>
