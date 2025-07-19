<template>
  <div class="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div
        class="flex justify-center items-center flex-col space-y-2 p-5 md:shadow-lg rounded-2xl bg-white dark:bg-gray-800">
      <h3 class="px-3 py-3 text-2xl font-bold text-primary">Sign in</h3>
      <Button icon="pi pi-google" label="Sign in with Google" severity="secondary" fluid></Button>
      <Divider type="dashed" align="center" class="mt-1.5">
        <p class="text-sm text-muted-color">Or</p>
      </Divider>
      <Form v-slot="$form"
            :resolver="resolver"
            :initial-values="initialValues"
            @submit="onFormSubmit"
            class="flex flex-col gap-4 md:px-0  p-5 w-full md:w-sm">
        <Message v-if="loginFailure" severity="error" icon="pi pi-bell" size="small">Username/password incorrect!
        </Message>
        <div class="flex flex-col gap-1">
          <FloatLabel variant="on">
            <InputText fluid
                       autofocus
                       name="username"
                       type="text"
                       autocomplete="shopbee"/>
            <label for="username">Username</label>
          </FloatLabel>
          <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">
            {{ $form.username.error?.message }}
          </Message>
        </div>
        <div class="flex flex-col gap-1">
          <FloatLabel variant="on">
            <Password :feedback="false" name="password" fluid toggleMask/>
            <label for="password">Password</label>
          </FloatLabel>
          <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
            {{ $form.password.error?.message }}
          </Message>
        </div>
        <div class="flex gap-3">
          <div class="flex items-center gap-2 text-muted-color">
            <Checkbox binary v-model="rememberMe" input-id="rememberMe"/>
            <label for="rememberMe">Remember me</label>
          </div>
          <div class="flex-grow"/>
          <div class="flex items-center gap-2 text-muted-color">
            <Button label="Forgot password?" variant="link" size="small" rounded/>
          </div>
        </div>
        <Button type="submit" :icon="PrimeIcons.SIGN_IN" label="Sign in" severity="success" rounded/>
      </Form>
      <Button label="Dont have any account? Create one!" variant="link" size="small" rounded/>
      <Button :icon="toggleDarkModeIcon" severity="secondary" @click="toggleDarkMode()"/>
    </div>
    <Toast/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {Form, type FormSubmitEvent} from '@primevue/forms';
import {zodResolver} from '@primevue/forms/resolvers/zod';
import {z} from 'zod';
import {PrimeIcons} from "@primevue/core";

definePageMeta({
  layout: 'login'
})

const router = useRouter();

const rememberMe = ref(false);

const initialValues = ref({
  username: '',
  password: ''
});

const resolver = ref(zodResolver(
    z.object({
      username: z.string().min(1, {message: 'Username is required.'}),
      password: z.string().min(1, {message: 'Password is required.'})
    })
));

const loginFailure = ref(false);

const onFormSubmit = ({valid, values}: FormSubmitEvent) => {
  if (valid) {
    if (values.username === 'shopbee' && values.password === 'shopbee') {
      router.push('/dashboard');
    } else {
      loginFailure.value = true;
    }
  } else {
    console.log('Login form is invalid');
  }
};

const toggleDarkModeIcon = ref(PrimeIcons.MOON);
const toggleDarkMode = () => {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('light')
  } else {
    setTheme('dark')
  }
};

const setTheme = (theme: string) => {
  if (theme === 'dark') {
    document.documentElement.classList.add(`app-dark`);
    toggleDarkModeIcon.value = PrimeIcons.SUN;
  } else {
    document.documentElement.classList.remove(`app-dark`);
    toggleDarkModeIcon.value = PrimeIcons.MOON;
  }
  localStorage.setItem('theme', theme);
};

const getMediaPreference = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

onMounted(() => {
  setTheme(localStorage.getItem('theme') || getMediaPreference());
})

</script>
        