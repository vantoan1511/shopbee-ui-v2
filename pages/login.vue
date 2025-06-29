<template>
  <div class="min-h-dvh bg-gray-100 flex items-center justify-center">
    <div class="md:px-10 px-5 md:py-5 py-3 flex justify-center items-center flex-col shadow rounded-2xl bg-white">
      <h3 class="px-3 py-3 text-2xl font-bold text-center text-primary">Login</h3>
      <Form v-slot="$form"
            :resolver="resolver"
            :initial-values="initialValues"
            @submit="onFormSubmit"
            class="flex flex-col gap-4 md:px-0  p-5 w-full md:w-sm">
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
            <InputText name="password" type="password" fluid autocomplete="shopbee"/>
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
        <Button type="submit" label="Login" severity="success" rounded/>
      </Form>
      <Button label="Dont have any account? Create one!" variant="link" size="small" rounded/>
    </div>
    <Toast/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {Form, type FormSubmitEvent} from '@primevue/forms';
import {zodResolver} from '@primevue/forms/resolvers/zod';
import {z} from 'zod';
import {useToast} from 'primevue/usetoast';

definePageMeta({
  layout: 'login'
})

const toast = useToast();
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

const onFormSubmit = ({valid, values}: FormSubmitEvent) => {
  if (valid) {
    if (values.username === 'shopbee' && values.password === 'shopbee') {
      router.push('/dashboard');
    } else {
      toast.add({severity: 'error', summary: 'Invalid credentials.', life: 3000});
    }
  } else {
    console.log('Login form is invalid');
  }
};
</script>
        