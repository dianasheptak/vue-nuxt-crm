<template>
    <aside class="px-5 py-8 bg-input h-full relative w-full">
        <NuxtLink to="/" class="mb-10 block">
            <NuxtImg src="/logo.svg" width="120px" class="mx-auto"/>
        </NuxtLink>

        <button @click="logout" class="absolute top-2 right-3 transition-colors hover:text-purple-400">
            <Icon name="line-md:logout" size="35px" />
        </button>

        <LayoutMenu/>

    </aside>
</template>

<script setup>
const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

const logout = async () => {
    isLoadingStore.set(true)
    await account.deleteSession('current')
    authStore.clear()
    await router.push('/login')
    isLoadingStore.set(false)

}
</script>
