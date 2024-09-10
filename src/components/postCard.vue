<script setup>
</script>
<template>
    <div class="px-6">
    <!--Card template with title embossed inside image. Description below image.-->
        <div class="w-container flex-col w-full">
            <div><slot name="image"></slot></div>
            <div class="-mt-10 px-4">
                <slot name="title"></slot>
            </div>
        </div>
        <div class="w-container w-full mt-4">
            <slot></slot>
        </div>
    </div>
</template>