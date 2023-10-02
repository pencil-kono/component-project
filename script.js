const { createApp, h } = Vue;

const signUp = {
    template: `
<div class="sign-up">
<slot></slot>
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