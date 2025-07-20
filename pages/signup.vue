<template>
  <div class="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div
        class="flex justify-center items-center flex-col space-y-2 p-5 md:shadow-lg rounded-2xl bg-white dark:bg-gray-800">
      <h3 class="px-3 py-3 text-2xl font-bold text-primary">Sign up</h3>
      <Form v-slot="$form"
            :resolver="resolver"
            :initial-values="initialValues"
            @submit="onFormSubmit"
            class="flex flex-col gap-4 md:px-0  p-5 w-full md:w-sm">
        <Message v-if="loginFailure" severity="error" icon="pi pi-bell" size="small">
          Username/password incorrect!
        </Message>
        <FormField>
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
        </FormField>
        <FormField>
          <FloatLabel variant="on">
            <InputText type="email" name="email" fluid toggleMask/>
            <label for="email">Email</label>
          </FloatLabel>
          <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
            {{ $form.email.error?.message }}
          </Message>
        </FormField>
        <FormField>
          <FloatLabel variant="on">
            <Password name="password" fluid toggleMask/>
            <label for="password">Password</label>
          </FloatLabel>
          <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
            {{ $form.password.error?.message }}
          </Message>
        </FormField>
        <FormField>
          <FloatLabel variant="on">
            <Password :feedback="false" name="confirmPassword" fluid toggleMask/>
            <label for="confirmPassword">Confirm password</label>
          </FloatLabel>
          <Message v-if="$form.confirmPassword?.invalid" severity="error" size="small" variant="simple">
            {{ $form.confirmPassword.error?.message }}
          </Message>
        </FormField>
        <div class="flex gap-3">
          <div class="flex items-center gap-2 text-muted-color">
            <Checkbox binary v-model="rememberMe" input-id="rememberMe"/>
            <label for="rememberMe">I have read and agree with terms and conditions</label>
          </div>
        </div>
        <Button type="submit" :icon="PrimeIcons.SIGN_IN" label="Sign up" severity="success" rounded/>
      </Form>
      <NuxtLink to="/signin">
        <Button label="Already have account? Sign in!" variant="link" size="small" rounded/>
      </NuxtLink>
    </div>
    <Toast/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {Form, type FormSubmitEvent} from '@primevue/forms';
import {PrimeIcons} from "@primevue/core";
import {zodResolver} from "@primevue/forms/resolvers/zod";
import {z} from "zod";

const rememberMe = ref(false);

const initialValues = ref({
  username: '',
  password: '',
  email: '',
  confirmPassword: ''
});

const resolver = ref(zodResolver(
    z.object({
      username: z.string().min(1, {message: 'Username is required.'}),
      email: z.string().email({message: 'Invalid email address.'}),
      password: z.string().min(1, {message: 'Password is required.'}),
      confirmPassword: z.string().min(1, {message: 'Password confirmation is required.'})
    }).refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match.',
      path: ['confirmPassword']
    })
));

const loginFailure = ref(false);

const onFormSubmit = ({valid, values}: FormSubmitEvent) => {
  if (valid) {
    console.log(values);
  } else {
    console.log('Login form is invalid');
  }
};

</script>
        