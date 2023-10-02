const { createApp, h } = Vue;

const signUp = {
    template: `
<div class="sign-up">
<h1><slot></slot></h1>
<button @click="submit">Submit</button>
</div>
`,
    methods: {
        submit() {
            alert('Submitted!');
        }
    },
    style: `
        .sign-up {
            color: blue;
        }
    `
};

const app = createApp({
    components: {
        'sign-up': signUp
    }
});

app.mount('#app');